<template>
    <div class="search">
        <el-input class="search-p" placeholder="演员搜索" v-model="search" clearable></el-input>
        <router-link :to="searchUrl">
            <button class="el-button el-button--primary btn-p">
                <i class="el-icon-search"/>
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'searchbar',
    data() {
        return {
            search: ''
        }
    },
    computed: {
        searchUrl: function() {
            return '/actor/' + this.search
        }
    }
}
</script>

<style scoped>
@import './../../../assets/css/public/header/search.css';
</style>
