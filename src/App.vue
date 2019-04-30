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
                <!-- 不用 key -->
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
    },
    data() {
        return {}
    },
    computed: {
        key() {
            return this.$route.path + Math.random()
        }
    }
}
</script>

<style scoped>
@import './assets/css/public/layout.css';
</style>
