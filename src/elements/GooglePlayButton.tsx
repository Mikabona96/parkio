import React from 'react';

export const GooglePlayButton = ({
	variant,
}: {
	variant: 'black' | 'white';
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={134}
			height={44}
			fill="none"
			style={{ cursor: 'pointer' }}
		>
			<rect
				width={133.077}
				height={44}
				x={0.428}
				fill={variant === 'black' ? '#090909' : '#fff'}
				rx={8}
			/>
			<g filter="url(#a)">
				<path
					fill="url(#b)"
					d="M12.895 9.785c-.294.302-.467.77-.467 1.377v21.676c0 .608.173 1.075.467 1.377l.075.07 12.499-12.142v-.286l-12.5-12.143-.074.071Z"
				/>
				<path
					fill="url(#c)"
					d="m29.635 26.192-4.166-4.049v-.286l4.167-4.047.093.052 4.937 2.724c1.41.778 1.41 2.052 0 2.83l-4.937 2.725-.094.051Z"
				/>
				<g filter="url(#d)">
					<path
						fill="url(#e)"
						d="M29.73 26.14 25.467 22 12.895 34.215c.464.478 1.231.537 2.096.06L29.73 26.14Z"
					/>
				</g>
				<path
					fill="url(#f)"
					d="M29.73 17.86 14.99 9.727c-.865-.477-1.632-.418-2.096.06l12.574 12.215 4.26-4.14Z"
				/>
			</g>
			<path
				fill={variant === 'black' ? '#fff' : '#090909'}
				d="M66.54 23.215c-2.241 0-4.068 1.649-4.068 3.92 0 2.257 1.827 3.92 4.068 3.92 2.242 0 4.07-1.663 4.07-3.92-.002-2.271-1.829-3.92-4.07-3.92Zm0 6.296c-1.228 0-2.287-.98-2.287-2.375 0-1.412 1.06-2.376 2.287-2.376 1.228 0 2.287.964 2.287 2.375 0 1.396-1.058 2.376-2.287 2.376Zm-8.875-6.296c-2.241 0-4.068 1.649-4.068 3.92 0 2.257 1.827 3.92 4.068 3.92 2.242 0 4.069-1.663 4.069-3.92 0-2.271-1.827-3.92-4.069-3.92Zm0 6.296c-1.228 0-2.287-.98-2.287-2.375 0-1.412 1.06-2.376 2.287-2.376 1.228 0 2.287.964 2.287 2.375 0 1.396-1.059 2.376-2.287 2.376ZM47.109 24.42v1.662h4.114c-.122.936-.444 1.619-.936 2.093-.599.579-1.535 1.218-3.178 1.218-2.533 0-4.513-1.975-4.513-4.425 0-2.45 1.98-4.425 4.513-4.425 1.366 0 2.364.52 3.1 1.188l1.214-1.173c-1.03-.95-2.395-1.677-4.314-1.677-3.47 0-6.386 2.732-6.386 6.087 0 3.356 2.916 6.087 6.386 6.087 1.872 0 3.285-.594 4.39-1.708 1.136-1.098 1.49-2.643 1.49-3.89 0-.385-.031-.741-.093-1.038h-5.787Zm43.173 1.29c-.337-.875-1.366-2.494-3.47-2.494-2.087 0-3.822 1.589-3.822 3.92 0 2.197 1.72 3.92 4.022 3.92a4.064 4.064 0 0 0 3.378-1.738l-1.382-.891c-.46.653-1.09 1.084-1.996 1.084-.905 0-1.55-.401-1.965-1.188l5.42-2.168-.185-.444Zm-5.526 1.308c-.046-1.515 1.213-2.287 2.119-2.287.706 0 1.304.342 1.504.831l-3.623 1.456Zm-4.406 3.8h1.78v-11.52h-1.78v11.52Zm-2.917-6.726h-.061c-.4-.46-1.168-.876-2.134-.876-2.027 0-3.884 1.723-3.884 3.935 0 2.197 1.857 3.905 3.884 3.905.967 0 1.734-.416 2.134-.89h.06v.564c0 1.5-.828 2.301-2.163 2.301-1.09 0-1.766-.757-2.042-1.395l-1.55.624a3.86 3.86 0 0 0 3.592 2.316c2.087 0 3.853-1.188 3.853-4.084v-7.037h-1.688l-.001.637Zm-2.041 5.42c-1.229 0-2.257-.995-2.257-2.36 0-1.382 1.028-2.391 2.257-2.391 1.212 0 2.164 1.009 2.164 2.39 0 1.366-.952 2.361-2.164 2.361Zm23.232-10.215h-4.26v11.521h1.777v-4.364h2.482c1.971 0 3.909-1.38 3.909-3.578s-1.937-3.579-3.908-3.579Zm.046 5.553h-2.53V20.9h2.53c1.329 0 2.084 1.065 2.084 1.975 0 .892-.755 1.974-2.084 1.974Zm10.988-1.654c-1.287 0-2.62.548-3.172 1.764l1.578.637c.338-.637.966-.846 1.625-.846.919 0 1.854.534 1.869 1.482v.12c-.322-.179-1.011-.445-1.854-.445-1.701 0-3.433.904-3.433 2.593 0 1.542 1.395 2.535 2.958 2.535 1.195 0 1.854-.52 2.268-1.127h.061v.889h1.717V26.38c.001-2.044-1.579-3.185-3.617-3.185Zm-.215 6.314c-.581 0-1.394-.282-1.394-.98 0-.889 1.012-1.23 1.886-1.23.78 0 1.149.164 1.623.386-.138 1.068-1.088 1.824-2.115 1.824Zm10.084-6.063-2.038 4.995h-.061l-2.115-4.995h-1.915l3.172 6.981-1.809 3.884h1.854l4.89-10.865h-1.978Zm-16.014 7.371h1.777v-11.52h-1.777v11.52ZM46.888 12.482c0 .758-.236 1.361-.709 1.812-.537.536-1.238.804-2.098.804-.825 0-1.526-.272-2.102-.815-.577-.544-.866-1.217-.866-2.02 0-.805.289-1.478.866-2.021.576-.544 1.277-.815 2.102-.815.41 0 .8.076 1.172.227.372.152.67.354.893.606l-.502.478c-.378-.43-.899-.644-1.564-.644-.602 0-1.122.2-1.56.602-.44.402-.658.924-.658 1.566 0 .641.218 1.163.657 1.565.44.402.96.603 1.56.603.639 0 1.17-.202 1.596-.607.277-.263.437-.63.48-1.099H44.08v-.652h2.767c.029.142.041.278.041.41ZM51.277 10.214h-2.6v1.721h2.345v.652h-2.346v1.722h2.601v.667h-3.335V9.547h3.335v.667ZM54.372 14.976h-.734v-4.762h-1.595v-.667h3.925v.667h-1.596v4.762ZM58.808 14.976V9.547h.734v5.43h-.734ZM62.797 14.976h-.734v-4.762h-1.596v-.667h3.925v.667h-1.595v4.762ZM71.823 14.275c-.562.548-1.26.823-2.094.823-.835 0-1.533-.275-2.094-.823a2.705 2.705 0 0 1-.842-2.013c0-.794.28-1.465.842-2.014.56-.548 1.259-.823 2.093-.823.83 0 1.528.276 2.091.827.564.551.846 1.22.846 2.01 0 .793-.281 1.465-.842 2.013Zm-3.646-.455c.422.407.94.61 1.551.61.613 0 1.13-.204 1.552-.61.423-.407.635-.927.635-1.558 0-.632-.212-1.151-.635-1.559-.421-.407-.94-.61-1.552-.61-.612 0-1.129.204-1.551.61-.422.408-.634.927-.634 1.559 0 .631.212 1.15.634 1.558ZM73.695 14.976V9.547h.893l2.776 4.223h.031l-.031-1.046V9.547h.734v5.43h-.766l-2.905-4.43h-.032l.032 1.047v3.382h-.732Z"
			/>
			<path
				stroke={variant === 'black' ? '#fff' : '#090909'}
				strokeMiterlimit={10}
				strokeWidth={0.205}
				d="M46.888 12.482c0 .758-.236 1.361-.709 1.812-.537.536-1.238.804-2.098.804-.825 0-1.526-.272-2.102-.815-.577-.544-.866-1.217-.866-2.02 0-.805.289-1.478.866-2.021.576-.544 1.277-.815 2.102-.815.41 0 .8.076 1.172.227.372.152.67.354.893.606l-.502.478c-.378-.43-.899-.644-1.564-.644-.602 0-1.122.2-1.56.602-.44.402-.658.924-.658 1.566 0 .641.218 1.163.657 1.565.44.402.96.603 1.56.603.639 0 1.17-.202 1.596-.607.277-.263.437-.63.48-1.099H44.08v-.652h2.767c.029.142.041.278.041.41ZM51.277 10.214h-2.6v1.721h2.345v.652h-2.346v1.722h2.601v.667h-3.335V9.547h3.335v.667ZM54.372 14.976h-.734v-4.762h-1.595v-.667h3.925v.667h-1.596v4.762ZM58.808 14.976V9.547h.734v5.43h-.734ZM62.797 14.976h-.734v-4.762h-1.596v-.667h3.925v.667h-1.595v4.762ZM71.823 14.275c-.562.548-1.26.823-2.094.823-.835 0-1.533-.275-2.094-.823a2.705 2.705 0 0 1-.842-2.013c0-.794.28-1.465.842-2.014.56-.548 1.259-.823 2.093-.823.83 0 1.528.276 2.091.827.564.551.846 1.22.846 2.01 0 .793-.281 1.465-.842 2.013Zm-3.646-.455c.422.407.94.61 1.551.61.613 0 1.13-.204 1.552-.61.423-.407.635-.927.635-1.558 0-.632-.212-1.151-.635-1.559-.421-.407-.94-.61-1.552-.61-.612 0-1.129.204-1.551.61-.422.408-.634.927-.634 1.559 0 .631.212 1.15.634 1.558ZM73.695 14.976V9.547h.893l2.776 4.223h.031l-.031-1.046V9.547h.734v5.43h-.766l-2.905-4.43h-.032l.032 1.047v3.382h-.732Z"
			/>
			<defs>
				<linearGradient
					id="b"
					x1={24.361}
					x2={7.92}
					y1={10.933}
					y2={27.858}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#00A0FF" />
					<stop offset={0.007} stopColor="#00A1FF" />
					<stop offset={0.26} stopColor="#00BEFF" />
					<stop offset={0.512} stopColor="#00D2FF" />
					<stop offset={0.76} stopColor="#00DFFF" />
					<stop offset={1} stopColor="#00E3FF" />
				</linearGradient>
				<linearGradient
					id="c"
					x1={36.501}
					x2={12.089}
					y1={22}
					y2={22}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FFE000" />
					<stop offset={0.409} stopColor="#FFBD00" />
					<stop offset={0.775} stopColor="orange" />
					<stop offset={1} stopColor="#FF9C00" />
				</linearGradient>
				<linearGradient
					id="e"
					x1={27.415}
					x2={5.119}
					y1={24.248}
					y2={47.2}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FF3A44" />
					<stop offset={1} stopColor="#C31162" />
				</linearGradient>
				<linearGradient
					id="f"
					x1={9.728}
					x2={19.684}
					y1={2.571}
					y2={12.82}
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#32A071" />
					<stop offset={0.069} stopColor="#2DA771" />
					<stop offset={0.476} stopColor="#15CF74" />
					<stop offset={0.801} stopColor="#06E775" />
					<stop offset={1} stopColor="#00F076" />
				</linearGradient>
				<filter
					id="a"
					width={23.295}
					height={25.208}
					x={12.428}
					y={9.396}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy={-0.795} />
					<feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
					<feBlend in2="shape" result="effect1_innerShadow_5480_14752" />
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy={0.795} />
					<feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
					<feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
					<feBlend
						in2="effect1_innerShadow_5480_14752"
						result="effect2_innerShadow_5480_14752"
					/>
				</filter>
				<filter
					id="d"
					width={16.835}
					height={12.604}
					x={12.895}
					y={22}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy={-0.795} />
					<feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
					<feBlend in2="shape" result="effect1_innerShadow_5480_14752" />
				</filter>
			</defs>
		</svg>
	);
};
