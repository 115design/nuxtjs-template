<template lang="pug">
.container
	MHeader
	main
		.viewport
			.inner
				.title 404
				.message_area page not found.
	MFooter
</template>

<style lang="scss" scoped>
.viewport {
	& > .inner {
		padding: 200px 10%;
		text-align: center;
		background: #f0f0f0;

		.title {
			font-size: 3rem;
			font-weight: bold;
		}

		.message_area {
			font-weight: bold;
		}
	}
}
</style>
