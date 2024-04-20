import { AppStoreButton, GooglePlayButton } from '@/elements';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export const SecondSection = () => {
	const t = useTranslations('Business-Parking');
	const steps = [
		{
			title: t('step-1'),
			description: t('step-1-description'),
		},
		{
			title: t('step-2'),
			description: t('step-2-description'),
		},
		{
			title: t('step-3'),
			description: t('step-3-description'),
		},
		{
			title: t('step-4'),
			description: t('step-4-description'),
		},
	];
	return (
		<section className="flex items-center justify-center bg-[#FEF0E2] py-20 sm:gap-12 sm:px-6 lg:px-0">
			<div className="flex justify-between sm:flex-col-reverse sm:items-center sm:gap-12 lg:w-[928px] lg:flex-row xl:w-[100%] xl:items-start xl:gap-[120px] xl:px-[200px]">
				<div className="flex flex-col">
					<h3 className="text-2xl font-bold text-gray-900">
						Apply for the company account
					</h3>
					{steps.map((step, idx) => (
						<div key={idx} className="mt-[30px] flex flex-col gap-3">
							<Image
								alt="circle.svg"
								src={'/circle.svg'}
								width={28}
								height={28}
							/>
							<h4 className="text-xl font-bold">{step.title}</h4>
							<p className="text-lg font-normal">{step.description}</p>
						</div>
					))}
					<div className="mt-12 flex gap-3">
						<AppStoreButton variant="black" />
						<GooglePlayButton variant="black" />
					</div>
				</div>
				<Image
					width={296}
					height={656}
					alt="business-parking-phone.png"
					className="sm:h-[438px] sm:w-[222px] lg:h-[637px] lg:w-[296px]"
					src={'/business-parking-phone.png'}
				/>
			</div>
		</section>
	);
};
