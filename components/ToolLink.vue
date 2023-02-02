<template>
    <a :href="link" target="_blank" class="tool-link ms-4 me-4">
        <font-awesome-icon :icon="daicon" />
    </a>
</template>

<script>
export default {
    name: 'ToolLink',
    props: ['link'],
    computed: {
        daicon() {
            const lnk = this.link.toLowerCase();

            if( lnk.startsWith('https://github.com/') ) {
                return ['fa-brands', 'fa-github'];
            }
            if( lnk.startsWith('https://gitlab.com/') ) {
                return ['fa-brands', 'fa-gitlab'];
            }
            if( lnk.startsWith('https://twitter.com/') ) {
                return ['fa-brands', 'fa-twitter'];
            }
            if( lnk.startsWith('https://www.twitch.tv') ) {
                return ['fa-brands', 'fa-twitch'];
            }
            if( lnk.startsWith('https://www.youtube.com/') ) {
                return ['fa-brands', 'fa-youtube'];
            }
            if( lnk.startsWith('https://sourceforge.net/') ) {
                return ['fas', 'fa-floppy-disk'];
            }

            return ['fa-solid', 'fa-house'];
            return ['fa-solid', 'fa-globe'];
            return ['fa-solid', 'fa-up-right-from-square'];
        }
    }
}
</script>

<style scoped>
</style>

