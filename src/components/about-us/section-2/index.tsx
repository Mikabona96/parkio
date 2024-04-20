import { useTranslations } from 'next-intl';
import React from 'react';

export const SecondSection = () => {
	const t = useTranslations('About-us');
	return (
		<section className="flex flex-col items-center sm:px-6 lg:px-12 xl:px-[120px]">
			<div className="flex w-full items-center justify-center rounded-lg bg-gray-100 sm:px-6 sm:py-10 md:py-20 lg:px-0">
				<div className="flex w-full max-w-[740px] flex-col gap-4 text-center">
					<h3 className="text-[32px] font-bold text-gray-900">
						{t('s-2-title')}
					</h3>
					<p>{t('s-2-description')}</p>
				</div>
			</div>
			<div className="mt-[120px] flex flex-col items-center gap-12">
				<h3 className="text-[32px] font-bold text-gray-900">
					{t('s-2-title-2')}
				</h3>
				<div className="grid-cols-2 grid-rows-2 gap-x-6 gap-y-12 sm:flex sm:flex-col md:grid">
					<div className="relative flex flex-col gap-4 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-gradient-1 before:content-['']">
						<h4 className="text-xl font-bold text-gray-900">
							{t('card-1-title')}
						</h4>
						<p>{t('card-1-description')}</p>
					</div>
					<div className="relative flex flex-col gap-4 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-gradient-1 before:content-['']">
						<h4 className="text-xl font-bold text-gray-900">
							{t('card-2-title')}
						</h4>
						<p>{t('card-2-description')}</p>
					</div>
					<div className="relative flex flex-col gap-4 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-gradient-1 before:content-['']">
						<h4 className="text-xl font-bold text-gray-900">
							{t('card-3-title')}
						</h4>
						<p>{t('card-3-description')}</p>
					</div>
					<div className="relative flex flex-col gap-4 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-gradient-1 before:content-['']">
						<h4 className="text-xl font-bold text-gray-900">
							{t('card-4-title')}
						</h4>
						<p>{t('card-4-description')}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
