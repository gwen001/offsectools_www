<template>
    <div :class="'ribbon ribbon-'+this.rstyle">{{ rtext }}</div>
</template>

<script>
export default {
    name: 'Ribbon',
    props: ['rstyle','rtext'],
}
</script>

<style scoped>
.ribbon {
    /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
    font-size: 0.9em;
    font-weight: bold;
    height: 2em;
    padding-bottom: 1.9em;
    padding-left: 2.5em;
    /* padding-left: 8.5em; */
    padding-top: 0.3em;
    position: absolute;
    right: -2em;
    /* right: -5em; */
    top: 1em;
    /* top: -1em; */
    text-align: center;
    transform: rotate(30deg);
    /* width: 25em; */
    width: 15em;
}

.ribbon-danger { color:#fff; background-color: #dc3545; }
.ribbon-warning { color: #212529; background-color: #ffc107; }
</style>