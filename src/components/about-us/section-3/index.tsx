import { AppStoreButton, GooglePlayButton } from '@/elements';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export const ThirdSection = () => {
	const t = useTranslations('About-us');
	return (
		<section className="relative bg-background px-[288px] py-[120px]">
			<div className="flex flex-col items-center justify-center gap-12">
				<div className="flex w-full max-w-[860px] flex-col items-center text-center">
					<h3 className="text-[32px] font-bold text-gray-900">
						{t('s-3-title')}
					</h3>
					<p className="mt-4">{t('s-3-description')}</p>
				</div>
				<div className="flex gap-4">
					<AppStoreButton variant="black" />
					<GooglePlayButton variant="black" />
				</div>
			</div>
			<Image
				className="absolute bottom-0 left-0 !w-full"
				height={0}
				width={0}
				style={{ width: 'auto', height: 'auto' }}
				alt="line.svg"
				src={'/line.svg'}
			/>
		</section>
	);
};
