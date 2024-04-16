export const ProfileIcon = ({ active }: { active: boolean }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
		<path fill="none" d="M0 0h24v24H0z" data-name="Icon [Frame Background]" />
		<path
			fill="none"
			stroke={active ? '#c777e3' : '#667085'}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M7.5 7a4 4 0 1 1 4 4 4 4 0 0 1-4-4ZM4 21a9.976 9.976 0 0 1 .3-3.531A4 4 0 0 1 6.469 15.3 9.976 9.976 0 0 1 10 15h3a9.976 9.976 0 0 1 3.531.3 4 4 0 0 1 2.169 2.169A9.976 9.976 0 0 1 19 21"
			data-name="Icon"
		/>
	</svg>
);
