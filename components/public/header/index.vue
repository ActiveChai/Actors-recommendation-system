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
    components: {
        Headline,
        SearchBar
    }
}
</script>

<style>
@import "@/assets/css/public/header/index.css";
</style>
