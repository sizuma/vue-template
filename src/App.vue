<template>
    <div>
        <router-link to="/">
            index
        </router-link>
        <router-link to="/about">
            about
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App",

        watch:{
            '$route': function (to, from) {
            }
        }
    }
</script>

<style scoped>

</style>
