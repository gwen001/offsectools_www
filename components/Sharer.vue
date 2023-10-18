<template>
    <div id="sharer">
        <div class="sharer-buttons">
            <a :href="'https://twitter.com/intent/tweet?text='+sharing_text+'%20'+sharing_url" target="_blank"><img src="/img/share/twitter.png" alt="twitter"></a>
            <a :href="'http://www.reddit.com/submit?url='+sharing_url+'&title='+sharing_text" target="_blank"><img src="/img/share/reddit.png" alt="reddit"></a>
            <a :href="'https://news.ycombinator.com/submitlink?u='+sharing_url+'&amp;t='+sharing_text" target="_blank"><img src="/img/share/ycombinator.png" alt="ycombinator"></a>
            <a :href="'https://www.facebook.com/sharer/sharer.php?u='+sharing_url" target="_blank"><img src="/img/share/facebook.png" alt="facebook"></a>
            <a :href="'https://www.linkedin.com/shareArticle?mini=true&amp;url='+sharing_url+'&amp;title='+sharing_text" target="_blank"><img src="/img/share/linkedin.png" alt="linkedin"></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sharer',
    props: [ 'tool' ],
    computed: {
        sharing_text() {
            return encodeURIComponent('Check '+this.tool.nicename+' on '+this.$config.APP_NAME);
        },
        sharing_url() {
            return encodeURIComponent(this.$config.APP_URL+this.$route.path);
        },
    },
    // mounted() {
    //     console.log(this.$config.APP_URL);
    //     console.log(this.$route);
    // }
}
</script>

<style scoped>
#sharer {
    border: 0px solid #ff0000;
    /* position: absolute;
    top: 0px;
    left: 0px;
    height: 100%; */
}
#sharer .sharer-buttons {
    border: 0px solid #0000ff;
    position: fixed;
    /* top: 0px; */
}
#sharer a {
    display: block;
    margin-bottom: 10px;
}
#sharer img {
    width: 20px;
}
</style>
