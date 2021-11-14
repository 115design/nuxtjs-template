import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
	breakpoints: {
		miniMobile: 375,
		mobile: 666,
		tablet: 969,
		desktop: Infinity,
		// fullhd: Infinity,
	},
	defaultBreakpoint: 'mobile',
});

Vue.mixin({
	data() {
		return {
			// until 375px
			miniMobile: false,
			// until 666px
			mobile: false,
			// from 667px and until 969px
			tabletOnly: false,
			// from 667px
			tablet: false,
			// from 769px
			desktop: false,
		};
	},
	watch: {
		$mq() {
			this.miniMobile = this.$mq === 'miniMobile';
			this.mobile = this.$mq === 'mobile';
			this.tabletOnly = this.$mq === 'tablet';
			this.tablet = this.$mq === 'tablet' || this.$mq === 'desktop';
			this.desktop = this.$mq === 'desktop';
		},
	},
	mounted() {
		this.miniMobile = this.$mq === 'miniMobile';
		this.mobile = this.$mq === 'mobile';
		this.tabletOnly = this.$mq === 'tablet';
		this.tablet = this.$mq === 'tablet' || this.$mq === 'desktop';
		this.desktop = this.$mq === 'desktop';
	},
});
