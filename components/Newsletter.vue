<template>
    <div class="newsletter">
        <form class="newsletter-form ml-block-form" data-code="" method="post" target="_blank" v-on:submit.stop.prevent="subscribe($event)">
            <input type="hidden" name="ml-submit" value="1">
            <input type="hidden" name="anticsrf" value="true">
            <div class="row catcher1">
                <div class="col">
                    Want to keep up with the latest tools?
                    <span class="text-custom2">Sign up for the newsletter.</span>
                </div>
            </div>
            <!-- <div class="row catcher2 text-custom2">
                <div class="col">
                    Sign up for the newsletter.
                </div>
            </div> -->
            <div class="row">
                <div class="col-8 mt-4">
                    <input aria-label="email" aria-required="true" type="email" class="form-control" data-inputmask="" name="fields[email]" v-model="email" placeholder="Enter your email" autocomplete="email" required>
                </div>
                <div class="col-2 mt-4">
                    <button type="submit" class="newsletter-btn btn p-0 border-0" v-if="newsletterStatus < 0"><div class="box-border-gradient" v-if="newsletterStatus < 0"><div class="box-border-gradient-bg1">Subscribe</div></div></button>
                    <font-awesome-icon icon="fa-solid fa-spinner" class="align-middle" v-if="newsletterStatus > 1000" />
                    <span class="newsletter-error text-custom1 align-middle" v-if="newsletterStatus == 0">Something gone wrong!</span>
                    <span class="newsletter-confirm text-custom1 align-middle" v-if="newsletterStatus == 1">You're confirmed, thanks buddy!</span>
                </div>
            </div>
        </form>
    </div>
</template>


<script>
export default {
    name: 'Newsletter',
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
}
.newsletter .catcher2 {
    font-size: 2em;
    font-weight: bold;
}
</style>
