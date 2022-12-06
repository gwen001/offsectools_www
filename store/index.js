const getDefaultState = () => {
  return {
    api_response: null,
    loading: false,
    // stats: [],
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
  // ---
  // getStats( state ) {
  //     return state.stats;
  // },
};

export const actions = {
  resetState() {
    this.commit("resetState");
  },
  // getStats( context ) {
  //     context.commit('startLoading');
  //     axios.get('/stats')
  //         .then(response => {
  //             context.commit('setApiResponse',response);
  //             context.commit('setStats',response.data);
  //             context.commit('stopLoading');
  //         })
  //         .catch(error => {
  //             if( error.response ) {
  //                 context.commit('setApiResponse',error.response);
  //             }
  //             context.commit('stopLoading');
  //         });
  // },
  // common
  resetState(this) {
    Object.assign(getDefaultState());
  },
  resetApiResponse() {
    return (this.api_response = null);
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
  // ---
  // setStats( state, data ) {
  //     return state.stats = data;
  // },
};
