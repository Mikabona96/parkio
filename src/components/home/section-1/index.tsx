import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { AppStoreButton, GooglePlayButton } from '@/elements';

export const FirstSection = () => {
	const t = useTranslations('Home');

	return (
		<section className="md:bg-md-size sm:bg-sm-size sm:bg-sm-position h-[784px] bg-[url('/home-first_section-background.png')] bg-xl-size bg-xl-position bg-no-repeat md:bg-xl-position lg:bg-lg-size xl:bg-xl-size">
			<div
				className={
					'h-full max-h-[316px] w-full max-w-fit sm:mx-auto sm:mt-[406px] sm:pl-6 sm:pr-6 md:ml-[390px] md:mt-[126px] md:pl-0 md:pr-6 lg:ml-[576px] lg:mt-[10.5rem] lg:pr-16 xl:ml-[690px] xl:mt-[15.5rem] xl:pr-0'
				}
			>
				<div className="flex flex-col gap-8 sm:items-center md:items-start">
					<h1 className="font-bold text-gray-900 sm:text-[32px] lg:text-5xl xl:text-6xl">
						{t('title')}
					</h1>
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
		</section>
	);
};
