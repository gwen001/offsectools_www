
const getDefaultState = () => {
    return {
        loading: false,
        search_term: '',
        sort_by: 'name', // 'name' or 'date'
        tags_display: 'categories', // 'all' or 'top' or 'categories'
        tags: [],
        tools: [],
        contributors: [],
        categories: []
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
    getCategories( state ) {
        return state.categories;
    },
    getContributors( state ) {
        return state.contributors;
    },
    getTagsDisplay( state ) {
        return state.tags_display;
    },
    getTags( state ) {
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
        for( var i=0 ; i<state.tags.length ; i++ ) {
            if( state.tags[i].slug == slug ) {
                return state.tags[i];
            }
        }
        return null;
    },
    getTools( state ) {
        return state.tools;
    },
    searchTools: (state) => (period='') => {
        var t_tools = [];
        var t_tmp = [];

        if( period == 'last7days' ) {
            var k = 0;
            var d_current = new Date();
            var d7 = new Date( d_current.getFullYear(), d_current.getMonth(), d_current.getDate()-7);
            for( var i=0 ; i<state.tools.length ; i++ ) {
                var td = new Date(state.tools[i].created_at);
                if( td > d7 ) {
                    t_tmp[k++] = state.tools[i];
                }
            }
        }
        else
        {
            t_tmp = [...state.tools];
        }

        if( state.search_term.length == 0 )
        {
            t_tools = [...t_tmp];
        }
        else
        {
            var k = 0;
            if( state.search_term[0] == '#' ) {
                var st = state.search_term.replace('#','');
                for( var i=0 ; i<t_tmp.length ; i++ ) {
                    for( var j=0 ; j<t_tmp[i].tags.length ; j++ ) {
                        if( t_tmp[i].tags[j].startsWith(st) ) {
                            t_tools[k++] = t_tmp[i];
                            break;
                        }
                    }
                }
            }
            else {
                var k = 0;
                var r = new RegExp(state.search_term,'i');
                for( var i=0 ; i<t_tmp.length ; i++ ) {
                    if( t_tmp[i].slug.search(r) >= 0 || t_tmp[i].nicename.search(r) >= 0 || t_tmp[i].short_descr.search(r) >= 0 || (t_tmp[i].descr && t_tmp[i].descr.search(r) >= 0) ) {
                        t_tools[k++] = t_tmp[i];
                    }
                }
            }
        }

        if( state.sort_by == 'date' ) {
            t_tools = t_tools.sort(
                (a, b) => (a.created_at > b.created_at ? -1 : 1)
            );
        }

        return t_tools;
    },
    getToolFromSlug: (state) => (slug) => {
        for( var i=0 ; i<state.tools.length ; i++ ) {
            if( state.tools[i].slug == slug ) {
                return state.tools[i];
            }
        }
        return null;
    },
    getToolsFromTag: (state) => (slug) => {
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
        return state.search_term = '';
    },
    setSearchTerm( state, value ) {
        return state.search_term = value.trim();
    },
    setSortBy( state, value ) {
        return state.sort_by = value;
    },
    setContributors( state, data ) {
        return state.contributors = data;
    },
    setCategories( state, data ) {
        return state.categories = data;
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
        this.dispatch( 'getCategories' );
    },
    resetState( context ) {
        context.commit('resetState');
    },
    getCategories( context ) {
        if( !this.state.categories.length ) {
            this.$axios.get('/categories/export?from=store')
                .then(response => {
                    context.commit('setCategories',response.data);
                });
            }
    },
    getContributors( context ) {
        if( !this.state.contributors.length ) {
            this.$axios.get('/contributors/export?from=store')
                .then(response => {
                    context.commit('setContributors',response.data);
                });
            }
    },
    getTags( context ) {
        if( !this.state.tags.length ) {
            this.$axios.get('/tags/export?from=store')
                .then(response => {
                    context.commit('setTags',response.data);
                })
                .catch(error => {
                });
            }
    },
    getTools( context ) {
        if( !this.state.tools.length ) {
            this.$axios.get('/tools/export?from=store')
                .then(response => {
                    context.commit('setTools',response.data);
                });
            }
    },
};
