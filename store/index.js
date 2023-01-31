const getDefaultState = () => {
    return {
        loading: false,
        data: [],
        search_term: '',
        search_results: [],
        sort_by: 'name', // 'name' or 'date' or 'ratings'
        tags_display: 'top', // 'all' or 'top' or 'categories'
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
    getSearchResults: (state) => {
        // console.log('getSearchResults');
        return state.search_results;
    },
    getSortBy( state ) {
        return state.sort_by;
    },
    getData( state ) {
        return state.data;
    },
    getCategories( state ) {
        return state.data.categories;
    },
    getContributors( state ) {
        return state.data.contributors;
    },
    getTagsDisplay( state ) {
        return state.tags_display;
    },
    getTags( state ) {
        var k = 0;
        var t_tags = [];

        for( var i=0 ; i<state.data.tags.length ; i++ ) {
            if( state.data.tags[i].tools_count == 0 ) {
                continue;
            }
            if( state.tags_display == 'all' || (state.tags_display == 'top' && state.data.tags[i].status == 1) ) {
                t_tags[k++] = state.data.tags[i];
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
        for( var i=0 ; i<state.data.tags.length ; i++ ) {
            if( state.data.tags[i].slug == slug ) {
                return state.data.tags[i];
            }
        }
        return null;
    },
    getTools( state ) {
        return state.data.tools;
    },
    getToolContextualisation: (state) => (n_context,tags,t_exclude) => {
        // console.log('contextualisation');

        var t_context = [];
        for( var i=0 ; i<state.data.tools.length ; i++ ) {
            for( var j=0 ; j<tags.length ; j++ ) {
                if( state.data.tools[i].tags.includes(tags[j]) ) {
                    if( !t_exclude.includes(state.data.tools[i].slug) ) {
                        t_context.push( state.data.tools[i] );
                        break;
                    }
                }
            }
        }
        // t_context.sort(() => Math.random() - 0.5)
        // console.log('t_context:'+t_context.length);

        let now = new Date();
        let onejan = new Date(now.getFullYear(), 0, 1);
        let week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
        // console.log('week:'+week);

        let max_week = Math.floor( t_context.length/n_context );
        // console.log('max_week:'+max_week);
        if( max_week == 0 ) {
            return t_context;
        }
        let final_week = week % max_week;
        // let start_index = (final_week-1) * n_context;
        let start_index = final_week * n_context;
        let end_index = start_index + n_context;
        // console.log('final_week:'+final_week);
        // console.log('start_index:'+start_index);
        // console.log('final_index:'+end_index);

        return t_context.slice(start_index,end_index);
    },
    getToolFromSlug: (state) => (slug) => {
        // console.log('getToolFromSlug');
        // console.log(state.tools.length);
        for( var i=0 ; i<state.data.tools.length ; i++ ) {
            if( state.data.tools[i].slug == slug ) {
                return state.data.tools[i];
            }
        }
        return null;
    },
    getToolsFromTag: (state) => (slug) => {
        var k = 0;
        var t_tools = [];
        for( var i=0 ; i<state.data.tools.length ; i++ ) {
            for( var j=0 ; j<state.data.tools[i].tags.length ; j++ ) {
                if( state.data.tools[i].tags[j] == slug ) {
                    t_tools[k++] = state.data.tools[i];
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
    setSearchResults( state, data ) {
        return state.search_results = data;
    },
    setSortBy( state, value ) {
        return state.sort_by = value;
    },
    setData( state, data ) {
        return state.data = data;
    },
    // setContributors( state, data ) {
    //     return state.contributors = data;
    // },
    // setCategories( state, data ) {
    //     return state.categories = data;
    // },
    // setTags( state, data ) {
    //     return state.tags = data;
    // },
    setTagsDisplay( state, data ) {
        return state.tags_display = data;
    },
    // setTools( state, data ) {
    //     return state.tools = data;
    // },
    addRating(state, data) {
        var tool_id = data[0];
        var rate_value = data[1];
        for( var i=0 ; i<state.data.tools.length ; i++ ) {
            if( state.data.tools[i].id == tool_id ) {
                if( state.data.tools[i].ratings_done === undefined ) {
                    state.data.tools[i].ratings_count++;
                    state.data.tools[i].ratings_total += rate_value;
                    state.data.tools[i].ratings_avg = (state.data.tools[i].ratings_total/state.data.tools[i].ratings_count).toFixed(1);
                    state.data.tools[i].ratings_done = 1;
                    // console.log( state.data.tools[i].ratings_count );
                    // console.log( state.data.tools[i].ratings_total );
                }
                break;
            }
        }
    },
};

export const actions = {
    async nuxtServerInit({ commit }, { req }) {
        // console.log('nuxtServerInit');
        await this.dispatch( 'getData' );
        // await this.dispatch( 'getTags' );
        // await this.dispatch( 'getTools' );
        // await this.dispatch( 'getContributors' );
        // await this.dispatch( 'getCategories' );
    },
    resetState( context ) {
        context.commit('resetState');
    },
    async getData( context ) {
        // console.log('getData');
        if( !this.state.data.length ) {
            await this.$axios.get('/export')
                .then(response => {
                    context.commit('setData',response.data);
                });
            }
    },
    // async getCategories( context ) {
    //     if( !this.state.categories.length ) {
    //         await this.$axios.get('/categories/export?from=store')
    //             .then(response => {
    //                 context.commit('setCategories',response.data);
    //             });
    //         }
    // },
    // async getContributors( context ) {
    //     if( !this.state.contributors.length ) {
    //         await this.$axios.get('/contributors/export?from=store')
    //             .then(response => {
    //                 context.commit('setContributors',response.data);
    //             });
    //         }
    // },
    // async getTags( context ) {
    //     if( !this.state.tags.length ) {
    //         await this.$axios.get('/tags/export?from=store')
    //             .then(response => {
    //                 context.commit('setTags',response.data);
    //             });
    //         }
    // },
    // async getTools( context ) {
    //     // console.log('getTools');
    //     if( !this.state.tools.length ) {
    //         // console.log('really getTools');
    //         await this.$axios.get('/tools/export?from=store')
    //             .then(response => {
    //                 context.commit('setTools',response.data);
    //             });
    //         }
    // },
    rate( context, data ) {
        var tool_id = data[0];
        var rate_value = data[1];
        this.$axios.post('/tools/'+tool_id+'/'+rate_value)
            .then(response => {
                context.commit('addRating',data);
            });
    },
    searchTools( context, period ) {
        // console.log('abcsearchTools');
        var t_tools = [];
        var t_tmp = [];

        if( period == 'last7days' ) {
            var k = 0;
            var d_current = new Date();
            var d7 = new Date( d_current.getFullYear(), d_current.getMonth(), d_current.getDate()-7);
            for( var i=0 ; i<this.state.data.tools.length ; i++ ) {
                var td = new Date(this.state.data.tools[i].created_at);
                if( td > d7 ) {
                    t_tmp[k++] = this.state.data.tools[i];
                }
            }
        }
        else
        {
            t_tmp = [...this.state.data.tools];
        }

        if( this.state.search_term.length == 0 )
        {
            t_tools = [...t_tmp];
        }
        else
        {
            var k = 0;
            if( this.state.search_term[0] == '#' ) {
                var st = this.state.search_term.replace('#','').toLowerCase();
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
                var r = new RegExp(this.state.search_term,'i');
                for( var i=0 ; i<t_tmp.length ; i++ ) {
                    if( t_tmp[i].slug.search(r) >= 0 || t_tmp[i].nicename.search(r) >= 0 || t_tmp[i].short_descr.search(r) >= 0 || (t_tmp[i].descr && t_tmp[i].descr.search(r) >= 0) ) {
                        t_tools[k++] = t_tmp[i];
                    }
                }
            }
        }

        if( this.state.sort_by == 'date' ) {
            t_tools = t_tools.sort(
                (a, b) => (a.created_at > b.created_at ? -1 : 1)
            );
        } else if( this.state.sort_by == 'ratings' ) {
            t_tools = t_tools.sort(
                (a, b) => (a.ratings_avg > b.ratings_avg ? -1 : 1)
            );
        }

        context.commit('setSearchResults',t_tools);
        // return t_tools;
    },
};
