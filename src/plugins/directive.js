import Vue from 'vue';

// スクロールイベント
Vue.directive('on-scroll', {
	inserted: function (el, binding) {
		function f(evt) {
			if (binding.value(evt, el)) {
				window.removeEventListener('scroll', f);
			}
		}

		window.addEventListener('scroll', f);
	},
});

// ホイールイベント
Vue.directive('on-wheel', {
	inserted: function (el, binding) {
		// const MOUSE_WHEEL_EVENT = 'onwheel' in document ? 'onwheel' : 'onmousewheel' in document ? 'onmousewheel' : 'DOMMouseScroll';

		function f(evt) {
			if (binding.value(evt, el)) {
				window.removeEventListener('wheel', f);
			}
		}

		window.addEventListener('wheel', f);
	},
});
