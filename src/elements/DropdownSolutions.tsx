import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

export const DropdownSolutions = () => {
	const t = useTranslations('Header');
	const locale = useLocale();
	const column1 = [
		{
			title: t('For-those-who-park'),
			href: '#',
		},
		{
			title: t('How-PARKIO-app-works'),
			href: `/${locale}/how-it-works`,
		},
		{
			title: t('Short-time-parking'),
			href: '#',
		},
		{
			title: t('Digital-permit'),
			href: '#',
		},
		{
			title: t('Business-parking'),
			href: '#',
		},
		{
			title: t('Family-account'),
			href: '#',
		},
		{
			title: t('Guest-parking'),
			href: '#',
		},
		{
			title: t("Resident's-parking"),
			href: '#',
		},
		{
			title: t('SMS-parking'),
			href: '#',
		},
	];
	const column2 = [
		{
			title: t('For-those-who-own-parking-spaces'),
			href: '#',
		},
		{
			title: t('Parking-for-municipalities-and-property-owners'),
			href: '#',
		},
	];
	return (
		<div
			className={clsx(
				'mt-9 flex h-[458px] w-[608px] gap-8 rounded-lg border-[1px] border-gray-200 bg-[#fff] p-4 shadow-select',
				{
					'h-[480px]': locale === 'sv-SE',
				},
			)}
		>
			<ul className="flex flex-col gap-2">
				{column1.map((item, idx) => {
					return (
						<li
							className={clsx('cursor-pointer p-2 hover:text-gradient-3', {
								'text-gray-500': idx === 0,
							})}
							key={item.title}
						>
							<Link href={item.href}>{item.title}</Link>
						</li>
					);
				})}
			</ul>
			<ul className="flex flex-col gap-2">
				{column2.map((item, idx) => {
					return (
						<li
							className={clsx('cursor-pointer p-2 hover:text-gradient-3', {
								'text-gray-500': idx === 0,
							})}
							key={item.title}
						>
							{item.title}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
