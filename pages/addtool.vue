<template>
    <div class="container h-100 p-3">
        <div class="row">
            <div class="col-8">
                <div class="row">
                    <div class="col">
                        <h1>
                            <span class="hashtag">#</span>addtool
                        </h1>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <p>
                            This project is still under development, so for now the only way to add a tool is manually.
                            If you want to register a tool to be listed in {{ $config.APP_NAME }}, please use the following process so it could be easily automated:
                        </p>
                        <p>
                            1/ Be sure to carefully read the <a href="https://github.com/gwen001/offsectools_www/issues/1" target="_blank">guidelines</a> first.
                        </p>
                        <p>
                            2/ Open a <a href="https://github.com/gwen001/offsectools_www/issues" target="_blank">new issue</a> on GitHub.
                        </p>
                        <p>
                            3/ The title of the issue is the name of the tool as it will be displayed in {{ $config.APP_NAME }} with the prefix [addtool]
                        </p>
                        <p>
                            4/ The issue should provide the following informations:
                            <ul>
                                <li>[descr]short description of the tool (max:80)[/descr]</li>
                                <li>[link]link to the tool[/link]</li>
                                <li>[tags]list of tags separated by comma[/tags]</li>
                                <li>an image attached (not a link) used as a preview</li>
                            </ul>
                        </p>
                        <p>
                            <nuxt-img src="/assets/img/addtool-issue-example.png" sizes="sm:100vw md:50vw lg:500px" />
                        </p>
                        <p>
                            5/ Submit the issue.
                        </p>
                        <p>
                            6/ The issue will be handled by the bot and the tool confirmed after human check.
                            <br>Note that the team reserves the right to change any details.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'addtool'
}
</script>

<style scoped>
h1 {
    font-size: 3em;
}
</style>

