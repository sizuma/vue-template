<template>
    <div>
        <Counter></Counter>
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
    import Counter from './part/Counter.vue'
    export default {
        name: "App",
        components: {Counter},
        watch:{
            '$route': function (to, from) {
            }
        }
    }
</script>

<style scoped>

</style>
