'use client';
import { Button, DropdownSolutions, Logo, Select } from '@/elements';
import { cn } from '@/tools/utils/cn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface IRootLayoutProps {
	locale: string;
}

export const Header = ({ locale }: Readonly<IRootLayoutProps>) => {
	const t = useTranslations('Header');
	const pathname = usePathname();
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
			href: '#',
		},
	];
	return (
		<header className="fixed top-0 z-[9999] flex w-full justify-center border-b-[1px] border-gray-200 bg-headerBackground px-[120px] py-[16px]">
			<div className="flex w-full max-w-screen-xl justify-between">
				<Link href={'/'}>
					<Logo />
				</Link>
				<nav>
					<ul className="flex list-none gap-6">
						{links.map((link, idx) =>
							idx === 0 ? (
								<li
									key={link.name}
									className="group relative cursor-pointer p-2"
								>
									<Link
										href={link.href}
										className={cn('peer transition-all hover:text-gradient-3', {
											'text-gradient-3': pathname === link.href,
										})}
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
						<li className="w-[108px] cursor-pointer p-2">
							<Select />
						</li>
						<Button>{t('login')}</Button>
					</ul>
				</nav>
			</div>
		</header>
	);
};
