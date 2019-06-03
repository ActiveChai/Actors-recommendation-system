const Router = require('koa-router')
const Country = require('./../dbs/models/country')

let router = new Router({ prefix: '/api' })

router.get('/country', async (ctx) => {
    let country = await Country.find({})
    ctx.body = {
        country: country.map(item => {
            return { country: item.country, actorNum: item.actorNum }
        })
    }
})

module.exports = router
