import { useEffect, useRef } from 'react';

export const useDebounce = (
	callback: (...args: any[]) => any,
	delay: number,
) => {
	const timeoutRef = useRef<number | null>(null);

	useEffect(() => {
		// Cleanup the previous timeout on re-render
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	const debouncedCallback = (...args: any[]) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = window.setTimeout(() => {
			callback(...args);
		}, delay);
	};

	return debouncedCallback;
};
