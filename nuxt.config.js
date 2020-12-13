const webpack = require('webpack');

const pageTransitionIntegrityCheck = false;

// path
const prodUrl = 'https://www.nuxt.jp';
const prodRegexUrl = 'nuxt.jp';
const baseDir = '/nuxt/';

const themeColor = '#0E6934';

// 環境切り替え
const basePath = prodUrl + baseDir;
const prodName = 'prod';
const devName = 'dev';

// meta
const lang = 'ja';
const siteName = 'タイトル';
const siteDesc = '説明文';
const siteKeywords = 'キーワード';

// images
const iconImages = baseDir + 'img/icons/';
const ogpImages = basePath + 'img/ogp/';

// pwa
const shortName = 'NUXT';
const manifestIcon = 'img/icons/icon-1024.png';
// const splashscreens = baseDir + 'img/splashscreens/';

module.exports = {
	telemetry: false,
	env: {
		baseDir: baseDir,
		prodUrl: prodUrl,
		prodRegexUrl: prodRegexUrl,
		prodName: prodName,
		devName: devName,
		pageTransitionIntegrityCheck: pageTransitionIntegrityCheck,
	},
	mode: 'universal',
	router: {
		base: baseDir,
		middleware: ['pages']
	},
	srcDir: 'src/',
	/*
	** Headers of the page
	*/
	head: {
		htmlAttrs: {
			prefix: 'og: http://ogp.me/ns#',
			lang: lang
		},
		titleTemplate: `%s - ${siteName}`,
		// 'title': process.env.npm_package_name || '',
		meta: [
			// 設定関連
			{ charset: 'utf-8' },
			{ 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no, email=no, address=no' },

			// SEO関連
			{ hid: 'description', name: 'description', content: siteDesc },
			{ hid: 'keywords', name: 'keywords', content: siteKeywords },

			// ogp関連
			{ hid: 'og:site_name', property: 'og:site_name', content: siteName },
			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{ hid: 'og:url', property: 'og:url', content: basePath },
			{ hid: 'og:title', property: 'og:title', content: siteName },
			{ hid: 'og:description', property: 'og:description', content: siteDesc },
			{ hid: 'og:image', property: 'og:image', content: `${ogpImages}ogp.png` },
			{ name: 'twitter:card', content: 'summary_large_image' },
			// {'name': 'twitter:site', 'content': '@Twitter'},
			// {'property': 'article:publisher', 'content': 'FacebookURL'},
			// {'property': 'fb:app_id', 'content': 'FacebookAppID'}

			// pwa iOS
			{ name: 'apple-mobile-web-app-capable', content: 'yes' },
			{ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
		],
		script: [
			// polifills
			{ src: '//polyfill.io/v3/polyfill.min.js?features=IntersectionObserver' }
		],
		link: [
			// fonts
			// { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap&subset=japanese' },
			// { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif+JP&display=swap&subset=japanese' },

			// icons
			{ rel: 'icon', sizes: '16x16', type: 'image/png', href: iconImages + 'favicon-16.png' },
			{ rel: 'icon', sizes: '32x32', type: 'image/png', href: iconImages + 'favicon-32.png' },
			{ rel: 'icon', sizes: '48x48', type: 'image/png', href: iconImages + 'favicon-48.png' },
			{ rel: 'icon', sizes: '62x62', type: 'image/png', href: iconImages + 'favicon-62.png' },
			{ rel: 'icon', sizes: '144x144', type: 'image/png', href: iconImages + 'favicon-144.png' },

			// apple touch icon
			{ rel: 'apple-touch-icon', sizes: '180x180', href: iconImages + 'apple-touch-icon.png' }
		]
	},
	manifest: {
		lang: lang,
		name: siteName,
		short_name: shortName,
		description: siteDesc,
		background_color: '#ffffff',
		theme_color: themeColor,
		display: 'standalone',
		orientation: 'portrait'
	},
	icon: {
		iconFileName: manifestIcon
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: themeColor },
	/*
	** Global CSS
	*/
	css: [
		// Bulma Doc: https://bulma.io/documentation/
		'~/assets/css/bulma/core.scss',
		// Common
		'~/assets/css/site/common.scss',
		// Transition
		'~/assets/css/transition/basic.scss'
	],
	pageTransition: {
		name: 'fade-right',
		mode: 'out-in'
	},
	layoutTransition: {
		name: 'fade-right',
		mode: 'out-in'
	},
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		// 基本
		'~/plugins/vue-scrollto',
		'~/plugins/vue-mq',
		// store の永続化
		// { src: '~/plugins/cookie-storage.js', ssr: false },
		{ src: '~/plugins/local-storage.js', ssr: false },

		// バリデータ
		// 使用時は「build」セクションの「transpile」のコメントアウトも解除する
		// '~/plugins/vee-validate',

		// コンテンツスライダー
		{ src: '~/plugins/swiper.js', ssr: false },

		// スクロールアニメーション
		{ src: '~/plugins/vue-scrollmagic.js', ssr: false },

		// シンプルアコーディオン
		{ src: '~/plugins/vue-slide-up-down.js' },

		// トラッキング
		{ src: '~plugins/utag.js', ssr: false },

		// 共通コンポーネント
		'~/plugins/components',
		// ミックスイン
		'~/plugins/mixin',
		// フィルター
		// '~/plugins/filter',
		// カスタムディレクティブ
		// '~/plugins/directive'
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://buefy.github.io/#/documentation
		['nuxt-buefy', { css: false }],
		// '@nuxtjs/axios',
		'@nuxtjs/style-resources',
		'@nuxtjs/pwa',
		// ['@nuxtjs/google-analytics', {' id': 'UA-XXXXXX-X' }],
		// ['@nuxtjs/google-tag-manager', { id: 'UA-XXXXXX-X' }],
		'@nuxtjs/sitemap',
		// 'cookie-universal-nuxt',
		'nuxt-user-agent'
	],
	sitemap: {
		hostname: basePath,
		cacheTime: 1000 * 60 * 15
		// 'gzip': true,
		// 'exclude': [
		//   含めたくないディレクトリがあれば追加
		// ],
		// 'routes': [
		//   自動生成ページがあれば追加
		// ]
	},
	// styleResources内でutilities.scssを読み込む
	styleResources: {
		scss: [
			'~/assets/css/bulma/utilities.scss'
		]
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend (config, { isServer }) {
			const vueLoader = config.module.rules.find(r => r.loader === 'vue-loader');

			vueLoader.options.transformToRequire = {
				video: ['src', 'poster'],
				source: 'src'
			};
		},
		postcss: {
			plugins: {
				'postcss-preset-env': {
					autoprefixer: { grid: true }
				}
			}
		},
		// plugins: [
		// 	new webpack.ProvidePlugin({
		// 		_: 'lodash'
		// 	})
		// ],
		// transpile: [
		// 	'vee-validate/dist/rules'
		// ],
		// vendor: [
		// 	'vue-awesome-swiper'
		// ]
	},
	workbox: {
		// ↓基本的に「Page does not work offline」対策
		// 'dev': true,
		runtimeCaching: [
			{
				urlPattern: '^https://fonts.(?:googleapis|gstatic).com/(.*)',
				handler: 'cacheFirst'
			},
			{
				urlPattern: 'https://cdn.jsdelivr.net/.*',
				handler: 'cacheFirst'
			},
			{
				urlPattern: 'https://cdnjs.cloudflare.com/.*',
				handler: 'cacheFirst'
			},
			{
				urlPattern: 'https://cdn.materialdesignicons.com/.*',
				handler: 'cacheFirst'
			},
			{
				urlPattern: baseDir + '.*',
				handler: 'staleWhileRevalidate',
				strategyOptions: {
					cacheName: 'my-cache',
					cacheExpiration: {
						maxAgeSeconds: 24 * 60 * 60 * 30
					}
				}
			}
		]
	},
	generate: {
		fallback: true
	}
};
