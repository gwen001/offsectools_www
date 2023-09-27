<template>
    <div class="newsletter newsletter-card tool-card h-100" :class="[(from=='tagpage'||from=='index') ? 'ms-2 me-2' : '']">
        <div class="card h-100">
            <div class="card-body text-center d-grid align-content-center">
                <form id="newsletter-formmm" class="newsletter-form ml-block-form" data-code="" method="post" v-on:submit.stop.prevent="subscribe($event)">
                    <input type="hidden" name="ml-submit" value="1">
                    <input type="hidden" name="anticsrf" value="true">
                    <div class="catcher1 text-custom1">
                        Want to keep up with the latest tools?
                    </div>
                    <div class="catcher2 mt-4">
                        Get a weekly summary of new tools added to {{ $config.APP_NAME }} 🤩
                    </div>
                    <div class="mt-4">
                        <input aria-label="email" aria-required="true" type="email" class="form-control" data-inputmask="" name="fields[email]" v-model="email" placeholder="Enter your email" autocomplete="email" required>
                    </div>
                    <div class="mt-4">
                        <button type="submit" class="newsletter-btn btn w-100 p-0 border-0" v-if="newsletterStatus < 0"><div class="box-border-gradient" v-if="newsletterStatus < 0"><div class="box-border-gradient-bg2">Subscribe</div></div></button>
                        <font-awesome-icon icon="fa-solid fa-spinner" class="align-middle" v-if="newsletterStatus > 1000" />
                        <span class="newsletter-error text-custom1 align-middle" v-if="newsletterStatus == 0">Something gone wrong!</span>
                        <span class="newsletter-confirm text-custom1 align-middle" v-if="newsletterStatus == 1">You're confirmed, thanks buddy!</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsletterCard',
    props: ['from'],
    data: function () {
        return {
            email: ''
        }
    },
    computed: {
        newsletterStatus() {
            // console.log('newsletterStatus '+this.$store.getters['getNewsletterStatus']);
            return this.$store.getters['getNewsletterStatus'];
        }
    },
    methods: {
        async subscribe() {
            let that = this;
            this.$store.commit('setNewsletterLoader');
            var data = new FormData( event.target );
            // console.log(data);
            await this.$store.dispatch( 'newsletter', data );
            setTimeout(function () { that.$store.commit('resetNewsletterStatus'); that.email=''; }, 2500);
        },
    },
    mounted() {
        this.$store.commit('resetNewsletterStatus');
    },
}
</script>

<style scoped>
.newsletter .catcher1 {
    font-size: 2em;
    font-weight: bold;
    line-height: 1.1em;
}
.newsletter .catcher2 {
    font-size: 1.2em;
}
</style>
