<template>
    <div id="tagbar" class="vh-100 m-0">
        <!-- <h5>TAGS</h5> -->
        <ul class="list-group">
            <template v-for="tag,index in tags">
                <li aria-current="true" v-if="tag.tools_count > -1">
                    <nuxt-link :to="'/tag/'+tag.slug" class="list-group-item btn text-left d-flex justify-content-between align-items-center">
                        <span class="hashtag">#</span>
                        <span class="nicename w-100">{{ tag.nicename }}</span>
                        <span class="badge rounded-pill">{{ tag.tools_count }}</span>
                    </nuxt-link>
                </li>
            </template>
            <template v-if="$config.APP_ENV == 'local'">
                <li aria-current="true">
                    <a href="/tag/faketag" class="list-group-item btn text-left d-flex justify-content-between align-items-center">
                        <span class="hashtag">#</span>
                        <span class="nicename w-100">faketag</span>
                        <span class="badge rounded-pill">123456</span>
                    </a>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Tagbar',
        computed: {
            tags() {
                return this.$store.getters['tags/getTags'];
            },
        },
    }
</script>

<style scoped>
#tagbar {
    background-color: #162033;
    overflow-y: auto;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    width: 200px;
}
h5 {
    color: #4ADE80;
    font-weight: 500;
    padding-left: 10px;
}
ul {
    list-style-type: none;
}
li {
    /* border-left: 3px solid transparent; */
    margin-bottom: 2px;
    /* padding: 2px 10px 2px 10px; */
}
.list-group-item {
    background-color: transparent;
    border: 0px;
    padding: 6px;
}
li:hover {
    background-color: #1E293B;
    /* border-left: 3px solid #4ADE80; */
}
li.active .badge {
    background-color: #4ADE80;
    color: #fff;
    /* border-left: 3px solid #4ADE80; */
}
li.active {
    background-color: #1E293B;
    /* border-left: 3px solid transparent; */
    /* border-left: 3px solid #4ADE80; */
}
/* li:hover .hashtag {
    color: #4ADE80;
}
li.active .hashtag {
    color: #4ADE80;
} */
.btn {
    font-size: 0.92em;
}
.badge {
    color: #162033;
    background-color: #FFF;
}
</style>
