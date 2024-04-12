'use client';
import { useState } from 'react';

export const TrashIcon = ({ color }: { color?: string }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<path fill="none" d="M0 0h24v24H0z" data-name="Icon [Frame Background]" />
			<path
				fill="none"
				className="transition-all duration-300"
				stroke={isHovered ? color : '#667085'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.667}
				d="M4 7.333h15M8.167 7.333v-.666a4.14 4.14 0 0 1 .181-1.757 1.667 1.667 0 0 1 .729-.728A4.141 4.141 0 0 1 10.833 4h1.334a4.14 4.14 0 0 1 1.756.182 1.667 1.667 0 0 1 .728.728 4.141 4.141 0 0 1 .182 1.757v.667m-5 4.583v4.167m3.333 0v-4.167m4.167-4.583v9.333a6.211 6.211 0 0 1-.272 2.635 2.5 2.5 0 0 1-1.093 1.093 6.211 6.211 0 0 1-2.635.272H9.667a6.211 6.211 0 0 1-2.635-.272A2.5 2.5 0 0 1 5.939 19.3a6.211 6.211 0 0 1-.272-2.635V7.333"
				data-name="Icon"
			/>
		</svg>
	);
};
