<template>
    <a :href="link" target="_blank" class="tool-link ms-4 me-4">
        <font-awesome-icon :icon="daicon" />
    </a>
</template>

<script>
export default {
    name: 'ToolLink',
    props: ['link','index'],
    computed: {
        daicon() {
            const lnk = this.link.toLowerCase();

            if( lnk.startsWith('https://github.com/') ) {
                return ['fa-brands', 'fa-github'];
            }
            else if( lnk.startsWith('https://gitlab.com/') ) {
                return ['fa-brands', 'fa-gitlab'];
            }
            else if( lnk.startsWith('https://twitter.com/') ) {
                return ['fa-brands', 'fa-twitter'];
            }
            else if( lnk.startsWith('https://www.twitch.tv') ) {
                return ['fa-brands', 'fa-twitch'];
            }
            else if( lnk.startsWith('https://www.youtube.com/') ) {
                return ['fa-brands', 'fa-youtube'];
            }
            else if( lnk.startsWith('https://hub.docker.com/') ) {
                return ['fa-brands', 'fa-docker'];
            }
            else if( lnk.startsWith('https://sourceforge.net/') ) {
                return ['fas', 'fa-floppy-disk'];
            }
            else if( lnk.startsWith('https://code.google.com/') ) {
                return ['fa-brands', 'fa-google'];
            }

            if( this.index == 0 ) {
                return ['fa-solid', 'fa-house'];
            } else {
                // return ['fa-solid', 'fa-link'];
                return ['fa-solid', 'fa-globe'];
                return ['fa-solid', 'fa-up-right-from-square'];
            }
        }
    }
}
</script>

<style scoped>
</style>

