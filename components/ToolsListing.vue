<template>
    <div id="tools-listing">
        <ToolModal ref="toolmodal"></ToolModal>
        <!-- <div class="row">
            <div class="col text-center">
                {{ tools.length }} tool<span v-if="tools.length > 1">s</span> found
            </div>
        </div> -->
            <!--  <div class="d-flex justify-content-left" v-if="tools.length > 1">
                <ToolsSorter :tools="tools.length"></ToolsSorter>
            </div> -->
        <div class="d-flex flex-row flex-wrap justify-content-center mt-1">
            <template v-for="tool,index in tools">
                <div class="toolcard-loop p-3 align-self-stretch" v-if="index == 6 && from!='home'">
                    <NewsletterCard from="tagpage"></NewsletterCard>
                </div>
                <div class="toolcard-loop p-3 align-self-stretch">
                    <ToolCard :tool="tool" from="index"></ToolCard>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import ToolCard from '~/components/ToolCard.vue'
import ToolModal from '~/components/ToolModal.vue';
import ToolsSorter from '~/components/ToolsSorter.vue'
import NewsletterCard from '~/components/NewsletterCard.vue';

export default {
    name: 'ToolsListing',
    components: {
        ToolModal, ToolCard, ToolsSorter, NewsletterCard
    },
    props: ['tools','from'],
    data: function () {
        return {
            route_from: null,
            route_to: null,
            route_next: null,
            modal_enabled: false,
        }
    },
    methods: {
        beforeRouteLeave(to, from, next) {
            // bug: when user click on the same tag in /tag/xxxxxx
            // bug: when user use history back, modal doesn't close
            // bug: when user click on tag, using back history doesn't redirect to tool page but listing page
            // console.log(to);
            // console.log(from);
            // console.log(next);
            this.route_from = from;
            this.route_to = to;
            this.route_next = next;
            if( to.name === 'tool-slug' ) {
                this.showToolModal();
            } else {
                // this.hideToolModal( '', next );
                console.log('next!!!');
                next();
            }
        },
        showToolModal() {
            console.log('modal!!!');

            this.modal_enabled = true;
            setTimeout(() => document.addEventListener('keydown',this.hideToolModal), 0);

            this.$store.commit( 'setCurrentTool', this.route_to.params.slug );
            window.history.pushState({}, null, this.route_to.path);

            var myModalElt = document.getElementById('myModal');
            myModalElt.classList.add('show');
            myModalElt.classList.add('d-block');
            setTimeout(() => myModalElt.addEventListener('click',this.hideToolModal), 0);

            var bodyElt = document.getElementsByTagName('body');
            // bodyElt.classList.add('modal-open');
            // bodyElt.classList.add('modal-open-body');

            var backdropElt = document.getElementById('modal-backdrop');
            backdropElt.classList.remove('d-none');

            var closeBtn = document.getElementById('modal-close');
            setTimeout(() => closeBtn.addEventListener('click',this.hideToolModal), 0);
        },
        hideToolModal( e ) {
            console.log('close!!!');
            console.log(e);
            console.log(typeof e);
            // console.log(e.target);
            // console.log(e.target.id);
            // console.log(e.key);

            // console.log(this.$route.path);
            // console.log(e.target.getAttribute('href'));

            if( typeof e == 'function' ) {
                console.log('function!!!');
            } else {
                console.log('obj!!!');
            }

            if( (e.target.href && e.target.getAttribute('href')==this.$route.path) || (e.key && e.key=='Escape') || (e.target.id && (e.target.id=='myModal' || e.target.id=='modal-close' || e.target.id=='modal-close-icon' || e.target.id=='modal-close-icon-path')) )
            {
                this.modal_enabled = false;

                console.log('do close!!!');
                document.removeEventListener('keydown',this.hideToolModal);

                var myModalElt = document.getElementById('myModal');
                myModalElt.classList.remove('show');
                myModalElt.classList.remove('d-block');
                myModalElt.removeEventListener('click',this.hideToolModal);

                var bodyElt = document.getElementsByTagName('body');
                // bodyElt.classList.remove('modal-open');
                // bodyElt.classList.remove('modal-open-body');

                var backdropElt = document.getElementById('modal-backdrop');
                backdropElt.classList.add('d-none');

                var closeBtn = document.getElementById('modal-close');
                closeBtn.removeEventListener('click',this.hideToolModal);

                this.$store.commit( 'resetCurrentTool' );
                window.history.pushState({}, null, this.route_from.path);
                this.$router.push( this.route_from );
                // window.history.back();
                // this.$router.go(-1);
                // history.go(-1);
                // window.history.forward();
            }

            // if( next ) {
            //     next();
            // }

        },
        // hideToolModalNext( next ) {
        //     console.log('close and next!!!');
        //     // this.$store.commit( 'resetCurrentTool' );
        //     this.$refs.toolmodal.closeModal();
        //     next();
        // },
        // eventHideToolModal() {
        //     console.log('close event!!!');
        //     this.$store.commit( 'resetCurrentTool' );
        //     window.history.pushState({}, null, this.route_from.path)
        // },
    },
}
</script>

<style scoped>
</style>
