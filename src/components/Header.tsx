'use client';
import {
	Button,
	ChevronIcon,
	DropdownSolutions,
	Logo,
	ProfileMenu,
	Select,
} from '@/elements';
import { AuthContext } from '@/providers/AuthProvider';
import { cn } from '@/tools/utils/cn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

interface IRootLayoutProps {
	locale: string;
}

export const Header = ({ locale }: Readonly<IRootLayoutProps>) => {
	const t = useTranslations('Header');
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);
	const [headerLoaded, setHeaderLoaded] = useState(false);
	const pathname = usePathname();
	const auth = useContext(AuthContext);
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
						'z-[99999] flex max-w-screen-xl bg-[#ffffff] sm:absolute sm:left-[-500px] sm:top-14 sm:h-[100vh] sm:w-[300px] sm:flex-col sm:items-start sm:overflow-y-scroll sm:border-r-[1px] sm:border-gray-300 sm:px-6 sm:py-4 sm:transition-all sm:duration-500 lg:static lg:ml-auto lg:h-auto lg:w-fit lg:flex-row lg:items-center lg:justify-between lg:overflow-y-visible lg:border-none lg:px-0 lg:py-0 lg:transition-none xl:w-fit',
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
										onMouseEnter={() => setHeaderLoaded(true)}
										className="group relative cursor-pointer p-2"
									>
										<div className="flex sm:gap-8 lg:gap-0">
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
											<span
												onClick={() =>
													setIsMobileSubMenuOpen(!isMobileSubMenuOpen)
												}
											>
												<ChevronIcon
													className={cn('rotate-0 transition-all lg:hidden', {
														'-rotate-180': isMobileSubMenuOpen,
													})}
												/>
											</span>
										</div>
										<div
											className={cn(
												'left-0 top-8 cursor-default sm:block lg:absolute lg:animate-vanish lg:hover:block lg:group-hover:block lg:group-hover:animate-appearence',
												{
													'lg:hidden': !headerLoaded,
													'sm:hidden': !isMobileSubMenuOpen,
													'lg:block': headerLoaded,
												},
											)}
										>
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
					{!auth?.user ? (
						<Link href={`/${locale}/sign-in`}>
							<Button>{t('login')}</Button>
						</Link>
					) : (
						<ProfileMenu locale={locale} />
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
