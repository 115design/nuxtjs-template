<template lang="pug">
header

</template>

<style lang="scss" scoped>

</style>

<script>
import debounce from 'lodash/debounce';

export default {
	data () {
		return {
		};
	},
	mounted () {
	},
	beforeDestroy () {
	},
	methods: {
		handleScroll: debounce(function () {

		}, 50)
	}
};
</script>
