
const getDefaultState = () => {
    return {
        api_response: null,
        loading: false,
        // stats: [],
    }
}
export const state = () => getDefaultState();

export const getters = {
    // common
    getApiResponse( state ) {
        return state.api_response;
    },
    isLoading( state ) {
        return state.loading;
    },
    // ---
    // getStats( state ) {
    //     return state.stats;
    // },
};

export const mutations = {
    // common
    resetState( state ) {
        Object.assign( state, getDefaultState() );
    },
    resetApiResponse( state ) {
        return state.api_response = null;
    },
    setApiResponse( state, data ) {
        return state.api_response = data;
    },
    startLoading( state ) {
        return state.loading = true;
    },
    stopLoading( state ) {
        return state.loading = false;
    },
    // ---
    // setStats( state, data ) {
    //     return state.stats = data;
    // },
};

export const actions = {
    resetState( context ) {
        context.commit('resetState');
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
};
