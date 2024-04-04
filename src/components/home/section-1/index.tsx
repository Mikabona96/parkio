import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@/tools/utils/cn';
import Link from 'next/link';
import React from 'react';
import { AppStoreButton, GooglePlayButton } from '@/elements';

export const FirstSection = () => {
	const t = useTranslations('Home');
	const locale = useLocale();

	return (
		<div className="home-first-section-bg h-[784px] bg-[url('/home-first_section-background.png')] bg-no-repeat">
			<div
				className={cn(
					'ml-auto mr-[16.5rem] mt-[15.5rem] h-full max-h-[316px] w-full max-w-[497px]',
					'',
					{
						'max-w-[570px]': locale !== 'en-US',
						'mr-[11.5rem]': locale !== 'en-US',
					},
				)}
			>
				<div className="flex flex-col gap-8">
					<h1 className="text-6xl font-bold text-gray-900">{t('title')}</h1>
					<ul className="flex flex-col gap-4 text-[20px]">
						<li className="bg-[url('/circle.svg')] bg-left bg-no-repeat pl-6">
							{t('s-1-ul-li-1')}
						</li>
						<li className="bg-[url('/circle.svg')] bg-left bg-no-repeat pl-6">
							{t('s-1-ul-li-2')}
						</li>
						<li className="bg-[url('/circle.svg')] bg-left bg-no-repeat pl-6">
							{t('s-1-ul-li-3')}
						</li>
					</ul>
					<div className="h-[1px] w-full max-w-[420px] rounded-sm bg-gradient-to-l from-gradient-1 from-10% via-gradient-2  via-[37.36%] to-gradient-3 to-[80%]"></div>
					<div className="flex gap-4">
						<Link href={'#'}>
							<AppStoreButton variant={'black'} />
						</Link>
						<Link href={'#'}>
							<GooglePlayButton variant="black" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
