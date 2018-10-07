<template>
    <p>{{counter}}</p>
</template>

<script>
    export default {
        name: "Counter",

        data: () => {
            return {
                counter: 0,
                intervalID: null,
            };
        },

        created: function () {
            this.intervalID = setInterval(() => this.inc(), 1000)
        },

        methods: {
            inc: function () {
                this.counter++;
            },
        },
    }
</script>

<style scoped>

</style>
