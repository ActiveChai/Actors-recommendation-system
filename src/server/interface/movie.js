const Router = require('koa-router')
const Movie = require('./../dbs/models/movie')

let router = new Router({ prefix: '/api' })

router.post('/movie', async (ctx) => {
    const id = ctx.request.body.movie_id
    let movie = await Movie.find({ id: id })
    ctx.response.body = {
        img: movie.map(item => {
            return { img: item.img, id: item.id, name: item.name, year: item.year, rating: item.rating, tags: item.tags, summary: item.summary }
        })
    }
})

module.exports = router
