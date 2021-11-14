// state
export const state = () => ({
	page: 'index',
	previousPage: 'index',
});

// mutations
export const mutations = {
	updatePage(state, pageName) {
		state.page = pageName;
	},
	updatePreviousPage(state, pageName) {
		state.previousPage = pageName;
	},
};
