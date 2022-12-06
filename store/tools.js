const getDefaultState = () => {
  return {
    api_response: null,
    loading: false,
    tools: [],
  };
};

export const state = () => getDefaultState();

export const getters = {
  // common
  getApiResponse(state) {
    return state.api_response;
  },
  isLoading(state) {
    return state.loading;
  },
  getTools(state) {
    // alert(1);
    return state.tools;
  },
  getToolFromSlug: (state) => (slug) => {
    // return null;
    for (var i = 0; i < state.tools.length; i++) {
      if (state.tools[i].slug == slug) {
        return state.tools[i];
      }
    }
    return null;
  },
  getToolsFromTag: (state) => (slug) => {
    var t_tools = [];
    var k = 0;
    for (var i = 0; i < state.tools.length; i++) {
      for (var j = 0; j < state.tools[i].tags.length; j++) {
        if (state.tools[i].tags[j] == slug) {
          t_tools[k++] = state.tools[i];
        }
      }
    }
    return t_tools;
  },
};

export const actions = {
  resetState() {
    this.commit("resetState");
  },
  getTools() {
    // context.commit('resetState');
    console.log("reload tools");
    if (!this.state.tools.length) {
      console.log("really reload tools");
      // if( localStorage.tools && localStorage.tools.length ) {
      //     console.log('tools from localstorage');
      //     context.commit('setTools',JSON.parse(localStorage.tools));
      // } else {
      // console.log('tools from api');
      this.$axios
        .get("/tools/export?from=store")
        .then((response) => {
          this.commit("setApiResponse", response);
          this.commit("setTools", response.data);
          localStorage.tools = JSON.stringify(response.data);
        })
        .catch((error) => {});
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
  setTools(data) {
    return (this.tools = data);
  },
};
