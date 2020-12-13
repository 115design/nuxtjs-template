import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo, {
	duration: 700,
	easing: 'ease',
	offset: 0,
	cancelable: false
});
