'use client';
import { TrashIcon } from '@/elements';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React, { useState } from 'react';

interface IRootLayoutProps {
	children: React.ReactNode;
}

function AccountLayout({ children }: Readonly<IRootLayoutProps>) {
	const t = useTranslations('Account');
	const path = usePathname();
	const { locale } = useParams();

	const menuItems = [
		{
			title: t('menu-items-1'),
			href: `/${locale}/account/profile`,
		},
		{
			title: t('menu-items-2'),
			href: `/${locale}/account/parkings-reciepts`,
		},
		{
			title: t('menu-items-3'),
			href: `/${locale}/account/parkings-subscriptions`,
		},
		{
			title: t('menu-items-4'),
			href: `/${locale}/account/invoices`,
		},
	];
	return (
		<main className="mt-[4.8rem] flex flex-col px-[120px] pt-20">
			<h1 className="text-[32px] font-bold text-gray-900">Settings</h1>
			<div className="mt-6 flex gap-[108px]">
				<div className="flex w-[290px] flex-col gap-2">
					<ul className="w-full max-w-[282px] list-none">
						{menuItems.map((item, idx) => (
							<Link key={idx} href={item.href}>
								<li
									className={`relative flex cursor-pointer items-center p-4 transition-all hover:text-gradient-3 ${item.href === path && 'text-gradient-3 before:absolute before:left-0 before:top-[50%] before:h-6 before:w-1 before:translate-y-[-50%] before:rounded-lg before:bg-gradient-3 before:content-[""]'}`}
								>
									{item.title}
								</li>
							</Link>
						))}
					</ul>
					<div className="mt-2 h-[1px] w-full bg-gray-300"></div>
					<div className="flex-flex-col mt-6">
						<h3>{t('My-vehicles')}</h3>
						<div className="mt-4 flex w-full items-center rounded-[4px] bg-gray-100 px-3 py-4">
							<Image
								width={24}
								height={24}
								className="mr-2"
								alt="car-icon.svg"
								src={'/car-icon.svg'}
							/>
							71664
							<span className="ml-auto cursor-pointer">
								<TrashIcon color="#FFA1A3" />
							</span>
						</div>
						<form className="mt-3 flex flex-col gap-2">
							<input
								placeholder={t('input')}
								type="text"
								className="form-input"
							/>
							<button className="rounded-lg border-[1px] border-gray-300 py-[10px] shadow-sm shadow-gray-300 transition-all duration-300 hover:border-gradient-3 hover:bg-gradient-3 hover:text-[#fff]">
								{t('button')}
							</button>
						</form>
					</div>
				</div>
				<main className="mt-4 w-full">{children}</main>
			</div>
		</main>
	);
}

export default AccountLayout;