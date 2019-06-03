const Router = require('koa-router')
const Relationship = require('./../dbs/models/relationship')

let router = new Router({ prefix: '/api' })

router.post('/relationship', async (ctx) => {
    const personId = ctx.request.body.id
    let relationship = await Relationship.find({ person_id: personId })
    let movieIds = relationship.map(item => {
        return { movie_id: item.movie_id }
    })// [{...},{...}...]
    // let imgs = []
    // let img = await movieIds.map(async (item, index) => {
    //     let movie = await Movie.find({ id: item.movie_id })
    //     imgs[index] = movie[0]['img']

    //     if (index === movieIds.length) {
    //         console.log(imgs)
    //         // return imgs
    //     }
    // })
    ctx.response.body = {
        movieIds
    }
})

module.exports = router
