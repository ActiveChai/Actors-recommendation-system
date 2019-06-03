const Router = require('koa-router')
const Most = require('./../dbs/models/most')

let router = new Router({ prefix: '/api' })

router.get('/most', async (ctx) => {
    let most = await Most.find({})
    ctx.body = {
        most
    }
})

module.exports = router
