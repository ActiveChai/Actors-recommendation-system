<template>
    <el-container>
        <el-header class="header">
            <my-header/>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <my-aside/>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
        <el-footer class="footer">
            <my-footer/>
        </el-footer>
    </el-container>
</template>

<script>
import MyHeader from './components/public/header/index.vue'
import MyAside from './components/public/aside/index.vue'
import MyFooter from './components/public/footer/index.vue'

export default {
    name: 'app',
    components: {
        MyHeader,
        MyAside,
        MyFooter
    }
}
</script>

<style scoped>
@import './assets/css/public/layout.css';
</style>
