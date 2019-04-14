<template>
    <div class="search">
        <el-input class="search-p" placeholder="请输入摘要" v-model="search" clearable></el-input>
        <button class="el-button el-button--primary btn-p">
            <i class="el-icon-search"/>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    }
}
</script>


<style>
@import '@/assets/css/public/header/search.css';
</style>
