<template>
    <div id="about" class="container h-100 p-3">
        <div class="row">
            <div class="col-xl-8 col-lg-10 col-sm-12">
                <div class="row">
                    <div class="col">
                        <h1>
                            Newsletter
                        </h1>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <nuxt-link to="/newsletter/newsletter-1.html" target="_blank" class="highlight2">Weekly newsletter N°1</nuxt-link>
                        <br /><nuxt-link to="/newsletter/newsletter-2.html" target="_blank" class="highlight2">Weekly newsletter N°2</nuxt-link>
                        <br /><nuxt-link to="/newsletter/newsletter-3.html" target="_blank" class="highlight2">Weekly newsletter N°3</nuxt-link>
                        <br /><nuxt-link to="/newsletter/newsletter-4.html" target="_blank" class="highlight2">Weekly newsletter N°4</nuxt-link>
                        <br /><nuxt-link to="/newsletter/newsletter-5.html" target="_blank" class="highlight2">Weekly newsletter N°5</nuxt-link>
                        <br /><nuxt-link to="/newsletter/newsletter-6.html" target="_blank" class="highlight2">Weekly newsletter N°6</nuxt-link>
                        <br /><nuxt-link to="/newsletter/newsletter-7.html" target="_blank" class="highlight2">Weekly newsletter N°7</nuxt-link>
                        <br /><nuxt-link to="/newsletter/newsletter-8.html" target="_blank" class="highlight2">Weekly newsletter N°8</nuxt-link>
                        <br /><nuxt-link to="/newsletter/newsletter-9.html" target="_blank" class="highlight2">Weekly newsletter N°9</nuxt-link>
                        <br /><nuxt-link to="/newsletter/newsletter-10.html" target="_blank" class="highlight2">Weekly newsletter N°10</nuxt-link>
                        <br /><nuxt-link to="/newsletter/newsletter-11.html" target="_blank" class="highlight2">Weekly newsletter N°11</nuxt-link>
                        <br /><nuxt-link to="/newsletter/newsletter-12.html" target="_blank" class="highlight2">Weekly newsletter N°12</nuxt-link>
                        <br /><nuxt-link to="/newsletter/newsletter-13.html" target="_blank" class="highlight2">Weekly newsletter N°13</nuxt-link>
                        <br /><nuxt-link to="/newsletter/newsletter-14.html" target="_blank" class="highlight2">Weekly newsletter N°14</nuxt-link>
                    </div>
                </div>
                <div class="mt-5 d-flex">
                    <Newsletter></Newsletter>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'about',
    computed: {
        sponsors() {
            return this.$store.getters['getSponsors'];
        }
    },
    mounted() {
        document.getElementById('main-content').scrollTo(0,0);
        this.$store.commit( 'resetSearch', 1 );
    }
}
</script>

<style scoped>
.sponsors img {
    margin-bottom: 10px;
    margin-right: 10px;
}
</style>

