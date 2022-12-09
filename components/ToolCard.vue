<template>
    <div class="card h-100">
        <img :src="'/assets/img/tools/'+tool.picture" class="card-img-top tool-picture" />
        <div class="card-body">
            <h6 class="card-title tool-name">
                <nuxt-link :to="'/tool/'+tool.slug" class="stretched-link">{{ tool.nicename }}</nuxt-link>
            </h6>
            <p class="card-text tool-descr">{{ tool.short_descr }}</p>
        </div>
        <div class="tool-tags">
            <p class="card-text tool-tags">
                <template v-for="tag,index in tool.tags">
                    <nuxt-link :to="'/tag/'+tag" class="tag-link">#{{ tag }}</nuxt-link>&nbsp;
                </template>
            </p>
        </div>
        <div class="card-footer text-center" style="z-index:9">
            <a :href="tool.link" target="_blank" class="tool-link">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ToolCard',
        props: ['tool']
    }
</script>

<style scoped>
.card, .card-body, .list-group-item {
    background-color: rgb(30 41 59);
}
.card {
    border-color: rgb(22 32 51);
    transition: transform .2s;
}
.card:hover {
    transform: scale(1.03);
    /* transform: translate(0px, -10px); */
}
.card-body {
    margin-bottom: 0px;
    margin-top: 0px;
}
.card-footer {
    background-color: rgb(22 32 51);
}
.tool-name {
    color: #4ADE80;
    font-weight: bold;
}
.tool-picture {
    height: 200px;
}
.tool-descr {
}
.tool-tags {
    font-size: 0.9em;
    padding-left: 10px;
    padding-bottom: 10px;
}
.tool-link svg {
    color: #fff;
    width: 25px;
}
.tool-link svg:hover {
    color: #4ADE80;
}
.tool-tags a {
    color: #fff;
    z-index: 9;
}
.tag-link {
    position :relative;
}
</style>
