import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
	createPersistedState({
		key: 'vuex-storage',
		storage: window.sessionStorage
	})(store);
};
