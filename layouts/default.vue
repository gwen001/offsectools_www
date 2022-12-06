<template>
  <div class="container-fluid vh-100 p-0 m-0">
    <div class="row vh-100 p-0 m-0">
      <!-- <Toolbar></Toolbar> -->
      <Tagbar></Tagbar>
      <div id="main" class="col p-0 m-0">
        <Topbar></Topbar>
        <div class="row p-0 m-0">
          <div class="col p-0 m-0">
            <!-- <MainContent></MainContent> -->
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from "~/components/Toolbar.vue";
import Tagbar from "~/components/Tagbar.vue";
import Topbar from "~/components/Topbar.vue";
import MainContent from "~/components/MainContent.vue";

export default {
  name: "default_layout",
  components: {
    Toolbar,
    Tagbar,
    Topbar,
    MainContent,
  },
  computed: {
    cssVars() {
      return {
        "--bg-color": this.$config.CSS1,
      };
    },
  },
};
</script>
