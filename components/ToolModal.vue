<template>
    <div id="tool-modal">
        <div id="modal-backdrop" class="d-none"></div>
        <div id="myModal" class="modal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="false">
            <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                        <a  href="javascript:;" v-on:click="closeModal()" id="modal-close">
                            <svg id="modal-close-icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-circle-xmark" data-v-0369c68e="">
                            <path id="modal-close-icon-path" stroke="pink" fill="currentColor" d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" data-v-0369c68e="" class=""></path>
                            </svg>
                        </a>
                        <template v-if="currentTool && tool">
                            <ToolDetails2 from="modal" :tool="tool"></ToolDetails2>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ToolDetails2 from '~/components/ToolDetails2.vue';
import ToolContextualisation from '~/components/ToolContextualisation.vue';

export default {
    name: 'ToolModal',
    components: {
        ToolDetails2, ToolContextualisation
    },
    data() {
        return {
            myModalEl: null,
            myModal: null,
        }
    },
    methods: {
        resetSearch: function () {
            this.$store.commit( 'resetSearch' );
            // this.$router.push( '/' );
        },
        closeModal: function () {
            console.log('close');
            if( this.myModal ) {
                this.myModal.hide();
            }
        },
    },
    computed: {
        // return this.$config.APP_NAME;
        currentTool() {
            // return this.$store.getters['getToolFromSlug']( '0d1n' );
            return this.$store.getters['getCurrentTool'];
        },
        tool() {
            // return this.$store.getters['getToolFromSlug']( '0d1n' );
            return this.$store.getters['getToolFromSlug']( this.$store.getters['getCurrentTool'] );
        }
    },
    watch: {
        tool(newv,oldv) {
            console.log('oldv='+oldv);
            console.log('newv='+newv);
            // if( newv == '' || newv == null ) {
            //     return;
            // }

            // var that = this;

            // this.myModalEl = document.getElementById('myModal');
            // this.myModalEl.classList.add('show');
            // this.myModalEl.classList.add('d-block');

            // var bodyElt = document.getElementsByTagName('body');
            // // bodyElt.classList.add('modal-open');
            // // bodyElt.classList.add('modal-open-body');

            // var backdropElt = document.getElementById('modal-backdrop');
            // backdropElt.classList.remove('d-none');



            // setTimeout(() => document.addEventListener('click',this.hideModal), 0);
            // // document.removeEventListener('click',this.hideMobilebar);



            // this.myModalEl = document.getElementById('myModal');
            // this.myModal = new bootstrap.Modal(this.myModalEl);
            // this.myModal.show();
            // this.myModalEl.addEventListener('hide.bs.modal', function (event) {
            //     that.$parent.eventHideToolModal();
            // });
        }
    },
}
</script>

<style scoped>
#tool-modal #modal-close {
    font-size: 1.5em;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 2;
}
#tool-modal #modal-close:hover {
    color: #fff;
}
#tool-modal svg {
    background-color: #141729;
    border: 0px solid #fff;
    border-radius: 50px;
}
#tool-details {
    padding-top: 0px;
}
#tool-background {
}
#tool-background-image {
    /* background-image: url('/img/bg-default2.jpg'); */
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    /* border: 1px solid #f00; */
    height: 100%;
    left: 0px;
    opacity: 0.8;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 0;
}
#tool-background-gradient {
    background: linear-gradient(180deg, rgba(10,12,31,0) 0%, rgba(10,12,31,0) 80%, rgba(10,12,31,1) 100%);

    /* border: 1px solid #00f; */
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 1;
}
#tool-background-gradient2 {
    background: linear-gradient(180deg, rgba(10,12,31,0) 0%, rgba(10,12,31,0) 80%, rgba(10,12,31,1) 100%);

    border: 3px solid #f00;
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 1;
}
</style>
