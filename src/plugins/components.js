import Vue from 'vue';

import MHeader from '~/components/-header';
import MNavigation from '~/components/-navigation';
import MFooter from '~/components/-footer';

import Loading from '~/components/-loading';
import PageTopButton from '~/components/-page-top-button';

Vue.mixin({
	components: {
		MHeader,
		MNavigation,
		MFooter,
		Loading,
		PageTopButton,
	},
});
