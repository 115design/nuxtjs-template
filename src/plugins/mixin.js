import Vue from 'vue';

Vue.mixin({
	methods: {
		$delay(ms) {
			return new Promise((resolve) => setTimeout(resolve, ms));
		},
		// jQuery LIKE
		$setAttributes(elem, attrs) {
			for (const idx in attrs) {
				if (
					(idx === 'styles' || idx === 'style') &&
					typeof attrs[idx] === 'object'
				) {
					for (const prop in attrs[idx]) {
						elem.style[prop] = attrs[idx][prop];
					}
				}
				//
				else if (idx === 'html') {
					elem.innerHTML = attrs[idx];
				}
				//
				else {
					elem.setAttribute(idx, attrs[idx]);
				}
			}
		},
		$closest(node, selector) {
			return (
				node.closest ||
				function (_selector) {
					do {
						if (
							(node.matches || node.msMatchesSelector).call(node, _selector)
						) {
							return node;
						}
						node = node.parentElement || node.parentNode;
					} while (node !== null && node.nodeType === 1);

					return null;
				}
			).call(node, selector);
		},
		$eq(selector, index) {
			const nodeList = document.querySelectorAll(selector);
			const length = nodeList.length;

			if (index >= 0 && index < length) {
				return nodeList[index];
			}

			return null;
		},
		$index(selector, target) {
			let nodeList;
			let element;

			if (typeof selector === 'string') {
				nodeList = document.querySelectorAll(selector);
			}
			//
			else {
				nodeList = selector;
			}

			if (typeof target === 'string') {
				element = document.querySelector(target);
			}
			//
			else {
				element = target;
			}

			// 第2引数を省略したとき
			if (typeof target === 'undefined') {
				return Array.prototype.indexOf.call(
					nodeList[0].parentNode.children,
					nodeList[0]
				);
			}

			return Array.prototype.indexOf.call(nodeList, element);
		},
	},
});
