<template lang="pug">
transition(name="fade")
	#page_top.fixed.large_tc_show.pc_show(v-if="show" v-scroll-to="{'el': '.toTop'}" :class="{'fixed': isFixed, 'hide': !show}")
</template>

<style lang="scss" scoped>
#page_top {
	position: relative;
	background: $primary;
	width: 50px;
	height: 50px;
	border-radius: 40px;
	cursor: pointer;
	transition-property: opacity;
	transition-duration: 0.5s;
	transition-timing-function: ease;

	&.fixed {
		position: fixed;
		right: 10px;
		bottom: 10px;
		z-index: 50;
	}

	&.hide {
		opacity: 0;
	}

	&::after {
		content: ' ';
		display: block;
		width: 9px;
		height: 9px;
		border-top: solid 2px $white;
		border-right: solid 2px $white;
		transform: rotate(315deg);
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -3px 0 0 -4px;
	}

	&:hover {
		background: #78A886;
	}
}
</style>

<script>
import debounce from 'lodash/debounce';

export default {
	name: 'PagetopComponent',
	data () {
		return {
			show: false,
			isFixed: true
		};
	},
	mounted () {
		const self = this;

		window.addEventListener('scroll', self.handleScroll);
	},
	beforeDestroy () {
		const self = this;

		window.removeEventListener('scroll', self.handleScroll);
	},
	methods: {
		handleScroll: debounce(function () {
			const self = this;

			if (window.scrollY > 300) {
				self.show = true;
			}
			else {
				self.show = false;
			}
		}, 50),
		getDocumentHeight () {
			const html = document.getElementsByTagName('html')[0];
			const body = document.getElementsByTagName('body')[0];

			return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
		}
	}
};
</script>
