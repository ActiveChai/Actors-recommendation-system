<template>
    <div class="main-actor">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>{{actor['name']}}</span>
            </div>
            <div class="body">
                <img class="img" :src="actor['img']">
                <div class="actor" @click="test">
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
            actor: []
            // urlId: '',
            // idUrl: ''
        }
    },
    mounted() {
        // this.$http
        //     .get(this.idUrl)
        //     .then(response => {
        //         this.actor = Object.values(response)[0]['person']
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        let _this = this
        this.bus.$on('get', function(item) {
            //将重新请求改为直接从另一个组件传递数据
            _this.actor = item //返回的是一个对象
            // console.log(_this.actor)
        })
        // console.log(this.actor)
    },
    methods: {
        test: function() {
            console.log(this.actor)
        }
    }
}
</script>

<style scoped>
@import './../assets/css/main/actor.css';
</style>
