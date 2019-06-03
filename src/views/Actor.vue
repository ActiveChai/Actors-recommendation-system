<template>
    <div class="main-actor">
        <el-card class="box-card" :key="actor['name']">
            <div slot="header" class="clearfix">
                <span class="name">{{actor['name']}}</span>
                <el-button class="film" type="primary" @click="change(actor['id'])">参演电影</el-button>
            </div>
            <template v-if="noFilm">
                <div class="body">
                    <img :src="actor['img']">
                    <div class="actor">
                        <div class="text item">
                            <span class="name">性别：</span>
                            {{actor['sex']}}
                        </div>
                        <div class="text item">
                            <span class="name">出生日期：</span>
                            {{actor['birthday']}}
                        </div>
                        <div class="text item">
                            <span class="name">出生地：</span>
                            {{actor['birthplace']}}
                        </div>
                        <div class="text item">
                            <span class="name">个人简介：</span>
                            {{actor['summary']}}
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="picture">
                    <div v-for="item in img" :key="item.id">
                        <img :src="item.img">
                        <div class="img">
                            <div class="text item">
                                <span class="name">名称：</span>
                                {{item.name}}
                            </div>
                            <div class="text item">
                                <span class="name">年份：</span>
                                {{item.year}}
                            </div>
                            <div class="text item">
                                <span class="name">评分：</span>
                                {{item.rating}}
                            </div>
                            <div class="text item">
                                <span class="name">标签：</span>
                                {{item.tags}}
                            </div>
                            <div class="text item">
                                <span class="name">简介：</span>
                                {{item.summary}}
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'actor',
    data() {
        return {
            actor: {},
            noFilm: true,
            movieId: [],
            img: []
        }
    },
    watch: {
        $route: 'req'
    },
    mounted() {
        this.req()
    },
    methods: {
        req: function() {
            this.$http
                .post('/api/actor', {
                    name: this.$route.params.name
                })
                .then(response => {
                    this.actor = Object.values(response)[0][0]
                })
                .catch(error => {
                    console.log(error)
                })
        },
        change: function(id) {
            this.noFilm = !this.noFilm
            if (this.noFilm) {
                this.$http
                    .post('/api/relationship', {
                        id: id
                    })
                    .then(response => {
                        this.movieId = Object.values(response)[0]['movieIds']
                    })
                    .catch(error => {
                        console.log(error)
                    })
                this.movieId.forEach((item, index) => {
                    this.$http
                        .post('/api/movie', {
                            movie_id: item.movie_id
                        })
                        .then(response => {
                            this.movieId = Object.values(response)[0]['img'][0]
                            console.log(this.movieId)
                            this.img[index] = this.movieId
                        })
                        .catch(error => {
                            console.log(error)
                        })
                })
            }
        }
    }
}
</script>

<style scoped>
@import './../assets/css/main/actor.css';
</style>
