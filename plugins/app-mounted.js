import extend from '~/utils/extend-vue-app';

export default async function ({ app }) {
	extend(app, {
		mounted () {
			console.log('Hooray, Nuxt.js app mounted.')
            this.$store.commit( 'setUserAgent', navigator.userAgent );
		},
	})
}
