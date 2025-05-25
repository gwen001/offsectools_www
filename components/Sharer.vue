<template>
    <div id="sharer">
        <div class="sharer-buttons">
            <a :href="'https://twitter.com/intent/tweet?text='+sharing_text+'%20'+sharing_url" target="_blank"><img class="twitter" :src="$config.ASSETS_URL+'/share/twitter.svg'" alt="twitter"></a>
            <a :href="'http://www.reddit.com/submit?url='+sharing_url+'&title='+sharing_text" target="_blank"><img class="reddit" :src="$config.ASSETS_URL+'/share/reddit.svg'" alt="reddit"></a>
            <a :href="'https://news.ycombinator.com/submitlink?u='+sharing_url+'&amp;t='+sharing_text" target="_blank"><img class="hackernews" :src="$config.ASSETS_URL+'/share/hackernews.svg'" alt="hackernews"></a>
            <a :href="'mailto:?subject='+sharing_text+'&body='+sharing_url" target="_blank"><img class="mail" :src="$config.ASSETS_URL+'/share/mail.svg'" alt="mail"></a>
            <a :href="'https://wa.me/?text='+sharing_text+'%20'+sharing_url" target="_blank"><img class="whatsapp" :src="$config.ASSETS_URL+'/share/whatsapp.svg'" alt="facebook"></a>
            <a :href="'https://t.me/share/url?url='+sharing_url+'&text='+sharing_text" target="_blank"><img class="telegram" :src="$config.ASSETS_URL+'/share/telegram.svg'" alt="facebook"></a>
            <a :href="'https://www.linkedin.com/shareArticle?mini=true&amp;url='+sharing_url+'&amp;title='+sharing_text" target="_blank"><img class="linkedin" :src="$config.ASSETS_URL+'/share/linkedin.svg'" alt="linkedin"></a>
            <a :href="'https://www.facebook.com/sharer/sharer.php?u='+sharing_url+'&t='+sharing_text" target="_blank"><img class="facebook" :src="$config.ASSETS_URL+'/share/facebook.svg'" alt="facebook"></a>
            <!-- <a :href="'https://twitter.com/intent/tweet?text='+sharing_text+'%20'+sharing_url" target="_blank"><img :src="$config.ASSETS_URL+'/share/twitter.png'" alt="twitter"></a>
            <a :href="'http://www.reddit.com/submit?url='+sharing_url+'&title='+sharing_text" target="_blank"><img :src="$config.ASSETS_URL+'/share/reddit.png'" alt="reddit"></a>
            <a :href="'https://news.ycombinator.com/submitlink?u='+sharing_url+'&amp;t='+sharing_text" target="_blank"><img :src="$config.ASSETS_URL+'/share/ycombinator.png'" alt="ycombinator"></a>
            <a :href="'https://www.facebook.com/sharer/sharer.php?u='+sharing_url" target="_blank"><img :src="$config.ASSETS_URL+'/share/facebook.png'" alt="facebook"></a>
            <a :href="'https://www.linkedin.com/shareArticle?mini=true&amp;url='+sharing_url+'&amp;title='+sharing_text" target="_blank"><img :src="$config.ASSETS_URL+'/share/linkedin.png'" alt="linkedin"></a> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sharer',
    props: [ 'tool' ],
    computed: {
        sharing_text() {
            return encodeURIComponent(this.tool.nicename+' is now on '+this.$config.APP_NAME+' check it out!');
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
}
@media all and (max-width: 572px) {
    #sharer {
        position: absolute;
        height: 100%;
        left: 35px;
        top: -30px;
        width: 100%;
    }
    #sharer a {
        float: left;
        margin-right: 7px;
    }
}
#sharer .sharer-buttons {
    border: 0px solid #0000ff;
    position: fixed;
    /* top: 0px; */
}
#sharer a {
    display: block;
    margin-bottom: 7px;
}
#sharer img {
    border-radius: 2px;
    width: 25px;
}
#sharer img:hover {
    opacity: 0.8;
}
.twitter {
    background-color: rgb(29, 155, 240);
}
.reddit {
    background-color: rgb(255, 69, 0);
}
.hackernews {
    background-color: rgb(255, 102, 0);
}
.telegram {
    background-color: rgb(44, 165, 224);
}
.facebook {
    background-color: rgb(8, 102, 255);
}
.whatsapp {
    background-color: rgb(18, 175, 10);
}
.linkedin {
    background-color: rgb(0, 123, 181);
}
.mail {
    background-color: rgb(136, 137, 144);
}
</style>
