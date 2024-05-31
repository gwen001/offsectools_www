<template>
    <div id="about" class="container h-100 p-3">
        <div class="row">
            <div class="col-xl-8 col-lg-10 col-sm-12">
                <div class="row">
                    <div class="col">
                        <h1>
                            About
                        </h1>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <p>
                            {{ $config.APP_NAME }}
                            is a vast listing of security tools designed to help pentesters and bug hunters in their daily task.
                            The list is organized by tags and provide a quick search engine.
                            The list is feeded by the author and the community.
                        </p>
                        <p>
                            Tools developped by sponsors are highlighted.
                            <br/>And every week, 10 random tools are promoted on the homepage.
                        </p>
                        <p>
                          Feel free to check the <a :href="$config.GITHUB_URL" class="highlight2" target="_blank">GitHub repository</a> and the <a :href="$config.ANALYTICS_URL" class="highlight2" target="_blank">public analytics page</a>.
                        </p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col">
                        <h1>
                            Team
                        </h1>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <p>
                            <a href="https://twitter.com/gwendallecoguic" class="highlight2" target="_blank">Gwendal Le Coguic</a>
                        </p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col">
                        <h1>
                            Sponsors
                        </h1>
                    </div>
                </div>
                <div class="row mt-3 sponsors">
                    <div class="col">
                        <template v-for="sponsor,index in sponsors">
                            <a :href="'https://github.com/'+sponsor.name" target="_blank"><img :src="'https://github.com/'+sponsor.name+'.png?size=48'" width="48" class="rounded-circle" :alt="sponsor.name" /></a>
                        </template>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col">
                        <h1>
                            Credits
                        </h1>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <p>
                            Thanks to <nuxt-link to="/contributors" class="highlight2">Contributors</nuxt-link> for feeding the website.
                            <br />Thanks to the artists who provide <a href="/assets/tags/" class="highlight2">wallpapers</a>.
                        </p>
                        <p>
                            Give back to Caesar what belongs to Caesar, {{ $config.APP_NAME }} is widely inspired by <a href="https://www.uneed.best/" target="_blank" class="uneedbest">uneed.best</a>, a list of useful web tools daily curated by hand by <a href="https://twitter.com/T_Zahil" class="uneedbest">Thomas Sanlis</a>.
                        </p>
                        <ul>
                            <li>Site built with <a href="https://nuxtjs.org/" class="discret" target="_blank">NuxtJS</a></li>
                            <li>API built with <a href="https://laravel.com/" class="discret" target="_blank">Laravel</a></li>
                        </ul>
                    </div>
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
        // this.$store.commit( 'setAwesomeBackground', [this.$config.ASSETS_URL+'/background/about.jpg','rez0','https://twitter.com/rez0__'] );
        this.$store.commit( 'resetAwesomeBackground' );
    }
}
</script>

<style scoped>
.sponsors img {
    margin-bottom: 10px;
    margin-right: 10px;
}
</style>

