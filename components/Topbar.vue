<template>
  <div id="topbar" class="">
    <nav class="navbar">
      <div class="container-fluid p-0">
        <h1>
          <nuxt-link to="/">{{ $config.APP_NAME }}</nuxt-link>
        </h1>
        <div class="d-flex">
          <nuxt-link to="/addtool" class="btn btn-outline-success ml-2"
            >Add tool</nuxt-link
          >
          <nuxt-link to="/about" class="btn btn-success ml-2">?</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { tagStore } from '@/store/tags'

export default {
  name: "Topbar",
  async mounted() {
    const tag_store = tagStore()
    tag_store.getTags();
    // store.dispatch("tools/getTools");
  },
};
</script>

<style scoped>
#topbar {
  border-bottom: 2px solid #162033;
}
h1 a {
  color: #fff;
  text-decoration: none;
}
h1 a:hover {
  text-decoration: none;
}
</style>
