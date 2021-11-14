<template lang="pug">
header

</template>

<script>
import debounce from 'lodash/debounce';

export default {
	data() {
		return {};
	},
	mounted() {},
	beforeDestroy() {},
	methods: {
		handleScroll: debounce(function () {}, 50),
	},
};
</script>
