<template>
    <div class="contain">
        <headline/>
        <search-bar/>
    </div>
</template>

<script>
import Headline from './headline'
import SearchBar from './searchBar'

export default {
    name: 'myheader',
    components: {
        Headline,
        SearchBar
    }
}
</script>

<style scoped>
@import './../../../assets/css/public/header/index.css';
</style>
