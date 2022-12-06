<template>
    <div class="container h-100 p-3">
        <div class="row">
            <div class="col-8">
                <div class="row">
                    <div class="col">
                        <h1>
                            <span class="hashtag">#</span>about
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
                          Feel free to check the <a href="https://github.com/gwen001/offsectools/issues" target="_blank">GitHub</a> repository.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col mt-5">
                        <h1>
                            <span class="hashtag">#</span>team
                        </h1>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <p>
                          <a href="https://twitter.com/gwendallecoguic" target="_blank">Gwendal Le Coguic</a>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col mt-5">
                        <h1>
                            <span class="hashtag">#</span>credits
                        </h1>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <p>
                            Give back to Caesar what's belongs to Caesar, {{ $config.APP_NAME }} is very inspired by <a href="https://www.uneed.best/" target="_blank" class="uneedbest">uneed.best</a>, a list of useful web tools daily curated by hand by <a href="https://twitter.com/T_Zahil" class="uneedbest">Thomas Sanlis</a>.
                        </p>
                        <ul>
                            <li>Site built with <a href="https://nuxtjs.org/" target="_blank">NuxtJS</a></li>
                            <li>API built with <a href="https://laravel.com/" target="_blank">Laravel</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'about'
}
</script>

<style scoped>
h1 {
    font-size: 3em;
}
</style>

