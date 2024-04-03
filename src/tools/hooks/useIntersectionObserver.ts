import { RefObject, useEffect, useRef, useState } from 'react';

/**
 * Hook for Intersection Observer API.
 * @param {T} intersectedCallback - Function invokes when element is intersected.
 * @param {IntersectionObserverInit} options - The options object passed into the IntersectionObserver() constructor let you control the circumstances under which the observer's callback is invoked. It has the following fields:

		root:
		The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null.

		rootMargin:
		Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.

		threshold:
		Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible..
 * @param {() => any} intersectedCallback - Function invokes when element is intersected.
 * @param {number} isIntersectedDelay - value to delay isIntersected variable.
 * 
 * @returns {ReturnType<T>} -{ref, isIntersected} for observing changes in the intersection of a target element .
 */

interface ReturnType<T> {
	ref: RefObject<T>;
	isIntersected: boolean;
}

export const useIntersectionObserver = <T extends HTMLElement>(
	options: IntersectionObserverInit,
	intersectedCallback: () => any,
	isIntersectedDelay: number = 200,
): ReturnType<T> => {
	const [isIntersected, setIsIntersected] = useState(false);
	const ref = useRef<T>(null);

	useEffect(() => {
		const element = ref.current;
		// callback
		let callback: IntersectionObserverCallback = function (entries, observer) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					intersectedCallback();
					setTimeout(() => {
						setIsIntersected(true);
					}, isIntersectedDelay);
				} else {
					setIsIntersected(false);
				}
			});
		};

		// observer
		let observer = new IntersectionObserver(callback, options);
		observer.observe(element as HTMLElement);

		return () => {
			observer.unobserve(element as HTMLElement);
		};
	}, [options, intersectedCallback, isIntersected, isIntersectedDelay]);

	return {
		ref,
		isIntersected,
	};
};
