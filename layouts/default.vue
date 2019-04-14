<template>
    <div>
        <div class="header">
            <my-header/>
        </div>
        <div class="main">
            <nuxt/>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/public/header/index.vue'

export default {
    components: {
        MyHeader
    }
}
</script>

<style>
@import "@/assets/css/public/layout.css";
</style>
