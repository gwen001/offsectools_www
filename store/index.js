
const getDefaultState = () => {
    return {
        loading: false,
        search_term: '',
        sort_by: 'name', // 'name' or 'date'
        tags_display: 'all', // 'all' or 'top'
        tags: [],
        tools: [],
        contributors: []
    }
}

export const state = () => getDefaultState();

export const getters = {
    isLoading( state ) {
        return state.loading;
    },
    getSearchTerm( state ) {
        return state.search_term;
    },
    getSortBy( state ) {
        return state.sort_by;
    },
    getContributors( state ) {
        return state.contributors;
    },
    getTagsDisplay( state ) {
        return state.tags_display;
    },
    getTags( state ) {
        // console.log('getTags');
        var k = 0;
        var t_tags = [];

        for( var i=0 ; i<state.tags.length ; i++ ) {
            if( state.tags[i].tools_count == 0 ) {
                continue;
            }
            if( state.tags_display == 'all' || (state.tags_display == 'top' && state.tags[i].status == 1) ) {
                t_tags[k++] = state.tags[i];
            }
        }

        if( state.tags_display == 'top' ) {
            t_tags = t_tags.sort(
                (a, b) => (a.tools_count > b.tools_count ? -1 : 1)
            );
        }
        return t_tags;
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
        return state.tools;
    },
    searchTools( state ) {
        // console.log('searchTools');
        // console.log(state.search_term);
        var t_tools = [];

        if( state.search_term.length == 0 )
        {
            t_tools = [...state.tools];
        }
        else
        {
            var k = 0;

            if( state.search_term[0] == '#' ) {
                var st = state.search_term.replace('#','');
                for( var i=0 ; i<state.tools.length ; i++ ) {
                    for( var j=0 ; j<state.tools[i].tags.length ; j++ ) {
                        if( state.tools[i].tags[j].startsWith(st) ) {
                            t_tools[k++] = state.tools[i];
                            break;
                        }
                    }
                }
            }
            else {
                var r = new RegExp(state.search_term,'i');
                for( var i=0 ; i<state.tools.length ; i++ ) {
                    // console.log(state.tools[i].slug.search(state.search_term));
                    if( state.tools[i].slug.search(r) >= 0 || state.tools[i].nicename.search(r) >= 0 || state.tools[i].short_descr.search(r) >= 0 || (state.tools[i].descr && state.tools[i].descr.search(r) >= 0) ) {
                        t_tools[k++] = state.tools[i];
                    }
                }
            }
        }

        // t_tools = t_tools.sort();
        // for( var i=0 ; i<t_tools.length ; i++ ) {
        //     console.log(t_tools[i].slug+" "+t_tools[i].created_at);
        // }

        if( state.sort_by == 'date' ) {
            t_tools = t_tools.sort(
                (a, b) => (a.created_at > b.created_at ? -1 : 1)
            );
        }
        // for( var i=0 ; i<t_tools.length ; i++ ) {
        //     console.log(t_tools[i].slug+" "+t_tools[i].created_at);
        // }

        return t_tools;
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
        var k = 0;
        var t_tools = [];
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
    startLoading( state ) {
        return state.loading = true;
    },
    stopLoading( state ) {
        return state.loading = false;
    },
    resetSearchTerm( state ) {
        // console.log('resetSearchTerm');
        return state.search_term = '';
    },
    setSearchTerm( state, value ) {
        // console.log('setSearchTerm');
        return state.search_term = value.trim();
    },
    setSortBy( state, value ) {
        // console.log('setSearchTerm');
        return state.sort_by = value;
    },
    setContributors( state, data ) {
        return state.contributors = data;
    },
    setTags( state, data ) {
        return state.tags = data;
    },
    setTagsDisplay( state, data ) {
        return state.tags_display = data;
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
        this.dispatch( 'getContributors' );
    },
    resetState( context ) {
        context.commit('resetState');
    },
    getContributors( context ) {
        // context.commit('resetState');
        // console.log('reload contributors');
        if( !this.state.contributors.length ) {
            // console.log('contributors from api');
            this.$axios.get('/contributors/export?from=store')
                .then(response => {
                    context.commit('setContributors',response.data);
                })
                .catch(error => {
                });
            }
    },
    getTags( context ) {
        // context.commit('resetState');
        // console.log('reload tags');
        if( !this.state.tags.length ) {
            // console.log('tags from api');
            this.$axios.get('/tags/export?from=store')
                .then(response => {
                    // console.log(response.data);
                    context.commit('setTags',response.data);
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
                    // console.log(response.data);
                    context.commit('setTools',response.data);
                })
                .catch(error => {
                });
            }
    },
};
