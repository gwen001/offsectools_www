import { defineStore } from "pinia";

export const useTagStore = defineStore("tag", {
  state: () => ({
    api_response: null,
    loading: false,
    tags: [],
  }),
  getters: {
    getTagFromSlug: (state) => (slug) => {
      // return null;
      for (var i = 0; i < state.tags.length; i++) {
        if (state.tags[i].slug == slug) {
          return state.tags[i];
        }
      }
      return null;
    },
  },
  actions: {
    resetState() {
      this.commit("resetState");
    },
    getTags() {
      // context.commit('resetState');
      console.log("reload tags");
      if (!this.tags.length) {
        console.log("really reload tags");
        // if( localStorage.tags && localStorage.tags.length ) {
        //     console.log('tags from localstorage');
        //     context.commit('setTags',JSON.parse(localStorage.tags));
        // } else {
        useFetch("/tags/export?from=store")
          .then((response) => {
            this.commit("setApiResponse", response);
            this.commit("setTags", response.data);
            localStorage.tags = JSON.stringify(response.data);
          })
          .catch((error) => {
            console.log("there is an issue");
          });
        // }
      }
    },
    // common
    resetState() {
      // Object.assign( state, getDefaultState() );
    },
    setApiResponse(data) {
      return (this.api_response = data);
    },
    startLoading() {
      return (this.loading = true);
    },
    stopLoading() {
      return (this.loading = false);
    },
    setTags(data) {
      return (this.tags = data);
    },
  },
});
