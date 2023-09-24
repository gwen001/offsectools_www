<template>
    <a id="random-tool" href="javascript:;" v-on:click="randomtool" :class="[from=='topbar' ? 'ms-3' : '']">Random tool</a>
</template>

<script>
export default {
    name: 'RandomTool',
    props: ['from'],
    methods: {
        randomtool: function (event) {
            const t_tools = this.$store.getters['getTools'];
            const r = Math.floor(Math.random() * t_tools.length);
            const tool = this.tool = t_tools[r];
            this.$store.commit( 'resetSearch', 1 );
            this.$router.push( '/tool/'+tool.slug );
        },
    },
}
</script>

<style scoped>
</style>