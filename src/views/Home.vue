<template>
    <div class="main-search">
        <!-- 不用 key -->
        <div class="icon-title">
            <span class="iconfont">&#xe685;</span>
            <span>+</span>
            <span class="iconfont">&#xe684;</span>
            <span>
                -----
                <span class="iconfont">&#xe60b;</span> ----->
            </span>
            <span class="iconfont">&#xe600;</span>
        </div>
        <el-card class="box-card">
            <el-input type="textarea" :rows="7" placeholder="输入剧本摘要就能查看推荐的演员哦" v-model="content"></el-input>
        </el-card>
        <router-link to="/result">
            <el-button class="btn" type="primary" @click="recommend">演员推荐</el-button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            content: ''
        }
    },
    methods: {
        recommend: function() {
            this.$http
                .post('/api/insertSummary', {
                    content: this.content
                })
                .then(response => {})
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>
@import './../assets/css/main/home.css';
</style>
