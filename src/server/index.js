const bodyParser = require('koa-bodyparser')
const Koa = require('koa')
const mongoose = require('mongoose')
const dbConfig = require('./dbs/config')
const person = require('./interface/person')

const app = new Koa()
app.use(bodyParser())

app.use(person.routes()).use(person.allowedMethods())

// app.use(async ctx => {
//     ctx.body = 'Hello World'
// })

mongoose.connect(dbConfig.dbs, {
    useNewUrlParser: true
})

app.on('error', function (err, ctx) {
    console.log('server error', err)
}) // 监听错误信息

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000') // 监控3000端口
})

module.exports = app
