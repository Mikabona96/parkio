import { cn } from '@/tools/utils/cn';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export const SecondSection = () => {
	const t = useTranslations('Parkio-Solutions');
	const cards = [
		{
			title: t('SMS-Parking-Title'),
			descr: t('SMS-Parking-Description'),
			img: '/parkio-solution-card-1.png',
		},
		{
			title: t('Digital-Permit-Title'),
			descr: t('Digital-Permit-Descsription'),
			img: '/parkio-solution-card-2.png',
		},
		{
			title: t('Family-Account-Title'),
			descr: t('Family-Account-Description'),
			img: '/parkio-solution-card-3.png',
		},
		{
			title: t('Business-Parking-Title'),
			descr: t('Business-Parking-Description'),
			img: '/parkio-solution-card-4.png',
		},
		{
			title: t('Guest-Parking-Title'),
			descr: t('Guest-Parking-Description'),
			img: '/parkio-solution-card-5.png',
		},
		{
			title: t("Resident's-Parking-Title"),
			descr: t("Resident's-Parking-Description"),
			img: '/parkio-solution-card-6.png',
		},
	];
	return (
		<section className="mb-[120px] flex h-[2300px] w-full flex-col gap-[120px] px-[270px]">
			{cards.map((card, idx) => {
				return (
					<div
						className={`flex gap-[120px] ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} w-[900px]`}
						key={idx}
					>
						<div
							className={cn(
								'flex w-full max-w-[620px] flex-col gap-4 text-4xl',
							)}
						>
							<Image
								alt="circle.svg"
								src={'/circle.svg'}
								width={28}
								height={28}
							/>
							<h4 className="text-xl font-bold">{card.title}</h4>
							<p className="text-lg font-normal">{card.descr}</p>
						</div>
						<Image
							className="!h-[216px] !w-[231px]"
							alt={card.img}
							src={card.img}
							style={{ width: '231px', height: '216px' }}
							width={231}
							height={216}
						/>
					</div>
				);
			})}
		</section>
	);
};
