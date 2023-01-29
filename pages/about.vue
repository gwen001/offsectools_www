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
                          Feel free to check the <a :href="$config.GITHUB_URL" class="highlight1" target="_blank">GitHub repository</a>.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col mt-5">
                        <h1>
                            Team
                        </h1>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <p>
                            <a href="https://twitter.com/gwendallecoguic" class="highlight1" target="_blank">Gwendal Le Coguic</a>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col mt-5">
                        <h1>
                            Credits
                        </h1>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <p>
                            Thanks to all <nuxt-link to="/contributors" class="highlight1">Contributors</nuxt-link>.
                        </p>
                        <p>
                            Give back to Caesar what's belong to Caesar, {{ $config.APP_NAME }} is very inspired by <a href="https://www.uneed.best/" target="_blank" class="uneedbest">uneed.best</a>, a list of useful web tools daily curated by hand by <a href="https://twitter.com/T_Zahil" class="uneedbest">Thomas Sanlis</a>.
                        </p>
                        <ul>
                            <li>Site built with <a href="https://nuxtjs.org/" class="highlight2" target="_blank">NuxtJS</a></li>
                            <li>API built with <a href="https://laravel.com/" class="highlight2" target="_blank">Laravel</a></li>
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
    mounted() {
        document.getElementById('main-content').scrollTo(0,0);
        this.$store.commit( 'resetSearchTerm' );
    }
}
</script>

<style scoped>
</style>

