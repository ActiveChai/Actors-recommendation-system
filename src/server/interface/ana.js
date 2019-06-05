const Router = require('koa-router')
const Summary = require('./../dbs/models/summary')

let router = new Router({ prefix: '/api' })

router.get('/ana', async (ctx) => {
    let summary = await Summary.find({ id: 1 })
    // let summ = summary[0].summ.substr(0, summary[0].summ.length - 2).replace(/'/g, '"')
    let summ = JSON.parse(summary[0].summ.substr(0, summary[0].summ.length - 2).replace(/'/g, '"'))

    let temp = summ.result

    ctx.body = {
        temp
    }
})

module.exports = router
