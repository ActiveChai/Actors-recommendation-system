<template>
    <div class="main-search">
        <div class="icon-title">
            <span class="iconfont">&#xe685;</span>
            <span>+</span>
            <span class="iconfont">&#xe684;</span>
            <span>
                -----
                <span class="iconfont">&#xe60b;</span> ----->
            </span>
            <span class="iconfont">&#xe600;</span>
            <!-- <span class="iconfont">&#xe685;</span>
            <span class="iconfont">&#xe60a;</span>
            <span class="iconfont">&#xe685;</span>
            <span class="iconfont">&#xe609;</span>
            <span class="iconfont">&#xe68a;</span>-->
        </div>
        <el-card class="box-card">
            <el-input type="textarea" :rows="7" placeholder="输入剧本摘要就能查看推荐的演员哦" v-model="textarea"></el-input>
        </el-card>
        <el-button class="btn" type="primary">演员推荐</el-button>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            textarea: ''
        }
    }
}
</script>

<style scoped>
@import './../assets/css/index/index.css';
</style>

