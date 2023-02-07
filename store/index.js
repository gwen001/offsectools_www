const getDefaultState = () => {
    return {
        loading: false,
        db: [],
        search_term: '',
        search_page: 0,
        limit_results: 200,
        search_results: [],
        sort_by: 'date_desc', // name_asc, name_desc, date_Asc, date_desc, rand, ratings
        tags_display: 'top', // all, top, categories
        tool_context: [], // contextualisation
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
    getSearchPage( state ) {
        return state.search_page;
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
    // getSearchResults: (state,getters) => {
    //     var t_tools = [...state.search_results];
    //     t_tools = getters.sortTools( t_tools );
    //     var start_index = 0;
    //     var end_index = (state.search_page+1) * state.limit_results;
    //     t_tools = t_tools.slice(start_index,end_index);
    //     return t_tools;
    // },
    getToolContextualisation: (state,getters) => {
        var t_tools = [...state.tool_context];
        return getters.sortTools( t_tools );
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
    sortTools: (state,getters) => (t_tools) => {
        // console.log('sortTools');
        // console.log(state.sort_by);
        if( state.sort_by == 'date_desc' ) {
            t_tools = t_tools.sort(
                (a, b) => (a.created_at > b.created_at ? -1 : 1)
            );
        } else if( state.sort_by == 'date_asc' ) {
            t_tools = t_tools.sort(
                (a, b) => (a.created_at > b.created_at ? 1 : -1)
            );
        } else if( state.sort_by == 'name_asc' ) {
            t_tools = t_tools.sort(
                (a, b) => (a.slug > b.slug ? 1 : -1)
            );
        } else if( state.sort_by == 'name_desc' ) {
            t_tools = t_tools.sort(
                (a, b) => (a.slug > b.slug ? -1 : 1)
            );
        } else if( state.sort_by == 'rand' ) {
            t_tools = t_tools.sort(() => Math.random() - 0.5)
        }
        // } else if( state.sort_by == 'ratings' ) {
        //     t_tools = t_tools.sort(
        //         (a, b) => (a.ratings_avg > b.ratings_avg ? -1 : 1)
        //     );
        // }

        // t_tools = t_tools.reverse(); // just because of featured sort
        t_tools = getters.sortFeatured( t_tools );

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
    searchTools: (state,getters) => (slug) => {
        // console.log('searchTools');
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

        // var start_index = 0;
        // var end_index = (state.search_page+1) * state.limit_results;
        // t_tools = t_tools.slice(start_index,end_index);

        return t_tools;
    },
    // getToolsFromTag: (state,getters) => (slug) => {
    //     // console.log('getToolsFromTag');
    //     var t_tools = [];
    //     var t_tmp = [];
    //     slug = slug.toLowerCase();

    //     switch(slug)
    //     {
    //         case '':
    //         case 'all':
    //             t_tmp = [...state.db.tools];
    //             break;
    //         case 'last7days':
    //             var d_current = new Date();
    //             var d7 = new Date( d_current.getFullYear(), d_current.getMonth(), d_current.getDate()-7);
    //             for( var i=0 ; i<state.db.tools.length ; i++ ) {
    //                 var td = new Date(state.db.tools[i].created_at);
    //                 if( td > d7 ) {
    //                     t_tmp.push(state.db.tools[i]);
    //                 }
    //             }
    //             break;
    //         default:
    //             for( var i=0 ; i<state.db.tools.length ; i++ ) {
    //                 if( state.db.tools[i].tags.includes(slug) ) {
    //                     t_tmp.push(state.db.tools[i]);
    //                 }
    //             }
    //             break;
    //     }

    //     if( state.search_term.length == 0 )
    //     {
    //         t_tools = [...t_tmp];
    //     }
    //     else
    //     {
    //         var r = new RegExp(state.search_term,'i');
    //         for( var i=0 ; i<t_tmp.length ; i++ ) {
    //             if( t_tmp[i].slug.search(r) >= 0 || t_tmp[i].nicename.search(r) >= 0 || t_tmp[i].short_descr.search(r) >= 0 || (t_tmp[i].descr && t_tmp[i].descr.search(r) >= 0) ) {
    //                 t_tools.push(t_tmp[i]);
    //             }
    //         }
    //     }

    //     t_tools = getters.sortTools(t_tools);
    //     // t_tools = getters.sortFeatured(t_tools);

    //     return t_tools;
    // },
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
    resetSearch( state, reset_search_page=0 ) {
        if( reset_search_page ) {
            state.search_page = 0;
        }
        return state.search_term = '';
    },
    resetSearchPage( state ) {
        return state.search_page = 0;
    },
    setSearchTerm( state, value ) {
        return state.search_term = value.trim();
    },
    incrSearchPage( state ) {
        return state.search_page = state.search_page + 1;
    },
    // setSearchResults( state, data ) {
    //     return state.search_results = data;
    // },
    setSortBy( state, value ) {
        return state.sort_by = value;
    },
    setDb( state, data ) {
        return state.db = data;
    },
    setTagsDisplay( state, data ) {
        return state.tags_display = data;
    },
    setContextualisation( state, data ) {
        return state.tool_context = data;
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
    searchTools( context, data ) {
        console.log('searchTools');
        var t_tools = [];
        var t_tmp = [];
        var slug = data[0];
        slug = slug.toLowerCase();

        switch(slug)
        {
            case '':
            case 'all':
                t_tmp = [...this.state.db.tools];
                break;
            case 'last7days':
                var d_current = new Date();
                var d7 = new Date( d_current.getFullYear(), d_current.getMonth(), d_current.getDate()-7);
                for( var i=0 ; i<this.state.db.tools.length ; i++ ) {
                    var td = new Date(this.state.db.tools[i].created_at);
                    if( td > d7 ) {
                        t_tmp.push(this.state.db.tools[i]);
                    }
                }
                break;
            default:
                for( var i=0 ; i<this.state.db.tools.length ; i++ ) {
                    if( this.state.db.tools[i].tags.includes(slug) ) {
                        t_tmp.push(this.state.db.tools[i]);
                    }
                }
                break;
        }

        if( this.state.search_term.length == 0 )
        {
            t_tools = [...t_tmp];
        }
        else
        {
            var r = new RegExp(this.state.search_term,'i');
            for( var i=0 ; i<t_tmp.length ; i++ ) {
                if( t_tmp[i].slug.search(r) >= 0 || t_tmp[i].nicename.search(r) >= 0 || t_tmp[i].short_descr.search(r) >= 0 || (t_tmp[i].descr && t_tmp[i].descr.search(r) >= 0) ) {
                    t_tools.push(t_tmp[i]);
                }
            }
        }

        context.commit('setSearchResults',t_tools);
    },
    createToolContextualisation( context, data ) {
        // console.log('createToolContextualisation');
        var n_context = data[0];
        var t_tags = data[1];
        var t_exclude = data[2];

        var t_context = [];
        for( var i=0 ; i<this.state.db.tools.length ; i++ ) {
            for( var j=0 ; j<t_tags.length ; j++ ) {
                if( this.state.db.tools[i].tags.includes(t_tags[j]) ) {
                    if( !t_exclude.includes(this.state.db.tools[i].slug) ) {
                        t_context.push( this.state.db.tools[i] );
                        break;
                    }
                }
            }
        }
        // console.log('t_context:'+t_context.length);

        let rnd_context = true;
        let start_index = 0;
        let end_index = 0;

        if( rnd_context )
        {
            // random contextualisation
            t_context = t_context.sort(() => Math.random() - 0.5)
            start_index = 0;
            end_index = start_index + n_context;
        }
        else
        {
            // weekly contextualisation
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
            start_index = final_week * n_context;
            end_index = start_index + n_context;
            // console.log('final_week:'+final_week);
            // console.log('start_index:'+start_index);
        }

        t_context = t_context.slice(start_index,end_index);
        // console.log(t_context);

        context.commit('setContextualisation',t_context);
    },
};
