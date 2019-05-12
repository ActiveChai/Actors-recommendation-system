const Router = require('koa-router')
const Person = require('./../dbs/models/person')

// let router = new Router()
let router = new Router({ prefix: '/api' })

router.get('/actor/:id', async (ctx) => {
    let person = await Person.find({ id: ctx.params.id })// 不能用findOne
    ctx.body = {
        person
        // person: person.map(item => { // 不能加value
        //     return { name: item.name, img: item.img, sex: item.sex, birthday: item.birthday, birthplace: item.birthplace, summary: item.summary }
        // })
    }
})

router.get('/actor', async (ctx) => {
    let person = await Person.find()
    ctx.body = {
        person
    }
})

module.exports = router
