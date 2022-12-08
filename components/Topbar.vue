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
import { useTagStore } from '@/store/tags'
import { useToolStore } from '@/store/tools'
import { mapStores } from 'pinia'

export default {
  name: "Topbar",
 mounted() {
    this.tagStore.getTags();
    this.toolStore.getTools();
    // store.dispatch("tools/getTools");
  },
  computed: {
    ...mapStores(useTagStore, useToolStore)
  }
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
