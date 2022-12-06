<template>
  <div class="container h-100 p-3">
    <template v-if="tool">
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col">
              <nuxt-img
                :src="'/assets/img/tools/' + tool.picture"
                class="rounded tool-picture"
                sizes="sm:100vw md:50vw lg:500px"
              />
            </div>
          </div>
          <div class="row">
            <div class="tool-name col mt-3">
              <h1>
                <span class="nicename">{{ tool.nicename }}</span>
              </h1>
            </div>
          </div>
          <div class="row">
            <div class="tool-short-descr col">
              {{ tool.short_descr }}
            </div>
          </div>
          <div class="row">
            <div class="tool-descr col mt-5">
              {{ tool.descr }}
            </div>
          </div>
          <div class="row">
            <div class="tool-tags col mt-5">
              <template v-for="(tag, index) in tool.tags">
                <nuxt-link :to="'/tag/' + tag">#{{ tag }}</nuxt-link
                >&nbsp;
              </template>
            </div>
          </div>
          <div class="row">
            <div class="tool-link col mt-5">
              <a
                :href="tool.link"
                class="btn btn-outline-success"
                target="_blank"
                >Try it</a
              >
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <NotFound from="tools"></NotFound>
    </template>
  </div>
</template>

<script>
import NotFound from "~/components/NotFound.vue";

export default {
  name: "ToolPage",
  components: {
    NotFound,
  },
  data() {
    return {
      tool: null,
      notfound: 0,
    };
  },
  async mounted() {
    var tool = this.$store.getters["tools/getToolFromSlug"](
      this.$route.params.slug
    );
    if (tool) {
      this.tool = tool;
    } else {
      this.notfound = 1;
    }
  },
};
</script>

<style scoped>
h1 {
  font-size: 3em;
}
.tool-picture {
  border: 2px solid #162033;
  max-height: 400px !important;
}
.tool-short-descr {
  /* font-size: 1.2em; */
}
.tool-descr {
  /* font-size: 1em; */
  /* text-justify: left; */
}
</style>
