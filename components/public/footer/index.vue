<template>
    <div class="center">
        <m-left/>
        <m-right/>
    </div>
</template>

<script>
import mLeft from './left'
import mRight from './right'

export default {
    components: {
        mLeft,
        mRight
    }
}
</script>

<style>
@import '@/assets/css/public/footer/footer.css';
</style>
