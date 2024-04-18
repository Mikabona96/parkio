import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export const ParkingSteps = () => {
	const t = useTranslations('Home');
	return (
		<div className="flex w-full flex-col gap-10 sm:px-6 sm:pt-6 lg:px-[120px] lg:pt-12">
			<h3 className="text-center text-[32px] font-bold">
				{t('park-step-title')}
			</h3>
			<div className="flex h-fit justify-center gap-16 sm:flex-col sm:items-center md:flex-row md:items-start">
				<div className="flex flex-col items-center gap-4 md:w-[200px] lg:w-auto">
					<Image
						width={0}
						height={0}
						className="h-[94px] w-[94px]"
						src={'/park-step-1.svg'}
						alt="park-step-1.svg"
					/>
					<p className="text-center lg:w-[290px]">{t('park-step-1')}</p>
				</div>
				<div className="flex flex-col items-center gap-4 md:w-[200px] lg:w-auto">
					<Image
						width={0}
						height={0}
						className="h-[94px] w-[94px]"
						src={'/park-step-2.svg'}
						alt="park-step-2.svg"
					/>
					<p className="text-center lg:w-[290px]">{t('park-step-2')}</p>
				</div>
				<div className="flex flex-col items-center gap-4 md:w-[200px] lg:w-auto">
					<Image
						width={0}
						height={0}
						className="h-[94px] w-[94px]"
						src={'/park-step-3.svg'}
						alt="park-step-3.svg"
					/>
					<p className="text-center lg:w-[290px]">{t('park-step-3')}</p>
				</div>
			</div>
		</div>
	);
};
