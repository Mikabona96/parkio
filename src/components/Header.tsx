'use client';
import {
	Button,
	ChevronIcon,
	DropdownSolutions,
	ExitIcon,
	Logo,
	ProfileIcon,
	Select,
} from '@/elements';
import { cn } from '@/tools/utils/cn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface IRootLayoutProps {
	locale: string;
}

export const Header = ({ locale }: Readonly<IRootLayoutProps>) => {
	const t = useTranslations('Header');
	const [profileMenu, setProfileMenu] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	const isLoggedIn = true;
	const links = [
		{
			name: t('solutions'),
			href: `/${locale}/parkio-solutions`,
		},
		{
			name: t('business-parking'),
			href: `/${locale}/business-parking`,
		},
		{
			name: t('faq'),
			href: `/${locale}/faq`,
		},
		{
			name: t('about-us'),
			href: `/${locale}/about-us`,
		},
		{
			name: t('contact-us'),
			href: `/${locale}/contact-us`,
		},
	];

	const openMenuHandler = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		isMenuOpen
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = '');
	}, [isMenuOpen]);

	return (
		<header className="fixed top-0 z-[9999] flex w-full border-b-[1px] border-gray-200 bg-headerBackground sm:h-14 sm:justify-start sm:px-0 sm:py-0 lg:h-auto lg:justify-center lg:px-12 lg:py-[16px] xl:px-[120px]">
			<div className="flex w-full max-w-screen-xl items-center justify-between sm:relative sm:px-6 lg:static lg:px-0">
				<div className="flex items-center gap-6">
					<button
						className="flex h-6 w-6 items-center justify-center lg:hidden"
						onClick={openMenuHandler}
					>
						<div className="relative h-[14px] w-full">
							<span
								className={cn(
									'absolute left-0 top-0 h-[2px] w-full rounded-xl bg-[#161616] transition-all duration-300',
									{
										'translate-[-50%] top-[5px] rotate-45': isMenuOpen,
									},
								)}
							></span>
							<span
								className={cn(
									'absolute left-0 top-[50%] h-[2px] w-full translate-y-[-50%] rounded-xl bg-[#161616] transition-all duration-300',
									{
										hidden: isMenuOpen,
									},
								)}
							></span>
							<span
								className={cn(
									'absolute bottom-0 left-0 h-[2px] w-[60%] rounded-xl bg-[#161616] transition-all duration-300',
									{
										'translate-[-50%] bottom-[50%] w-full -rotate-45':
											isMenuOpen,
									},
								)}
							></span>
						</div>
					</button>
					<Link href={'/'}>
						<Logo />
					</Link>
				</div>
				<div
					className={cn(
						'z-[99999] flex max-w-screen-xl bg-[#ffffff] sm:absolute sm:left-[-500px] sm:top-14 sm:h-[100vh] sm:w-[300px] sm:flex-col sm:items-start sm:overflow-y-scroll sm:border-r-[1px] sm:border-gray-300 sm:px-6 sm:py-4 sm:transition-all sm:duration-500 lg:static lg:ml-auto lg:h-auto lg:w-fit lg:flex-row lg:items-center lg:justify-between lg:overflow-y-auto lg:border-none lg:px-0 lg:py-0 lg:transition-none xl:w-fit',
						{
							'sm:left-0': isMenuOpen,
						},
					)}
				>
					<nav className="sm:mt-7 lg:mt-0">
						<ul className="flex list-none gap-6 sm:flex-col lg:flex-row lg:items-center lg:gap-4">
							{links.map((link, idx) =>
								idx === 0 ? (
									<li
										key={link.name}
										className="group relative cursor-pointer p-2"
									>
										<Link
											href={link.href}
											className={cn(
												'peer transition-all hover:text-gradient-3',
												{
													'text-gradient-3': pathname === link.href,
												},
											)}
										>
											Parkio solutions
										</Link>
										<div className="absolute left-0 top-8 hidden cursor-default hover:block group-hover:block group-hover:animate-appearence peer-focus:block">
											<DropdownSolutions />
										</div>
									</li>
								) : (
									<li className="p-2" key={link.name}>
										<Link
											className={cn('transition-all hover:text-gradient-3', {
												'text-gradient-3': pathname === link.href,
											})}
											href={link.href}
										>
											{link.name}
										</Link>
									</li>
								),
							)}
						</ul>
					</nav>
				</div>
				<div className="flex gap-6">
					<div className="w-[108px] cursor-pointer p-2">
						<Select />
					</div>
					{!isLoggedIn ? (
						<Button>{t('login')}</Button>
					) : (
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
								<ul className="absolute right-0 top-12 z-[999999] flex flex-col gap-2 rounded-lg border border-gray-500 bg-[#ffffff] p-4">
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
									<li className="flex items-center justify-center gap-2 p-[4px] transition-all hover:text-[#ff5558]">
										<span>Logout</span>
										<ExitIcon />
									</li>
								</ul>
							)}
						</button>
					)}
				</div>
			</div>
			{/* //+ Blured area to close mobile header */}
			{isMenuOpen && (
				<div
					onClick={openMenuHandler}
					className="l-0 absolute top-14 z-10 h-[100vh] w-[100vw] bg-[#ffffff4d] backdrop-blur-lg lg:hidden"
				></div>
			)}
			{/* //$ Blured area to close mobile header */}
		</header>
	);
};
