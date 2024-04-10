import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export const FirstSection = () => {
	const t = useTranslations('Business-Parking');
	return (
		<section className="mt-[4.8rem] flex flex-col">
			<div className="ml-[120px] flex justify-between overflow-hidden">
				<div className="relative min-h-[526px] w-full">
					<div className="flex w-[690px] flex-col gap-12">
						<h1 className="text-[32px] font-bold text-gray-900">
							{t('Business-Parking')}
						</h1>
						<div className="flex flex-col gap-4">
							<h4 className="text-xl font-bold">
								{t('Digital-company-parking-title')}
							</h4>
							<p className="text-lg font-normal">
								{t('Digital-company-parking-description')}
							</p>
						</div>
						<div className="flex flex-col gap-4">
							<h4 className="text-xl font-bold">
								{t('Business-license-title')}
							</h4>
							<p className="text-lg font-normal">
								{t('Business-license-description')}
							</p>
						</div>
					</div>
					<Image
						height={526}
						width={526}
						className="absolute -right-4 top-0 h-[526px] w-[526px]"
						alt="business-parking-img-1.png"
						src={'/business-parking-img-1.png'}
					/>
				</div>
			</div>
			<div className="mr-[120px] mt-[57px] flex justify-between overflow-hidden">
				<div className="relative w-full">
					<Image
						height={526}
						width={526}
						className="absolute -left-4 top-0 h-[526px] w-[526px]"
						alt="business-parking-img-2.png"
						src={'/business-parking-img-2.png'}
					/>
					<div className="ml-auto mt-[130px] flex w-[690px] flex-col gap-12">
						<div className="flex flex-col gap-4">
							<h4 className="text-xl font-bold">
								{t('Effortless-Parking-Management-title')}
							</h4>
							<p className="text-lg font-normal">
								{t('Effortless-Parking-Management-description')}
							</p>
						</div>
						<div className="flex flex-col gap-4">
							<h4 className="text-xl font-bold">
								{t('Effortless-Parking-Management-title')}
							</h4>
							<p className="text-lg font-normal">
								{t('Effortless-Parking-Management-description')}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
