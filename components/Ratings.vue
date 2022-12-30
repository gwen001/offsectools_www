<template>
    <div class="ratings align-items-center">
        <label class="ratings_count" v-if="from == 'tooldetails'">({{ tool.ratings_count }})</label>
        <template v-for="n in [5,4,3,2,1]">
            <template v-if="n <= tool.ratings_avg">
                <span v-bind:class="[isToolDetails ? 'big' : 'small', 'full']" v-on:click="rate(n)"></span>
            </template>
            <template v-else>
                <template v-if="n == xhalf">
                    <span v-bind:class="[isToolDetails ? 'big' : 'small', 'half']" v-on:click="rate(n)"></span>
                </template>
                <template v-else>
                    <span v-bind:class="[isToolDetails ? 'big' : 'small', 'empty']" v-on:click="rate(n)"></span>
                </template>
            </template>
        </template>
        <label class="ratings_avg" v-if="from == 'tooldetails'">{{ tool.ratings_avg }}</label>
    </div>
</template>

<script>
export default {
    name: 'Ratings',
    props: [ 'from', 'tool' ],
    computed: {
        isToolDetails() {
            return this.from == 'tooldetails';
        },
        xhalf() {
            var a  = parseInt(this.tool.ratings_avg);
            var rest = this.tool.ratings_avg - a;
            if( rest > 0 ) {
                return a+1;
            } else {
                return -1;
            }
        }
    },
    methods: {
        rate( rate_value ) {
            this.$store.dispatch( 'rate', [this.tool.id,rate_value] );
        },
    },
}
</script>


<style scoped>
.ratings {
    /* border: 1px solid #f00; */
    display: inline-flex;
    flex-direction: row-reverse;
    justify-content: left;
}

.ratings .ratings_avg {
    margin-right: 10px;
}
.ratings .ratings_count {
    margin-left: 10px;
}

.ratings > span {
    cursor: pointer;
    position: relative;
}
.ratings .small {
    height: 15px;
    width: 15px;
}
.ratings .big {
    height: 20px;
    width: 20px;
}

.ratings:hover > span {
    background-image: url( "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230a0c1f' stroke='%23facc15' stroke-width='8' viewBox='-10 -10 140 140'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z'%3E%3C/path%3E%3C/svg%3E" ) !important;
}

.ratings > span.empty {
    background-image: url( "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23facc15' stroke-width='8' viewBox='-10 -10 140 140'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z'%3E%3C/path%3E%3C/svg%3E" );
}

.ratings > span.full {
    background-image: url( "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23facc15' stroke='%23facc15' stroke-width='8' viewBox='-10 -10 140 140'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z'%3E%3C/path%3E%3C/svg%3E" );
}

.ratings > span.half {
    background-image: url( "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23facc15' fill-rule='evenodd' stroke='%23facc15' stroke-width='5' viewBox='-10 -10 140 140'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M64.64,2.22l15.71,36.79l39.85,3.58c1.76,0.15,3.06,1.7,2.91,3.46c-0.07,0.86-0.48,1.6-1.08,2.13L91.89,74.5 l8.92,39.02c0.39,1.72-0.68,3.44-2.41,3.84c-0.88,0.2-1.76,0.02-2.47-0.44L61.69,96.44l-34.35,20.54c-1.52,0.91-3.48,0.41-4.39-1.1 c-0.44-0.74-0.55-1.58-0.37-2.35l0,0l8.92-39.02L1.34,48.17c-1.33-1.16-1.46-3.18-0.3-4.51c0.59-0.68,1.4-1.04,2.24-1.09 l39.75-3.57L58.75,2.2c0.69-1.63,2.57-2.38,4.2-1.69C63.74,0.85,64.33,1.48,64.64,2.22L64.64,2.22z M61.69,11.6l13.53,31.67l0.01,0 c0.45,1.05,1.45,1.83,2.67,1.93l34.31,3.08L86.37,70.83c-0.95,0.74-1.44,1.99-1.15,3.24l7.68,33.58L63.39,90 c-0.51-0.32-1.1-0.49-1.7-0.49V11.6L61.69,11.6z'%3E%3C/path%3E%3C/svg%3E" );
}

.ratings > span::before {
    /* border: 1px solid #00f; */
    content: " ";
    opacity: 0;
    position: absolute;
    height: inherit;
    width: inherit;
}

.ratings > span:hover:before,
.ratings > span:hover ~ span:before {
    background-image: url( "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23facc15' stroke='%23facc15' stroke-width='8' viewBox='-10 -10 140 140'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z'%3E%3C/path%3E%3C/svg%3E" );
    opacity: 1;
}
</style>