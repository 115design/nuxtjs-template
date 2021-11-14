export default function ({ store, redirect, app }) {
	const userData = app.$cookies.get('nuxt-user-data');

	if (userData === undefined || !userData.authenticated) {
		return redirect('/');
	}
}
