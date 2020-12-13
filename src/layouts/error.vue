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
	&>.inner {
		text-align: center;
		background: #F0F0F0;
		padding: 200px 10%;

		.title {
			font-weight: bold;
			font-size: 3rem;
		}

		.message_area {
			font-weight: bold;
		}
	}
}
</style>
