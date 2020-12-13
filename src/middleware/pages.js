export default function ({ route, from, store }) {
	// current
	store.commit('pages/updatePage', route.name);

	if (process.client) {
		// previous
		store.commit('pages/updatePreviousPage', from.name);
	}
}
