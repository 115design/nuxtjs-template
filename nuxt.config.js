const pageTransitionIntegrityCheck = false;

// path
const prodUrl = 'https://www.nuxt.jp';
const prodRegexUrl = 'nuxt.jp';
const baseDir = '/nuxt/';

const themeColor = '#00afcc';

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
// const iconImages = baseDir + 'img/icons/';
const ogpImages = basePath + 'img/ogp/';

// pwa
const shortName = 'NUXT';
const manifestIcon = 'img/icons/icon-1024.png';
// const splashscreens = baseDir + 'img/splashscreens/';

export default {
	telemetry: false,
	env: {
		baseDir: baseDir,
		prodUrl: prodUrl,
		prodRegexUrl: prodRegexUrl,
		prodName: prodName,
		devName: devName,
		pageTransitionIntegrityCheck: pageTransitionIntegrityCheck,
	},

	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	srcDir: 'src/',

	router: {
		base: baseDir,
		middleware: ['pages'],
		trailingSlash: true,
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		htmlAttrs: {
			prefix: 'og: http://ogp.me/ns#',
			lang: lang,
		},
		titleTemplate: `%s`,
		meta: [
			// 設定関連
			{ charset: 'utf-8' },
			{ 'http-equiv': 'x-ua-compatible', 'content': 'ie=edge' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				name: 'format-detection',
				content: 'telephone=no, email=no, address=no',
			},

			// SEO関連
			{ hid: 'description', name: 'description', content: siteDesc },
			{ hid: 'keywords', name: 'keywords', content: siteKeywords },

			// OGP関連
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

			// PWA iOS
			{ name: 'apple-mobile-web-app-capable', content: 'yes' },
			{
				name: 'apple-mobile-web-app-status-bar-style',
				content: 'black-translucent',
			},
		],
		script: [
			// polifills
			{ src: '//polyfill.io/v3/polyfill.min.js?features=IntersectionObserver' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: baseDir + 'favicon.ico' },
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: baseDir + '/apple-touch-icon.png',
			},
		],
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: themeColor },

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		// Bulma Doc: https://bulma.io/documentation/
		'~/assets/css/bulma/core.scss',
		// Common
		'~/assets/css/site/common.scss',
		// Transition
		'~/assets/css/transition/basic.scss',
	],

	pageTransition: {
		name: 'fade-right',
		mode: 'out-in',
	},
	layoutTransition: {
		name: 'fade-right',
		mode: 'out-in',
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
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

		// // シンプルアコーディオン
		// { src: '~/plugins/vue-slide-up-down.js' },

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

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/stylelint
		'@nuxtjs/stylelint-module',
		'@nuxtjs/style-resources',
	],

	styleResources: {
		scss: ['~/assets/css/bulma/utilities.scss'],
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// Doc: https://buefy.github.io/#/documentation
		['nuxt-buefy', { css: false }],
		// '@nuxtjs/axios',
		'@nuxtjs/style-resources',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		// '@nuxtjs/gtm',
		'@nuxtjs/sitemap',
		// 'cookie-universal-nuxt',
		'nuxt-user-agent',
	],

	gtm: {
		id: 'GTM-XXXXXXX',
		pageTracking: true,
		enabled: true, // 常に（npm run devの場合も）GTMイベントを送信
	},

	sitemap: {
		hostname: basePath,
		cacheTime: 1000 * 60 * 15,
		// 'gzip': true,
		// 'exclude': [
		//   含めたくないディレクトリがあれば追加
		// ],
		// 'routes': [
		//   自動生成ページがあれば追加
		// ]
	},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		icon: {
			iconFileName: manifestIcon,
		},
		meta: {
			// mobileAppIOSオプションを有効にする前に、以下記事を一読すること。
			// https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb
			// mobileAppIOS: true
		},
		manifest: {
			lang: lang,
			name: siteName,
			short_name: shortName,
			description: siteDesc,
			background_color: '#ffffff',
			theme_color: themeColor,
			display: 'standalone',
			orientation: 'portrait',
		},
		workbox: {
			// Page does not work offline 対策
			// 'dev': true,
			runtimeCaching: [
				{
					urlPattern: 'https://polyfill.io/.*',
					handler: 'cacheFirst',
				},
				{
					urlPattern: '^https://fonts.(?:googleapis|gstatic).com/(.*)',
					handler: 'cacheFirst',
				},
				{
					urlPattern: 'https://cdn.jsdelivr.net/.*',
					handler: 'cacheFirst',
				},
				{
					urlPattern: baseDir + '.*',
					handler: 'staleWhileRevalidate',
					strategyOptions: {
						cacheName: 'my-cache',
						cacheExpiration: {
							maxAgeSeconds: 24 * 60 * 60 * 30,
						},
					},
				},
			],
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		// extend(config, { isServer }) {
		// 	const vueLoader = config.module.rules.find(
		// 		(r) => r.loader === 'vue-loader'
		// 	);

		// 	vueLoader.options.transformToRequire = {
		// 		video: ['src', 'poster'],
		// 		source: 'src',
		// 	};
		// },
		postcss: {
			preset: {
				autoprefixer: { grid: 'autoplace' },
			},
		},
	},

	generate: {
		fallback: true,
	},
};
