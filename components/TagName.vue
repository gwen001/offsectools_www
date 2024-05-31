<template>
    <div id="tagname" class="row ms-0 align-items-center" :style="`background-color: rgba(10,12,31,${opacity});`">
        <div class="col">
            <div class="row">
                <div class="col-1"></div>
                <div class="col ps-0">
                    <span>Tags&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span> <h1 class="align-middle mb-0">#{{ slug }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TagName',
    props:['slug'],
    data: function () {
        return {
            opacity: 0,
        }
    },
    methods: {
        handleScroll() {
            if( process.client ) {
                let scrollHeight = window.scrollY;
                let maxHeight = window.document.body.scrollHeight - window.document.documentElement.clientHeight;
                this.opacity = scrollHeight/100;
                if( this.opacity <= 0 ) {
                    this.opacity = 0;
                }
                if( this.opacity >= 1 ) {
                    this.opacity = 1;
                }
                // console.log(scrollHeight);
                // console.log(maxHeight);
                if( scrollHeight >= (maxHeight-200) ) {
                    //this.getPosts();
                }
            }
        },
    },
    created() {
        if( process.client ) {
            window.addEventListener('scroll', this.handleScroll);
            // this.getPosts();
        }
    },
}
</script>

<style>
#tagname {
    /* border: 1px solid #00f; */
    position: fixed;
    top: 65px;
    width: 100%;
    height: 66px;
    z-index: 10;
}
#tagname h1 {
    display: inline;
    font-size: 2.5em;
}
#tagname span {
    color: #aaa;
    font-size: 1.2em;
}
</style>