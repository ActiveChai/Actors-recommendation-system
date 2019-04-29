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
    name: 'myfooter',
    components: {
        mLeft,
        mRight
    }
}
</script>

<style scoped>
@import './../../../assets/css/public/footer/footer.css';
</style>

