const getDefaultState = () => {
    return {
        loading: false,
        db: [],
        search_term: '',
        search_results: [],
        sort_by: 'name', // 'name' or 'date' or 'ratings'
        tags_display: 'top', // 'all' or 'top' or 'categories'
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
        return state.search_results;
    },
    getSortBy( state ) {
        return state.sort_by;
    },
    getCategories( state ) {
        return state.db.categories;
    },
    getContributors( state ) {
        return state.db.contributors;
    },
    getTagsDisplay( state ) {
        return state.tags_display;
    },
    getTags( state ) {
        var k = 0;
        var t_tags = [];

        for( var i=0 ; i<state.db.tags.length ; i++ ) {
            if( state.db.tags[i].tools_count == 0 ) {
                continue;
            }
            if( state.tags_display == 'all' || (state.tags_display == 'top' && state.db.tags[i].status == 1) ) {
                t_tags[k++] = state.db.tags[i];
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
        for( var i=0 ; i<state.db.tags.length ; i++ ) {
            if( state.db.tags[i].slug == slug ) {
                return state.db.tags[i];
            }
        }
        return null;
    },
    getTools( state ) {
        return state.db.tools;
    },
    getToolContextualisation: (state) => (n_context,tags,t_exclude) => {
        // console.log('contextualisation');

        var t_context = [];
        for( var i=0 ; i<state.db.tools.length ; i++ ) {
            for( var j=0 ; j<tags.length ; j++ ) {
                if( state.db.tools[i].tags.includes(tags[j]) ) {
                    if( !t_exclude.includes(state.db.tools[i].slug) ) {
                        t_context.push( state.db.tools[i] );
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
        // console.log(state.db.tools.length);
        for( var i=0 ; i<state.db.tools.length ; i++ ) {
            if( state.db.tools[i].slug == slug ) {
                return state.db.tools[i];
            }
        }
        return null;
    },
    sortTools: (state) => (t_tools) => {
        // console.log('sortTools');
        if( state.sort_by == 'date' ) {
            t_tools = t_tools.sort(
                (a, b) => (a.created_at > b.created_at ? -1 : 1)
            );
        } else if( state.sort_by == 'ratings' ) {
            t_tools = t_tools.sort(
                (a, b) => (a.ratings_avg > b.ratings_avg ? -1 : 1)
            );
        }
        return t_tools;
    },
    sortFeatured: (state) => (t_tools) => {
        // console.log('sortTools');
        t_tools = t_tools.sort(
            (a, b) => (a.featured > b.featured ? -1 : 1)
        );
        return t_tools;
    },
    getToolsFeatured: (state,getters) => {
        var t_tools = [];
        var t_tmp = [];

        for( var i=0 ; i<state.db.tools.length ; i++ ) {
            if( state.db.tools[i].featured == 1 ) {
                t_tmp.push(state.db.tools[i]);
            }
        }

        t_tools = t_tmp;
        t_tools = getters.sortTools(t_tools);

        return t_tools;
    },
    getToolsFromTag: (state,getters) => (slug) => {
        // console.log('getToolsFromTag');
        var t_tools = [];
        var t_tmp = [];
        slug = slug.toLowerCase();

        switch(slug)
        {
            case '':
            case 'all':
                t_tmp = [...state.db.tools];
                break;
            case 'last7days':
                var d_current = new Date();
                var d7 = new Date( d_current.getFullYear(), d_current.getMonth(), d_current.getDate()-7);
                for( var i=0 ; i<state.db.tools.length ; i++ ) {
                    var td = new Date(state.db.tools[i].created_at);
                    if( td > d7 ) {
                        t_tmp.push(state.db.tools[i]);
                    }
                }
                break;
            default:
                for( var i=0 ; i<state.db.tools.length ; i++ ) {
                    if( state.db.tools[i].tags.includes(slug) ) {
                        t_tmp.push(state.db.tools[i]);
                    }
                }
                break;
        }

        if( state.search_term.length == 0 )
        {
            t_tools = [...t_tmp];
        }
        else
        {
            var r = new RegExp(state.search_term,'i');
            for( var i=0 ; i<t_tmp.length ; i++ ) {
                if( t_tmp[i].slug.search(r) >= 0 || t_tmp[i].nicename.search(r) >= 0 || t_tmp[i].short_descr.search(r) >= 0 || (t_tmp[i].descr && t_tmp[i].descr.search(r) >= 0) ) {
                    t_tools.push(t_tmp[i]);
                }
            }
        }

        t_tools = getters.sortTools(t_tools);
        t_tools = getters.sortFeatured(t_tools);

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
    setDb( state, data ) {
        return state.db = data;
    },
    setTagsDisplay( state, data ) {
        return state.tags_display = data;
    },
    addRating(state, data) {
        var tool_id = data[0];
        var rate_value = data[1];
        for( var i=0 ; i<state.db.tools.length ; i++ ) {
            if( state.db.tools[i].id == tool_id ) {
                if( state.db.tools[i].ratings_done === undefined ) {
                    state.db.tools[i].ratings_count++;
                    state.db.tools[i].ratings_total += rate_value;
                    state.db.tools[i].ratings_avg = (state.db.tools[i].ratings_total/state.db.tools[i].ratings_count).toFixed(1);
                    state.db.tools[i].ratings_done = 1;
                    // console.log( state.db.tools[i].ratings_count );
                    // console.log( state.db.tools[i].ratings_total );
                }
                break;
            }
        }
    },
};

export const actions = {
    async nuxtServerInit({ commit }, { req }) {
        // console.log('nuxtServerInit');
        await this.dispatch( 'getDb' );
    },
    resetState( context ) {
        context.commit('resetState');
    },
    async getDb( context ) {
        // console.log('getDb');
        if( !this.state.db.length ) {
            await this.$axios.get('/exportdb')
                .then(response => {
                    context.commit('setDb',response.data);
                });
            }
    },
    rate( context, data ) {
        var tool_id = data[0];
        var rate_value = data[1];
        this.$axios.post('/tools/'+tool_id+'/'+rate_value)
            .then(response => {
                context.commit('addRating',data);
            });
    },
    // searchTools( context, period ) {
    //     // console.log('abcsearchTools');
    //     var t_tools = [];
    //     var t_tmp = [];

    //     if( period == 'last7days' ) {
    //         var k = 0;
    //         var d_current = new Date();
    //         var d7 = new Date( d_current.getFullYear(), d_current.getMonth(), d_current.getDate()-7);
    //         for( var i=0 ; i<this.state.db.tools.length ; i++ ) {
    //             var td = new Date(this.state.db.tools[i].created_at);
    //             if( td > d7 ) {
    //                 t_tmp[k++] = this.state.db.tools[i];
    //             }
    //         }
    //     }
    //     else
    //     {
    //         t_tmp = [...this.state.db.tools];
    //     }

    //     if( this.state.search_term.length == 0 )
    //     {
    //         t_tools = [...t_tmp];
    //     }
    //     else
    //     {
    //         var k = 0;
    //         if( this.state.search_term[0] == '#' ) {
    //             var st = this.state.search_term.replace('#','').toLowerCase();
    //             for( var i=0 ; i<t_tmp.length ; i++ ) {
    //                 for( var j=0 ; j<t_tmp[i].tags.length ; j++ ) {
    //                     if( t_tmp[i].tags[j].startsWith(st) ) {
    //                         t_tools[k++] = t_tmp[i];
    //                         break;
    //                     }
    //                 }
    //             }
    //         }
    //         else {
    //             var k = 0;
    //             var r = new RegExp(this.state.search_term,'i');
    //             for( var i=0 ; i<t_tmp.length ; i++ ) {
    //                 if( t_tmp[i].slug.search(r) >= 0 || t_tmp[i].nicename.search(r) >= 0 || t_tmp[i].short_descr.search(r) >= 0 || (t_tmp[i].descr && t_tmp[i].descr.search(r) >= 0) ) {
    //                     t_tools[k++] = t_tmp[i];
    //                 }
    //             }
    //         }
    //     }

    //     if( this.state.sort_by == 'date' ) {
    //         t_tools = t_tools.sort(
    //             (a, b) => (a.created_at > b.created_at ? -1 : 1)
    //         );
    //     } else if( this.state.sort_by == 'ratings' ) {
    //         t_tools = t_tools.sort(
    //             (a, b) => (a.ratings_avg > b.ratings_avg ? -1 : 1)
    //         );
    //     }

    //     context.commit('setSearchResults',t_tools);
    //     // return t_tools;
    // },
};
