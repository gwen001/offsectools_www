
const getDefaultState = () => {
    return {
        api_response: null,
        loading: false,
        tags: [],
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
        // alert(1);
        return state.tags;
    },
    getTagFromSlug: (state) => (slug) => {
        // return null;
        for( var i=0 ; i<state.tags.length ; i++ ) {
            if( state.tags[i].slug == slug ) {
                return state.tags[i];
            }
        }
        return null;
    },
};

export const mutations = {
    // common
    resetState( state ) {
        // Object.assign( state, getDefaultState() );
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
};

export const actions = {
    resetState( context ) {
        context.commit('resetState');
    },
    getTags( context ) {
        // context.commit('resetState');
        console.log('reload tags');
        if( !this.state.tags.length ) {
            console.log('really reload tags');
            // if( localStorage.tags && localStorage.tags.length ) {
            //     console.log('tags from localstorage');
            //     context.commit('setTags',JSON.parse(localStorage.tags));
            // } else {
                // useFetch("/tags/export?from=store")
                this.$axios.get('/tags/export?from=store')
                    .then(response => {
                        context.commit('setApiResponse',response);
                        context.commit('setTags',response.data);
                        localStorage.tags = JSON.stringify(response.data);
                    })
                    .catch(error => {
                    });
                }
            // }
    },
};
