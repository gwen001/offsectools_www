<template>
    <div id="addtool" class="container h-100 p-3">
        <div class="row">
            <div class="col-xl-8 col-lg-10 col-sm-12">
                <div class="row">
                    <div class="col">
                        <h1>
                            Add a tool
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
                            1/ Be sure to carefully read the <a :href="$config.GITHUB_URL+'/issues/1'" class="highlight1" target="_blank">guidelines</a> first.
                        </p>
                        <p>
                            2/ Open a <a :href="$config.GITHUB_URL+'/issues/new'" class="highlight1" target="_blank">new issue</a> on GitHub.
                        </p>
                        <p>
                            3/ The title of the issue is the name of the tool as it will be displayed in {{ $config.APP_NAME }} with the prefix [addtool]
                        </p>
                        <p>
                            4/ The issue should provide the following informations:
                            <ul>
                                <li>[homepage]homepage of the tool (required)[/homepage]</li>
                                <li>[extra_link]an extra link to the tool (optional)[/extra_link]</li>
                                <li>[tags]list of tags separated by comma (required)[/tags]</li>
                                <li>[short_descr]short description of the tool (max:100) (required)[/short_descr]</li>
                                <li>[long_descr]a bigger description (optional)[/long_descr]</li>
                                <li>[image]an image attached OR a link (required)[/image]</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-9">
                        <img src="/assets/img/addtool-issue-example.png" class="rounded img-fluid" />
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
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
    name: 'addtool',
    mounted() {
        document.getElementById('main-content').scrollTo(0,0);
        this.$store.commit( 'resetSearch', 1 );
    }
}
</script>

<style scoped>
</style>

