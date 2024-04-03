import { useEffect } from 'react';
import { useDebounce } from '.';

export const useWheelEvent = (
	[callback1, callback2]: Array<() => any>,
	delay = 200,
) => {
	const wheelHandler = (event: WheelEvent) => {
		const deltaY = event.deltaY;
		if (deltaY > 0) {
			callback1();
		} else if (deltaY < 0) {
			callback2();
		}
	};
	const debouncedWheel = useDebounce(wheelHandler, delay);
	useEffect(() => {
		//* Desktop
		window.addEventListener('wheel', debouncedWheel);
		return () => {
			window.removeEventListener('wheel', debouncedWheel);
		};
	}, [debouncedWheel]);
};
