
export function generateClamp(min, max){
	return function(val){
		return Math.min(Math.max(val, min), max);
	};
}

export function isRelative(el) {
	return window.getComputedStyle(el).position === 'relative';
}

export function generateMoveFn(){
	if (window.requestAnimationFrame) {
		return function(customFn){
			const move = customFn || defaultMove;

			return function (el, x, y, e){
				window.requestAnimationFrame(function () {
					move(el, x, y, e);
				});
			};
		};
	}
	return function (customFn) {
		return function (el, x, y, e) {
			const move = customFn || defaultMove;
			move(el, x, y, e);
		};
	};
}

function defaultMove(el, x, y) {
	el.style.left = x + 'px';
	el.style.top = y + 'px';
}
