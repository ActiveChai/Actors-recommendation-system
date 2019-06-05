const Router = require('koa-router')
const Summary = require('./../dbs/models/summary')
const ReActor = require('./../dbs/models/reactor')

let router = new Router({ prefix: '/api' })

router.get('/result', async (ctx) => {
    let summary = await Summary.find({ id: 1 })
    // let summ = summary[0].summ.substr(0, summary[0].summ.length - 2).replace(/'/g, '"')
    let summ = JSON.parse(summary[0].summ.substr(0, summary[0].summ.length - 2).replace(/'/g, '"'))

    let temp = summ.result
    let arr = []

    for (let key1 in temp) {
        let M = { label: '', max: 0 }
        for (let key2 in temp[key1]) {
            if (temp[key1][key2] > M.max && key2 !== 'count') {
                M.max = temp[key1][key2]
                M.label = key2
            }
        }
        arr.push(M)
    }

    let actors = []

    for (let i = 0; i < arr.length; i++) {
        let actor
        switch (arr[i].label) {
            case 'PA':
                actor = await ReActor.find({}).sort({ PA: -1 }).limit(5)
                break
            case 'PE':
                actor = await ReActor.find({}).sort({ PE: -1 }).limit(5)
                break
            case 'PD':
                actor = await ReActor.find({}).sort({ PD: -1 }).limit(5)
                break
            case 'PH':
                actor = await ReActor.find({}).sort({ PH: -1 }).limit(5)
                break
            case 'PG':
                actor = await ReActor.find({}).sort({ PG: -1 }).limit(5)
                break
            case 'PB':
                actor = await ReActor.find({}).sort({ PB: -1 }).limit(5)
                break
            case 'PK':
                actor = await ReActor.find({}).sort({ PK: -1 }).limit(5)
                break
            case 'NA':
                actor = await ReActor.find({}).sort({ NA: -1 }).limit(5)
                console.log(arr[i])
                break
            case 'NB':
                actor = await ReActor.find({}).sort({ NB: -1 }).limit(5)
                break
            case 'NJ':
                actor = await ReActor.find({}).sort({ NJ: -1 }).limit(5)
                break
            case 'NH':
                actor = await ReActor.find({}).sort({ NH: -1 }).limit(5)
                break
            case 'PF':
                actor = await ReActor.find({}).sort({ PF: -1 }).limit(5)
                break
            case 'NI':
                actor = await ReActor.find({}).sort({ NI: -1 }).limit(5)
                break
            case 'NC':
                actor = await ReActor.find({}).sort({ NC: -1 }).limit(5)
                break
            case 'NG':
                actor = await ReActor.find({}).sort({ NG: -1 }).limit(5)
                break
            case 'NE':
                actor = await ReActor.find({}).sort({ NE: -1 }).limit(5)
                break
            case 'ND':
                actor = await ReActor.find({}).sort({ ND: -1 }).limit(5)
                break
            case 'NN':
                actor = await ReActor.find({}).sort({ NN: -1 }).limit(5)
                break
            case 'NK':
                actor = await ReActor.find({}).sort({ NK: -1 }).limit(5)
                break
            case 'NL':
                actor = await ReActor.find({}).sort({ NL: -1 }).limit(5)
                break
            case 'PC':
                actor = await ReActor.find({}).sort({ PC: -1 }).limit(5)
                break
            default:
                break
        }
        actors.push(actor)
    }

    ctx.body = {
        actors
    }
})

module.exports = router
