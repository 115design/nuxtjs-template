import cloneDeep from 'lodash/cloneDeep';

export default ({ app }) => {
	let isProduction = false;
	let serverEnvironment = process.env.devName;

	// 環境判定
	const regex = new RegExp(process.env.prodRegexUrl, 'g');
	if (regex.test(location.origin)) {
		isProduction = true;
		serverEnvironment = process.env.prodName;
	}

	// 初回のみ実行

	// ページ遷移時に毎回実行
	app.router.afterEach((to, from) => {
		// console.log('afterEach');
		// console.log(to.name);
	});
};
