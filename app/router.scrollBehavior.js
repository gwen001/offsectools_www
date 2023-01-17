// if (process.client) {
//     if ('scrollRestoration' in window.history) {
//         window.history.scrollRestoration = 'manual'
//         // reset scrollRestoration to auto when leaving page, allowing page reload
//         // and back-navigation from other pages to use the browser to restore the
//         // scrolling position.
//         window.addEventListener('beforeunload', () => {
//             window.history.scrollRestoration = 'auto'
//         })
//         // Setting scrollRestoration to manual again when returning to this page.
//         window.addEventListener('load', () => {
//             window.history.scrollRestoration = 'manual'
//         })
//     }
// }


export default function(to, from, savedPosition) {

    // console.log(nuxt.$store);

    console.log('scrollbehavior');
    document.getElementById('main-content').scrollTo(0,0);

    // console.log(to);
    // console.log(to.path);

    // if( to.path === '/' )
    // {
    //     console.log('yep /');
    //     const nuxt = window.$nuxt;
    //     var q = nuxt.$store.getters['getSearchTerm'];
    //     // var q = '#osint';
    //     console.log(q);

    //     var scroll = localStorage.getItem('scroll');
    //     var t_scroll = {};
    //     if( scroll ) {
    //         t_scroll = JSON.parse( scroll );
    //     }

    //     if( t_scroll[q] === undefined ) {
    //         console.log('not found');
    //         document.getElementById('main-content').scrollTo(0,0);
    //     } else {
    //         console.log('found '+t_scroll[q]);
    //         document.getElementById('main-content').scrollTo(0,t_scroll[q]);
    //     }
    // } else {
    //         console.log('not /');
    //         document.getElementById('main-content').scrollTo(0,0);
    // }

    // t_scroll[q] = document.getElementById('main-content').scrollTop;
    // localStorage.setItem('scroll', JSON.stringify(t_scroll));



    // document.getElementById('main-content').scrollTo(0,500);



            // console.log(document.getElementById('main-content'));

            // console.log(window);
            // window.scrollTo(0,0);
    // let position_x, position_y;
    // //Your Code Starts Here
    // position_x = savedPosition ? savedPosition.x : 0;
    // position_y = savedPosition ? savedPosition.y : 0;
    // console.log(position_x);
    // console.log(position_y);


    // document.getElementById('main-content').scrollTo(position_x,position_y);
    // return;

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve({ left: 0, top: 0 })
    //     }, 500)
    // });


    // // console.log(savedPosition);
    // let position;
    // //Your Code Starts Here
    // position = savedPosition || { x: 0, y: 0 };

    // const nuxt = window.$nuxt;

    // // triggerScroll is only fired when a new component is loaded
    // if (to.path === from.path && to.hash !== from.hash) {
    //     nuxt.$nextTick(() => nuxt.$emit('triggerScroll'))
    // }

    // return new Promise((resolve) => {
    //     // wait for the out transition to complete (if necessary)
    //     nuxt.$once('triggerScroll', () => {
    //         // coords will be used if no selector is provided,
    //         // or if the selector didn't match any element.
    //         if (to.hash) {
    //             let hash = to.hash
    //             // CSS.escape() is not supported with IE and Edge.
    //             if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
    //                 hash = '#' + window.CSS.escape(hash.substr(1))
    //             }
    //             try {
    //                 if (document.querySelector(hash)) {
    //                 // scroll to anchor by returning the selector
    //                 position = { selector: hash }
    //                 }
    //             } catch (e) {
    //                 console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
    //             }
    //         }
    //         // resolve(position);
    //         resolve({ left: 0, top: 0 });
    //     })
    // });
}