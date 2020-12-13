import Vue from 'vue';
// 使用する機能
import { ValidationProvider, ValidationObserver, localize, extend } from 'vee-validate';
// エラーメッセージの日本語化
import ja from 'vee-validate/dist/locale/ja.json';
// 使用するバリデーションルール
import { required, max } from 'vee-validate/dist/rules';

// VeeValidateがデフォルトで用意している各ルールを使用するよう指定
// 必須項目のバリデーション
extend('required', required);
// 最大文字数のバリデーション
extend('max', max);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

localize('ja', ja);
