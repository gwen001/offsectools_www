<template>
    <div id="tool-details" class="row">
        <div class="col-xl-8 col-lg-10 col-sm-12">
            <div class="row">
                <div class="col-xl-8 col-lg-9 col-sm-11 col-11">
                    <img :src="'/assets/img/tools/'+tool.picture" class="rounded tool-picture img-fluid" />
                </div>
                <div class="col-xl-3 col-lg-2 col-sm-1 col-1 text-end">
                    <a href="javascript:;" v-on:click="doSearch()" class="link-close"><svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"/></svg></a>
                </div>
            </div>
            <div class="row">
                <div class="tool-name col mt-3">
                    <h1>
                        <span class="nicename">{{ tool.nicename }}</span>
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="tool-short-descr col">
                    {{ tool.short_descr }}
                </div>
            </div>
            <div class="row mt-4" v-if="tool.descr">
                <div class="tool-descr col">
                    <p v-html="tool.descr.replace(/(?:\r\n|\r|\n)/g, '<br />')"></p>
                </div>
            </div>
            <div class="row mt-4">
                <div class="tool-tags col">
                    <template v-for="tag,index in tool.tags">
                        <a href="javascript:;" class="tag-link highlight1" v-on:click="setSearchTerm('#'+tag)">#{{ tag }}</a>&nbsp;
                    </template>
                </div>
            </div>
            <div class="row mt-5">
                <div class="tool-link col">
                    <a :href="tool.link" class="btn btn-outline-custom2" target="_blank">Try it</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToolDetails',
    props: [ 'tool' ],
    methods: {
        keyboardEvent (e) {
            // console.log(e.which);
            if( e.which === 27 ) {
                this.$router.push( '/' );
            }
        },
        doSearch() {
            // alert('doSearch');
            this.$router.push( '/' );
        },
        setSearchTerm: function (slug) {
            this.$store.commit( 'setSearchTerm', slug );
            this.$router.push( '/' );
        }
    },
    created() {
        window.addEventListener('keyup', this.keyboardEvent);
    },
    beforeDestroy() {
        window.removeEventListener('keyup', this.keyboardEvent);
    },
}
</script>

<style scoped>
.link-close:hover {
    color: #ddd;
}
</style>