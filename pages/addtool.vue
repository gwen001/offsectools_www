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
                            To register a tool to be listed in {{ $config.APP_NAME }}, please use the following process:
                        </p>
                        <p>
                            1/ Be sure to carefully <a :href="$config.GITHUB_URL+'/issues/1'" class="highlight2" target="_blank">read the guidelines</a> first.
                        </p>
                        <p>
                            2/ <a :href="$config.GITHUB_URL+'/issues/new?assignees=&labels=&template=add-a-tool.md&title=%5Baddtool%5D+Tool+NiceName'" class="highlight2" target="_blank">Open a new issue</a> using the template created for that purpose on GitHub.
                        </p>
                        <p>
                            3/ Fill all necessary informations, some are required, some are optional.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-9">
                        <img src="/img/addtool-issue-example.png" class="rounded img-fluid" />
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <p>
                            4/ Submit the issue.
                        </p>
                        <p>
                            5/ The issue will be handled by the bot and the tool confirmed after human check.
                            <br>Note that the team reserves the right to accept/refuse the submission and change any details if needed.
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
        this.$store.commit( 'setAwesomeBackground', ['/img/bg-default2.jpg','@rez0','https://twitter.com/rez0__'] );
    }
}
</script>

<style scoped>
</style>

