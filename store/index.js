import { faIgloo } from "@fortawesome/free-solid-svg-icons";

const getDefaultState = () => {
    return {
        user_agent: '',
        loading: false,
        awesome_background: {'background_filename':'','background_author':'','background_author_link':''},
        db: [],
        search_term: '',
        search_page: 0,
        current_tool: null,
        tool_null: null,
        limit_results: 200,
        search_results: [],
        tags_sort_by: 'name', // name, categories
        tools_sort_by: 'date_desc', // name_asc, name_desc, date_Asc, date_desc, rand, ratings
        tags_display: 'top', // all, top, categories
        tool_context: [], // contextualisation
        newsletter_status: -1, // -1:nothing done (default), 9999:loading, 0:refused, 1:accepted
    }
}

export const state = () => getDefaultState();

export const getters = {
    isLoading( state ) {
        return state.loading;
    },
    getUserAgent( state ) {
        return state.user_agent;
    },
    getAwesomeBackground( state ) {
        // console.log(state.awesome_background);
        return state.awesome_background;
    },
    getCurrentTool( state ) {
        // console.log(state.current_tool);
        return state.current_tool;
    },
    getToolModal( state ) {
        // console.log(state.current_tool);
        return state.tool_modal;
    },
    getSearchTerm( state ) {
        return state.search_term;
    },
    getSearchPage( state ) {
        return state.search_page;
    },
    getTagsSortBy( state ) {
        return state.tags_sort_by;
    },
    getToolsSortBy( state ) {
        return state.tools_sort_by;
    },
    getCategories( state ) {
        // console.log(state.db.categories);
        return state.db.categories;
    },
    getContributors( state ) {
        return state.db.contributors;
    },
    getSponsors( state ) {
        return state.db.sponsors;
    },
    getTagsDisplay( state ) {
        return state.tags_display;
    },
    getTags( state, options=[] ) {
        var k = 0;
        var t_tags = [];

        if( options['sort_by'] === undefined ) {
            options['sort_by'] = state.tags_display;
        }

        for( var i=0 ; i<state.db.tags.length ; i++ ) {
            if( state.db.tags[i].tools_count == 0 ) {
                continue;
            }
            if( options['sort_by'] == 'all' || (options['sort_by'] == 'top' && state.db.tags[i].status == 1) ) {
            // if( (options['sort_by'] == 'top' && state.db.tags[i].status == 1) ) {
                t_tags[k++] = state.db.tags[i];
            }
        }

        if( options['sort_by'] == 'top' ) {
            t_tags = t_tags.sort(
                (a, b) => (a.tools_count > b.tools_count ? -1 : 1)
            );
        }

        if( options['limit'] !== undefined ) {
           t_tags = t_tags.slice(0,options['limit']);
        }

        return t_tags;
    },
    getTagsByName( state ) {
        var k = 0;
        var t_tags = [];
        var t_alphabet = {};
        var first_letter = '';

        for( var i=0 ; i<state.db.tags.length ; i++ ) {
            if( state.db.tags[i].tools_count == 0 ) {
                continue;
            }
            first_letter = state.db.tags[i].slug[0];
            if( first_letter < 'a' || first_letter > 'z' ) {
                first_letter = '#';
            }
            if( first_letter in t_alphabet ) {
                // console.log(t_alphabet[first_letter].length);
            } else {
                t_alphabet[first_letter] = [];
            }
            t_alphabet[first_letter][t_alphabet[first_letter].length] = state.db.tags[i];

            t_tags[k++] = state.db.tags[i];
        }
        // console.log(t_alphabet);
        return t_alphabet;
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
    sortTools: (state,getters) => (t_tools,sort_by) => {
        if( sort_by === undefined ) {
            sort_by = state.tools_sort_by;
        }
        // console.log('sortTools');
        // console.log(sort_by);
        if( sort_by == 'date_desc' ) {
            t_tools = t_tools.sort(
                (a, b) => (a.accepted_at > b.accepted_at ? -1 : 1)
            );
        } else if( sort_by == 'date_asc' ) {
            t_tools = t_tools.sort(
                (a, b) => (a.accepted_at > b.accepted_at ? 1 : -1)
            );
        } else if( sort_by == 'name_asc' ) {
            t_tools = t_tools.sort(
                (a, b) => (a.slug > b.slug ? 1 : -1)
            );
        } else if( sort_by == 'name_desc' ) {
            t_tools = t_tools.sort(
                (a, b) => (a.slug > b.slug ? -1 : 1)
            );
        } else if( sort_by == 'rand' ) {
            t_tools = t_tools.sort(() => Math.random() - 0.5)
        }
        // } else if( sort_by == 'ratings' ) {
        //     t_tools = t_tools.sort(
        //         (a, b) => (a.ratings_avg > b.ratings_avg ? -1 : 1)
        //     );
        // }

        if( state.user_agent.toLowerCase().includes('firefox',0) ) {
            t_tools = t_tools.reverse(); // firefox and chrome don't sort the same way, yeah it sucks...
        }
        t_tools = getters.sortFeatured( t_tools );
        if( state.user_agent.toLowerCase().includes('firefox',0) ) {
            t_tools = t_tools.reverse(); // firefox and chrome don't sort the same way, yeah it sucks...
        }
        t_tools = getters.sortSponsored( t_tools );

        return t_tools;
    },
    sortSponsored: (state) => (t_tools) => {
        // console.log('sortTools');
        t_tools = t_tools.sort(
            // (a, b) => (a.sponsor_id > b.sponsor_id ? -1 : 1)
            (a, b) => (a.sponsored > b.sponsored ? -1 : 1)
        );
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
    getSurprise: (state,getters) => (limit) => {
        var t_tools = [...state.db.tools];
        t_tools = t_tools.sort(() => Math.random() - 0.5)
        t_tools = t_tools.slice(0,limit);
        t_tools = getters.sortFeatured( t_tools );
        if( state.user_agent.toLowerCase().includes('firefox',0) ) {
            t_tools = t_tools.reverse(); // firefox and chrome don't sort the same way, yeah it sucks...
        }
        t_tools = getters.sortSponsored( t_tools );
        return t_tools;
    },
    searchTools: (state,getters) => (slug,options) => {
        // console.log('searchTools');
        // console.log(slug);
        // console.log(options);
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
                    var td = new Date(state.db.tools[i].accepted_at);
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

        if( options && options['sort_by'] ) {
            t_tools = getters.sortTools(t_tools,options['sort_by']);
        } else {
            t_tools = getters.sortTools(t_tools);
        }

        if( options && options['limit'] ) {
            return t_tools.slice(0,options['limit']);
        }

        // var start_index = 0;
        // var end_index = (state.search_page+1) * state.limit_results;
        // t_tools = t_tools.slice(start_index,end_index);

        return t_tools;
    },
    getNewsletterStatus( state ) {
        // console.log('getNewsletterStatus '+state.newsletter_status);
        return state.newsletter_status;
    }
};

export const mutations = {
    resetState( state ) {
        Object.assign( state, getDefaultState() );
    },
    setUserAgent( state, user_agent ) {
        return state.user_agent = user_agent;
    },
    setAwesomeBackground( state, data ) {
        state.awesome_background = [];
        state.awesome_background['background_filename'] = data[0];
        if( data.length >= 2 ) {
            state.awesome_background['background_author'] = data[1];
        }
        if( data.length >= 3 ) {
            state.awesome_background['background_author_link'] = data[2];
        }
        if( data[0].indexOf('.mp4') > 0 ) {
            state.awesome_background['is_video'] = 1;
        } else {
            state.awesome_background['is_video'] = 0;
        }
        console.log(state.awesome_background);
        return;
    },
    setCurrentTool( state, data ) {
        state.current_tool = data;
    },
    resetCurrentTool( state ) {
        state.current_tool = null;
    },
    setToolModal( state, data ) {
        state.tool_modal = data;
    },
    resetToolModal( state ) {
        state.tool_modal = null;
    },
    resetAwesomeBackground( state ) {
        return state.awesome_background = {'background_filename':'','background_author':'','background_author_link':''};
    },
    startLoading( state ) {
        return state.loading = true;
    },
    stopLoading( state ) {
        return state.loading = false;
    },
    resetSearch( state, reset_search_page=0 ) {
        // console.log('resetSearch');
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
    setTagsSortBy( state, value ) {
        return state.tags_sort_by = value;
    },
    setToolsSortBy( state, value ) {
        return state.tools_sort_by = value;
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
    resetNewsletterStatus( state ) {
        // console.log('resetNewsletterStatus');
        return state.newsletter_status = -1;
    },
    setNewsletterLoader( state ) {
        // console.log('setNewsletterLoader');
        return state.newsletter_status = 9999;
    },
    setNewsletterStatus( state, data ) {
        // console.log('setNewsletterStatus '+data);
        return state.newsletter_status = data ? 1 : 0;
    }
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
        // console.log('searchTools');
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
                    var td = new Date(this.state.db.tools[i].accepted_at);
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
        var sponsor_chance = 20; // tools from sponsors have x chance to be selected
        var featured_chance = 10; // featured tools have x chance to be selected

        var t_basetools = [];
        for( var i=0 ; i<this.state.db.tools.length ; i++ ) {
            for( var j=0 ; j<t_tags.length ; j++ ) {
                if( this.state.db.tools[i].tags.includes(t_tags[j]) ) {
                    if( !t_exclude.includes(this.state.db.tools[i].slug) ) {
                        t_basetools.push( this.state.db.tools[i] );
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
            // console.log(t_basetools.length);
            var r;
            var n_basetools = t_basetools.length;
            t_basetools = t_basetools.sort(() => Math.random() - 0.5)

            for( var i=0 ; i<n_basetools ; i++ ) {
                if( t_basetools[i].sponsored ) {
                    r = Math.floor(Math.random() * 100);
                    // console.log(r);
                    if( r >= (100-sponsor_chance) ) {
                        n_basetools = n_basetools - 1;
                        t_context.push(t_basetools[i]);
                        // delete t_basetools[i];
                        t_basetools.splice(i, 1);
                    }
                }
            }

            for( var i=0 ; i<n_basetools ; i++ ) {
                if( t_basetools[i].featured ) {
                    r = Math.floor(Math.random() * 100);
                    // console.log(r);
                    if( r >= (100-featured_chance) ) {
                        n_basetools = n_basetools - 1;
                        t_context.push(t_basetools[i]);
                        // delete t_basetools[i];
                        t_basetools.splice(i, 1);
                    }
                }
            }
            // console.log(t_basetools.length);
            // console.log(t_context.length);

            if( t_context.length > n_context ) {
                t_context = t_context.slice( 0, n_context );
            } else {
                start_index = 0;
                end_index = start_index + n_context - t_context.length;
                t_context = t_context.concat( t_basetools.slice(start_index,end_index) );
            }
        }
        else
        {
            // weekly contextualisation
            let now = new Date();
            let onejan = new Date(now.getFullYear(), 0, 1);
            let week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
            // console.log('week:'+week);

            let max_week = Math.floor( t_basetools.length/n_context );
            // console.log('max_week:'+max_week);
            if( max_week == 0 ) {
                return t_basetools;
            }
            let final_week = week % max_week;
            // let start_index = (final_week-1) * n_context;
            start_index = final_week * n_context;
            end_index = start_index + n_context;
            // console.log('final_week:'+final_week);
            // console.log('start_index:'+start_index);
            t_context = t_basetools.slice(start_index,end_index);
        }

        // console.log(t_context);
        context.commit('setContextualisation',t_context);
    },
    async newsletter( context, data ) {
        // console.log('subscribe newsletter');
        // console.log(data);
        await this.$axios.post(this.app.$config.NEWSLETTER_SUBSCRIBE_URL,data)
            .then(response => {
                // console.log(response.data.success);
                context.commit('setNewsletterStatus',response.data.success);
            })
            .catch(function (error) {
                context.commit('setNewsletterStatus',0);
            });
    },
};
