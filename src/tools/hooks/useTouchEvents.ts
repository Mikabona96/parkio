import { useEffect } from 'react';
import { useDebounce } from '.';

export const useTouchEvents = (
	[callback1, callback2]: Array<() => any>,
	delay = 200,
) => {
	const touchEndHandler = (deltaY: number) => {
		if (deltaY > 0) {
			callback1();
		} else if (deltaY < 0) {
			callback2();
		}
	};

	const debouncedTouchEnd = useDebounce(touchEndHandler, delay);
	useEffect(() => {
		//* Mobile
		let startY = 0;
		const touchStartHandler = (event: TouchEvent) => {
			startY = event.touches[0].clientY;
		};
		let deltaY: number;
		const touchMoveHandler = (event: TouchEvent) => {
			deltaY = event.touches[0].clientY - startY;
		};
		const touchEndHandler = () => debouncedTouchEnd(deltaY);

		window.addEventListener('touchstart', touchStartHandler);
		window.addEventListener('touchmove', touchMoveHandler);
		window.addEventListener('touchend', touchEndHandler);

		return () => {
			window.removeEventListener('touchstart', touchStartHandler);
			window.removeEventListener('touchmove', touchMoveHandler);
			window.removeEventListener('touchend', touchEndHandler);
		};
	}, [debouncedTouchEnd]);

	return {
		touchEndHandler,
	};
};
