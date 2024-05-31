<template>
    <div id="highlighted-tool" class="">
        <div class="row">
            <template v-if="highlighted_tool">
                <div class="col-1"></div>
                <div class="col mb-5">
                    <div class="row">
                        <div class="col">
                            <h2>{{ highlighted_tool.nicename }}</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-sm-11 col-xs-12" style="border:0px solid #f00;">
                            <p class="short-descr">{{ highlighted_tool.short_descr }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <nuxt-link :to="'/tool/'+highlighted_tool.slug"><div class="box-border-gradient float-start"><div class="box-border-gradient-bg2"><font-awesome-icon icon="fas fa-circle-info" /> More infos</div></div></nuxt-link>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="col-1"></div>
                <div class="col mb-5">
                    <div class="row">
                        <div class="col">
                            <h2>Promote your tool</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-sm-11 col-xs-12" style="border:0px solid #f00;">
                            <p class="short-descr">{{ slogan }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <nuxt-link to="/advertise"><div class="box-border-gradient float-start"><div class="box-border-gradient-bg2"><font-awesome-icon icon="fas fa-circle-info" /> More infos</div></div></nuxt-link>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>


<script>
export default {
    name: 'HighlightedTool',
    props:['highlighted_tool'],
    data() {
        return {
            advertise_slogan: [
                'Showcase your cybersecurity solutions to a global audience!',
                'Boost your visibility among cybersecurity professionals and enthusiasts!',
                'Maximize your reach, feature your cybersecurity tools on our platform!',
                'Put your project on the cybersecurity map, list with us!',
                'Unlock new opportunities, get your cybersecurity tool discovered!',
                'Gain the exposure you deserve in the cybersecurity community!',
                'Drive traffic, build credibility, list your cybersecurity tool today!',
                'Stand out in the cybersecurity market, join our exclusive listings!',
                'Connect with potential users and investors, showcase your tool here!',
                'Your cybersecurity solution deserves to be seen, feature it on our site!',
            ]
        }
    },
    computed: {
        slogan() {
            var r = Math.floor(Math.random() * this.advertise_slogan.length);
            return this.advertise_slogan[r];
        }
    }
}
</script>

<style>
#highlighted-tool {
    margin-top: 15em;
}
#highlighted-tool h2 {
    font-size: 5em;
}
#highlighted-tool .short-descr {
    font-size: 1.7em;
    text-shadow: 2px 2px 4px rgba(0,0,0,.45);
}
#highlighted-tool .box-border-gradient-bg2 {
    padding-left: 1.1em;
    padding-right: 1.1em;
    font-size: 1.5em;
}
#highlighted-tool .box-border-gradient-bg2 svg {
    font-size: 1em;
    margin-right: 10px;
}
#highlighted-tool .box-border-gradient {
    background-color: rgba(22,32,51,1);
}
#highlighted-tool .box-border-gradient:hover {
    background-color: rgb(10, 12, 31, 1);
}


</style>