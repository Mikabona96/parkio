import { Button } from '@/elements';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export const ThirdSection = () => {
	const t = useTranslations('PFMAPO');
	return (
		<section className="sm:px-6 lg:px-12">
			<div className="relative flex items-center overflow-hidden sm:flex-col sm:gap-12 lg:h-[552px] lg:flex-row lg:gap-0">
				<Image
					className="sm:h-[327px] sm:w-[327px] lg:absolute lg:-left-5 lg:top-[50%] lg:translate-y-[-50%] xl:-left-10 xl:h-[552px] xl:w-[552px]"
					width={552}
					height={552}
					src={'/parking-municipalities-2.png'}
					alt="parking-municipalities-2.png"
				/>
				<div className="flex w-full flex-col sm:max-w-[100%] md:max-w-[520px] lg:ml-auto xl:max-w-[730px]">
					<h3 className="text-[32px] font-bold text-gray-900">
						{t('s-3-title')}
					</h3>
					<p className="mt-4">{t('s-3-description')}</p>
					<Button className="mt-12 w-fit">{t('button')}</Button>
				</div>
			</div>
		</section>
	);
};
