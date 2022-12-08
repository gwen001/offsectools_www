<template>
  <div class="w-100 h-100">
    <template v-if="tag">
      <div class="row">
        <div class="col text-center">
          <h1><span class="hashtag">#</span>{{ tag.nicename }}</h1>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col text-center subtitle">
          {{ tools.length }} tool<span v-if="tools.length > 1">s</span> found
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <template v-for="(tool, index) in tools">
          <div class="col-4 mb-3">
            <ToolCard :tool="tool"></ToolCard>
          </div>
        </template>
        <template v-if="$config.APP_ENV == 'local'">
          <div class="col-4 mb-3">
            <FakeToolCard :tool="faketool"></FakeToolCard>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import ToolCard from "~/components/ToolCard.vue";
import FakeToolCard from "~/components/FakeToolCard.vue";
import NotFound from "~/components/NotFound.vue";
import { useTagStore } from '@/store/tags'
import { useToolStore } from '@/store/tools'
import { mapStores } from 'pinia'

export default {
  name: "TagPage",
  components: {
    ToolCard,
    FakeToolCard,
    NotFound,
  },
  data() {
    return {
      tag: null,
      tools: [],
      notfound: 0,
    };
  },
  computed: {
    faketool() {
      return {
        slug: "faketool",
        nicename: "faketool",
        link: "https://10degres.net",
        picture: "default.png",
        short_descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["recon", "subdomains"],
      };
    },
    ...mapStores(useTagStore, useToolStore),
  },
  async mounted() {
    var tag = this.tagStore.getTagFromSlug(this.$route.params.slug);

    if (tag) {
      this.tag = tag;
      this.tools = this.toolStore.getToolsFromTag(this.$route.params.slug);
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
input {
  color: #fff;
  background-color: #2f3a4c;
  border-color: #162033;
}
input:focus {
  outline: none;
  box-shadow: none;
  color: #fff;
  background-color: #2f3a4c;
  border-color: #162033;
}
.subtitle {
  color: #eee;
  font-size: 1.2em;
}
</style>
