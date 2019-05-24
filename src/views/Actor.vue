<template>
    <div class="main-actor">
        <el-card class="box-card" :key="actor['name']">
            <div slot="header" class="clearfix">
                <span>{{actor['name']}}</span>
            </div>
            <div class="body">
                <img class="img" :src="actor['img']">
                <div class="actor">
                    <div class="text item">{{'性别：'+actor['sex']}}</div>
                    <div class="text item">{{'出生日期：'+actor['birthday']}}</div>
                    <div class="text item">{{'出生地：'+actor['birthplace']}}</div>
                    <div class="text item">{{'个人简介：'+actor['summary']}}</div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'actor',
    data() {
        return {
            actor: {}
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
                    id: this.$route.params.id
                })
                .then(response => {
                    this.actor = Object.values(response)[0][0]
                    // console.log(this.actor)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>
@import './../assets/css/main/actor.css';
</style>
