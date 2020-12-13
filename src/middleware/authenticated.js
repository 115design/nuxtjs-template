export default function ({ store, redirect, app }) {
	const userData = app.$cookies.get('nuxt-user-data');

	if (userData === void 0 || !userData.authenticated) {
		return redirect('/');
	}
}
