<template>
    <div id="advertise" class="container h-100 p-3">
        <div class="row">
            <div class="col-xl-8 col-lg-10 col-sm-12">
                <div class="row">
                    <div class="col">
                        <h1>
                            Advertising on {{ $config.APP_NAME }}
                        </h1>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <p>
                            As a developper it can be difficult to get visibility for a personal project. If you have a website you need visitors and a good SEO, if you put it on GitHub it's lost among thousands of other projects...
                        </p>
                        <p>
                            As a company you may want to promote your tools with real users like security researchers, bug hunters, pentesters and any kind of security enthusiasts.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="mt-5 col">
                        <div class="row mb-3">
                            <div class="col">
                                <h4>STATISTICS - {{ current_year }}</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="card" style="">
                                    <div class="card-body p-1 stats text-center">
                                        <span class="number">{{ total_users }}</span>
                                        <br><span class="">Visitors</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card" style="">
                                    <div class="card-body p-1 stats text-center">
                                        <span class="number">{{ total_views }}</span>
                                        <br><span class="">Page views</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row d-flex">
                    <div class="d-flex mt-5 col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <div class="card" style="">
                            <div class="card-body p-4 align-content-center text-center highlight1">
                                <p class="pay">Select your payment, generate immediate interest for your project.</p>
                                <a id="call-to-action" href="https://github.com/sponsors/gwen001" target="_blank" class="btn btn-custom1 mt-3">Promote your tool</a>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column mt-5 col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                        <div class="card" style="">
                            <div class="card-body highlight1">
                                <h3 class="card-title color-custom1">Sponsorship</h3>
                                <p class="card-text mt-3 mb-2">
                                    <font-awesome-icon icon="fas fa-check" /> Sponsors are shown in the weekly newsletter.
                                </p>
                                <p class="card-text mb-2">
                                    <font-awesome-icon icon="fas fa-check" /> Sponsors are shown in the about page.
                                </p>
                                <p class="card-text mb-2">
                                    <font-awesome-icon icon="fas fa-check" /> Sponsors tools are backgrounded in tags pages.
                                </p>
                                <p class="card-text mb-2">
                                    <font-awesome-icon icon="fas fa-check" /> Sponsors tools appear first in tags pages.
                                </p>
                                <p class="card-text mb-2">
                                    <font-awesome-icon icon="fas fa-check" /> Sponsors tools appear first in search result.
                                </p>
                                <p class="card-text">
                                    <font-awesome-icon icon="fas fa-check" /> Sponsors tools appear more often in related tools.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- <div class="row justify-content-between">
                    <div class="mt-5 col-xxl-5 col-xl-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="card" style="">
                            <div class="card-body p-4 text-center highlight1">
                                <p class="pay">Select your payment, generate immediate interest for your project.</p>
                                <a href="https://github.com/sponsors/gwen001" target="_blank" class="btn btn-custom1 mt-3">Promote your tool</a>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 col-xxl-4 col-xl-4 col-md-5 col-sm-12 col-xs-12">
                        <div class="row mb-3">
                            <div class="col">
                                STATISTICS - 2024
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="card" style="">
                                    <div class="card-body p-1 stats text-center">
                                        <span class="number">16,709</span>
                                        <br><span class="small">Visitors</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card" style="">
                                    <div class="card-body p-1 stats text-center">
                                        <span class="number">58,387</span>
                                        <br><span class="small">Page views</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->

                <div class="row mt-5">
                    <div class="col">
                        <div class="card" style="">
                            <div class="card-body highlight2">
                                <h3 class="card-title color-custom2">Boost your visibility among cybersecurity professionals and enthusiasts!</h3>
                                <p class="card-text mt-3">
                                    <font-awesome-icon icon="fas fa-plus" />
                                    <u>Targeted Exposure:</u>
                                    Gain access to a dedicated and targeted audience of cybersecurity professionals, enthusiasts, and decision-makers. This targeted exposure increases the chances of your tool being discovered by the right people.
                                </p>
                                <p class="card-text mt-3">
                                    <font-awesome-icon icon="fas fa-plus" />
                                    <u>Community Engagement:</u>
                                    Engage with a community of like-minded individuals who are passionate about cybersecurity. This engagement can provide valuable feedback, user reviews, and insights to help improve your project.
                                </p>
                                <p class="card-text mt-3">
                                    <font-awesome-icon icon="fas fa-plus" />
                                    <u>Enhanced visibility in search engines:</u>
                                    Our platform is optimized for search engines, this can improve your project's SEO ranking and overall online visibility, making it easier for users to find your tool.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="row mt-5">
                    <div class="col-7">
                        <div class="card" style="">
                            <div class="card-body highlight1">
                                <h3 class="card-title color-custom1">Sponsorship</h3>
                                <p class="card-text mt-3 mb-2">
                                    <font-awesome-icon icon="fas fa-check" /> Sponsors are shown in the weekly newsletter.
                                </p>
                                <p class="card-text mb-2">
                                    <font-awesome-icon icon="fas fa-check" /> Sponsors are shown in the about page.
                                </p>
                                <p class="card-text mb-2">
                                    <font-awesome-icon icon="fas fa-check" /> Sponsors tools are backgrounded in tags pages.
                                </p>
                                <p class="card-text mb-2">
                                    <font-awesome-icon icon="fas fa-check" /> Sponsors tools appear first in tags pages.
                                </p>
                                <p class="card-text mb-2">
                                    <font-awesome-icon icon="fas fa-check" /> Sponsors tools appear first in search result.
                                </p>
                                <p class="card-text">
                                    <font-awesome-icon icon="fas fa-check" /> Sponsors tools appear more often in related tools.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="card" style="">
                            <div class="card-body highlight1">
                                <h3 class="card-title color-custom1">Sponsorship</h3>
                                <p class="card-text mt-3 mb-2">
                                    <font-awesome-icon icon="fas fa-check" /> Sponsors are listed in the weekly newsletter.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> -->

                <div class="row mt-5">
                    <div class="col">
                        <div class="card" style="">
                            <div class="card-body highlight2">
                                <h3 class="card-title color-custom2">Put your project on the cybersecurity map, list with us!</h3>
                                <p class="card-text mt-3">
                                    <font-awesome-icon icon="fas fa-plus" />
                                    <u>Targeted Exposure:</u>
                                    Our platform attracts a significant amount of traffic from individuals and organizations seeking cybersecurity solutions. You would drive more traffic to your website and generate valuable leads for potential users.
                                </p>
                                <p class="card-text mt-3">
                                    <font-awesome-icon icon="fas fa-plus" />
                                    <u>Community Engagement:</u>
                                    Listing your project opens doors to networking opportunities with other cybersecurity professionals. This can lead to collaborations, partnerships, and opportunities for growth and development.
                                </p>
                                <p class="card-text mt-3">
                                    <font-awesome-icon icon="fas fa-plus" />
                                    <u>Enhanced visibility in search engines:</u>
                                    Compared to traditional advertising methods, {{ $config.APP_NAME }} is a cost-effective way to promote your tool. You get sustained visibility without the high costs associated with other forms of advertising.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <p>
                    Credibility and Trust:
                    Being featured on a reputable cybersecurity platform enhances the credibility and trustworthiness of your project. Users often trust platforms that curate and list quality tools, which can translate into increased user confidence in your project.
                </p> -->
                <!-- <p>
                    Marketing Support:
                    We offer additional marketing support to our listed projects, including social media promotion, newsletter features, and spotlight articles. This amplifies your reach and helps you connect with a broader audience.
                </p> -->
                <!-- <p>
                    Competitive Advantage:
                    In a crowded market, standing out is crucial. Listing your project on our platform gives you a competitive edge by positioning your tool alongside other trusted and vetted cybersecurity solutions.
                </p> -->
                <!-- <p>
                    Continuous Improvement:
                    The feedback and insights you gain from being part of our platform can help you continuously improve your project. This iterative process ensures that your tool remains relevant and effective in addressing cybersecurity challenges.
                </p> -->
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'about',
    computed: {
        current_year() {
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            return currentYear;
        },
        total_views() {
            var site_stats = this.$store.getters['getSiteStats'];
            if( site_stats['total_views'] ) {
                return site_stats['total_views'];
            } else {
                return '?';
            }
        },
        total_users() {
            var site_stats = this.$store.getters['getSiteStats'];
            if( site_stats['total_users'] ) {
                return site_stats['total_users'];
            } else {
                return '?';
            }
        },
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
#advertise #call-to-action {
    font-size: 1.2em;
}
#advertise .card {
    background-color: #141729;
}
#advertise .card .pay {
    font-size: 1.2em;
}
#advertise .card svg {
    font-size: 1em;
    margin-right: 5px;
}
#advertise .card .highlight1 {
    border: 1px solid #f9205a;
    border-radius: .25rem;
}
#advertise .card .highlight1 h5 {
    color: #f9205a;
}
#advertise .card .highlight2 {
    border: 1px solid #22d3ee;
    border-radius: .25rem;
}
#advertise .card .highlight2 h5 {
    color: #22d3ee;
}
#advertise .card .stats {
    border: 1px solid #fff;
    border-radius: .25rem;
    /* padding: 5px; */
}
#advertise .card .stats .number {
    font-size: 1.8em;
    font-weight: 600;
}
</style>

