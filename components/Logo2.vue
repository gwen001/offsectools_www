<template>
    <div id="logo" class="">
        <nuxt-link to="/" class="topbar-homeeee">
        <div class="d-none d-sm-block">
            <span>OFFSEC</span>
            <img src="/img/logo.png" width="35" />
            <span>TOOLS</span>
        </div>
        <div class="d-block d-sm-none">
            <span>OFFSEC</span>
            <br>
            <img src="/img/logo.png" width="35" />
            <br>
            <span>TOOLS</span>
        </div>
        </nuxt-link>
    </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
    name: 'Logo',
}
</script>

<style scoped>
#logo {
    font-weight: bold;
}
#logo img {
    vertical-align: bottom;
}
#logo a:hover {
    color: #fff !important;
}
</style>
