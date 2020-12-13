<template lang="pug">
div.container.toTop
	Loading
	MHeader
	main

	PageTopButton
	MFooter

</template>

<style lang="scss" scoped>
// 1024px以上
@media only screen and ( min-width: $large-tablet ) {

}

// 1200px以上
@media only screen and ( min-width: $desktop ) {

}

</style>

<script>
// import moment from 'moment';
// import debounce from 'lodash/debounce';
import 'swiper/css/swiper.css';

export default {
	data () {
		return {
		};
	},
	middleware (context) {

	},
	async mounted () {
		const self = this;

		if (process.browser && window.localStorage) {
			window.localStorage.removeItem('vuex-storage');
		}

		let poorPerformanceBrowser = false;
		// 低性能ブラウザ判定
		if ((/internet explorer/i).test(self.$ua.browser())) {
			poorPerformanceBrowser = true;
		}

		// スクロールアニメーション
		self.sceneArray = [];

		// window.addEventListener('resize', self.handleResize);
	},
	beforeDestroy () {
		const self = this;

		self.$scrollmagic.removeScene(self.sceneArray);
		// window.removeEventListener('resize', self.handleResize);
	},
	methods: {
		// handleResize: debounce(function () {
		// 	self.justyfy();
		// }, 150),
	},
	head () {
		return {
			title: 'タイトル',
			meta: [
				{ hid: 'description', name: 'description', content: '説明' },
				{ hid: 'keywords', name: 'keywords', content: 'キーワード' }
			],
		};
	}
};
</script>
