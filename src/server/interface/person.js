const Router = require('koa-router')
const Person = require('./../dbs/models/person')

let router = new Router()

router.get('/actor/:id', async (ctx) => {
    let person = await Person.find({ id: ctx.params.id })// 不能用findOne
    ctx.body = {
        code: 0,
        person: person.map(item => { // 不能加value
            return { name: item.name, img: item.img, sex: item.sex, birthday: item.birthday, birthplace: item.birthplace, summary: item.summary }
        })
    }
})

module.exports = router
