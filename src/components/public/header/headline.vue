<template>
    <div class="headline">
        <router-link :to="{path:'/'}">
            <span class="iconfont">&#xe67c;</span>
            演员推荐系统
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'headline',
    data() {
        return {}
    }
}
</script>

<style scoped>
@import './../../../assets/css/public/header/headline.css';
</style>
