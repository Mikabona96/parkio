'use client';
import Link from 'next/link';
import React, { FC, useEffect, useRef, useState } from 'react';
import { ExitIcon } from './ExitIcon';
import { ProfileIcon } from './ProfileIcon';
import { ChevronIcon } from './ChevronIcon';
import { cn } from '@/tools/utils/cn';

interface IProps {
	locale: string;
}

export const ProfileMenu: FC<IProps> = ({ locale }) => {
	const ref = useRef<HTMLUListElement>(null);
	const [profileMenu, setProfileMenu] = useState(false);

	useEffect(() => {
		const onClickOutsideHandler = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setProfileMenu(false);
			}
		};
		if (profileMenu) {
			document.addEventListener('click', onClickOutsideHandler);
		} else {
			document.removeEventListener('click', onClickOutsideHandler);
		}

		return () => document.removeEventListener('click', onClickOutsideHandler);
	}, [profileMenu]);

	return (
		<button
			onClick={() => setProfileMenu(!profileMenu)}
			className="relative flex cursor-pointer items-center gap-2"
		>
			<ProfileIcon active={false} />
			<span className="sm:hidden md:inline lg:hidden min-[1130px]:inline">
				john_brown1@gmail.com
			</span>
			<ChevronIcon
				className={cn('rotate-0 transition-all', {
					'-rotate-180': profileMenu,
				})}
			/>
			{profileMenu && (
				<ul
					ref={ref}
					className="absolute right-0 top-12 z-[999999] flex flex-col gap-2 rounded-lg border border-gray-200 bg-[#ffffff] p-4 shadow-select"
				>
					<Link
						href={`/${locale}/account/profile`}
						className="text-left transition-all hover:text-gradient-3"
					>
						<li className="p-[4px]">Profile settings</li>
					</Link>
					<Link
						href={`/${locale}/account/parkings-receipts`}
						className="text-left transition-all hover:text-gradient-3"
					>
						<li className="p-[4px]">Parkings/ Receipts</li>
					</Link>
					<Link
						href={`/${locale}/account/parkings-subscriptions`}
						className="text-left transition-all hover:text-gradient-3"
					>
						<li className="p-[4px]">Subscriptions</li>
					</Link>
					<Link
						href={`/${locale}/account/invoices`}
						className="text-left transition-all hover:text-gradient-3"
					>
						<li className="p-[4px]">Invoices</li>
					</Link>
					<li className="h-[1px] w-full bg-gray-300"></li>
					<li className="group flex items-center justify-center gap-2 p-[4px] transition-all hover:text-[#ff5558]">
						<span>Logout</span>
						<ExitIcon />
					</li>
				</ul>
			)}
		</button>
	);
};
