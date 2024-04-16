import React from 'react';

export const ChevronIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			fill="none"
		>
			<mask
				id="a"
				width={24}
				height={24}
				x={0}
				y={0}
				maskUnits="userSpaceOnUse"
				style={{
					maskType: 'alpha',
				}}
			>
				<path fill="#D9D9D9" d="M0 0h24v24H0z" />
			</mask>
			<g mask="url(#a)">
				<path
					fill="#667085"
					d="M12 14.975c-.133 0-.258-.021-.375-.063a.877.877 0 0 1-.325-.212l-4.6-4.6a.948.948 0 0 1-.275-.7c0-.284.091-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .516.091.7.275l3.9 3.9 3.9-3.9a.948.948 0 0 1 .7-.275c.283 0 .516.091.7.275a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7l-4.6 4.6c-.1.1-.208.17-.325.212a1.106 1.106 0 0 1-.375.063Z"
				/>
			</g>
		</svg>
	);
};
