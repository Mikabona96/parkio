import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export const FirstSection = () => {
	const t = useTranslations('Business-Parking');
	return (
		<section className="flex flex-col sm:px-6 lg:mt-[4.8rem] lg:items-center xl:px-0">
			<div className="flex justify-between overflow-hidden sm:flex-col lg:w-[928px] lg:flex-row xl:w-[100%] xl:pl-[120px]">
				<div className="min-h-[526px] w-full sm:flex sm:flex-col sm:items-center lg:relative lg:items-start">
					<div className="sm:-w-[100%] flex flex-col gap-12 xl:w-[690px]">
						<h1 className="text-[32px] font-bold text-gray-900">
							{t('Business-Parking')}
						</h1>
						<div className="flex flex-col gap-4 lg:w-[580px] xl:w-auto">
							<h4 className="text-xl font-bold">
								{t('Digital-company-parking-title')}
							</h4>
							<p className="text-lg font-normal">
								{t('Digital-company-parking-description')}
							</p>
						</div>
						<div className="flex flex-col gap-4 lg:w-[580px] xl:w-auto">
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
						className="-right-4 top-0 sm:mt-6 sm:h-[320px] sm:w-[320px] lg:absolute lg:mt-0 xl:h-[526px] xl:w-[526px]"
						alt="business-parking-img-1.png"
						src={'/business-parking-img-1.png'}
					/>
				</div>
			</div>
			<div className="flex justify-between overflow-hidden lg:mt-[57px] lg:w-[928px] xl:w-[100%] xl:pr-[120px]">
				<div className="relative flex w-full sm:flex-col-reverse sm:items-center lg:flex-row lg:items-start">
					<Image
						height={526}
						width={526}
						className="-left-4 top-0 sm:mt-6 sm:h-[320px] sm:w-[320px] lg:absolute lg:mt-0  xl:h-[526px] xl:w-[526px]"
						alt="business-parking-img-2.png"
						src={'/business-parking-img-2.png'}
					/>
					<div className="sm:-w-[100%] ml-auto flex flex-col gap-12 sm:mt-6 lg:mt-[130px] xl:w-[690px] ">
						<div className="flex flex-col gap-4 lg:w-[544px] xl:w-auto">
							<h4 className="text-xl font-bold">
								{t('Effortless-Parking-Management-title')}
							</h4>
							<p className="text-lg font-normal">
								{t('Effortless-Parking-Management-description')}
							</p>
						</div>
						<div className="flex flex-col gap-4 lg:w-[580px] xl:w-auto">
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
