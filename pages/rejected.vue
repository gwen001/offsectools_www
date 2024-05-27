<template>
    <div id="tools-rejected" class="container h-100 p-3">
        <div class="row">
            <div class="col-xl-8 col-lg-10 col-sm-12">
                <div class="row">
                    <div class="col">
                        <h1>
                            Rejected tools
                        </h1>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <p>
                            As said in the <a href="https://github.com/gwen001/offsectools_www/issues/1" target="_blank" class="highlight2">guidelines</a>, submitted tools can be accepted or rejected by the team after being reviewed.
                            There can be several reasons for what a tool is not accepted, here are some of them:
                            <ul>
                                <li>it's just a chain of multiple tools</li>
                                <li>it's a single CVE exploit/PoC</li>
                                <li>it's a common utility provided by OS</li>
                                <li>it's malicious or harmless by purpose</li>
                                <li>it's not related to security</li>
                            </ul>
                            or something else...
                            <br><br>
                            However, there are real humans behind all of this and mistakes happen.
                            If you think that one this tool deserve a second chance, feel free to leave a comment on the corresponding issue on GitHub and we will check it again.
                        </p>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <p>
                            <template v-for="tool,index in rejected">
                                <a :href="tool.homepage" target="_blank" class="highlight2" :title="tool.nicename">{{ tool.nicename }}</a>
                                <span class="small">(<a :href="'https://github.com/gwen001/offsectools_www/issues/'+tool.github_issue" target="_blank" :title="tool.nicename">#{{ tool.github_issue }}</a>)</span>
                                -
                                {{ tool.short_descr }}
                                <br>
                            </template>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'rejected',
    computed: {
        rejected() {
            return this.$store.getters['getRejected'];
        }
    },
    async mounted() {
        document.getElementById('main-content').scrollTo(0,0);
        this.$store.commit( 'resetSearch', 1 );
        this.$store.commit( 'setAwesomeBackground', [this.$config.ASSETS_URL+'/background/newsletter.jpg','rez0','https://twitter.com/rez0__'] );
    }
}
</script>

<style scoped>
</style>

