const Router = require('koa-router')
const Summary = require('./../dbs/models/summary')
const exec = require('child_process').exec
const iconv = require('iconv-lite')// 解决中文乱码

let router = new Router({ prefix: '/api' })

router.post('/insertSummary', async (ctx) => {
    const content = ctx.request.body.content
    const ok = 'ok'

    exec('python chai.py ' + content, { encoding: 'buffer' }, async function (error, stdout, stderr) {
        if (error) {
            console.error('error: ' + error)
            return
        }
        console.log(iconv.decode(stdout, 'cp936'))
        await Summary.update({ id: 1 }, { summ: iconv.decode(stdout, 'cp936') })
    })

    ctx.response.body = {
        ok
    }
})

module.exports = router
