
const getDefaultState = () => {
    return {
        api_response: null,
        loading: false,
        tags: [],
        tools: [],
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
    getTags( state ) {
        // console.log('getTags');
        // console.log(state.tags.length);
        return state.tags;
    },
    getTagFromSlug: (state) => (slug) => {
        // console.log('getTagFromSlug');
        for( var i=0 ; i<state.tags.length ; i++ ) {
            if( state.tags[i].slug == slug ) {
                console.log(state.tags[i]);
                return state.tags[i];
            }
        }
        return null;
    },
    getTools( state ) {
        // console.log('getTools');
        // console.log(state.tools.length);
        return state.tools;
    },
    getToolFromSlug: (state) => (slug) => {
        // console.log('getToolsFromSlug');
        for( var i=0 ; i<state.tools.length ; i++ ) {
            if( state.tools[i].slug == slug ) {
                return state.tools[i];
            }
        }
        return null;
    },
    getToolsFromTag: (state) => (slug) => {
        // console.log('getToolsFromTag');
        var t_tools = [];
        var k = 0;
        for( var i=0 ; i<state.tools.length ; i++ ) {
            for( var j=0 ; j<state.tools[i].tags.length ; j++ ) {
                if( state.tools[i].tags[j] == slug ) {
                    t_tools[k++] = state.tools[i];
                }
            }
        }
        return t_tools;
    },
};

export const mutations = {
    resetState( state ) {
        Object.assign( state, getDefaultState() );
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
    setTags( state, data ) {
        return state.tags = data;
    },
    setTools( state, data ) {
        return state.tools = data;
    },
};

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        // console.log('nuxtServerInit');
        this.dispatch( 'getTags' );
        this.dispatch( 'getTools' );
    },
    resetState( context ) {
        context.commit('resetState');
    },
    getTags( context ) {
        // context.commit('resetState');
        // console.log('reload tags');
        if( !this.state.tags.length ) {
            // console.log('tags from api');
            this.$axios.get('/tags/export?from=store')
                .then(response => {
                    context.commit('setApiResponse',response);
                    context.commit('setTags',response.data);
                    localStorage.tags = JSON.stringify(response.data);
                })
                .catch(error => {
                });
            }
    },
    getTools( context ) {
        // context.commit('resetState');
        // console.log('reload tools');
        if( !this.state.tools.length ) {
            // console.log('tools from api');
            this.$axios.get('/tools/export?from=store')
                .then(response => {
                    context.commit('setApiResponse',response);
                    context.commit('setTools',response.data);
                    localStorage.tools = JSON.stringify(response.data);
                })
                .catch(error => {
                });
            }
    },
};
