import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { Form } from '../Form';

export const FirstSection = () => {
	const t = useTranslations('Contact-us');
	return (
		<section className="flex gap-12 sm:flex-col lg:flex-row">
			<div className="flex flex-col">
				<div className="flex flex-col gap-4">
					<h1 className="text-[32px] font-bold text-gray-900">{t('title')}</h1>
					<p>{t('description')}</p>
				</div>
				<div className="my-6 h-[2px] w-full bg-gradient-1"></div>
				<div className="flex flex-col">
					<h4 className="mb-3">{t('customer-support')}</h4>
					<p className="flex gap-2">
						<Image width={24} height={24} src={'/mail.svg'} alt="mail.svg" />
						{t('email', { email: 'support@yourcompany.com' })}
					</p>
					<p className="mt-4 flex gap-2">
						<Image width={24} height={24} src={'/tel.svg'} alt="tel.svg" />
						{t('phone', { tel: '+123-456-7890' })}
					</p>
				</div>
			</div>
			<div className="justidy-center flex items-center rounded-lg bg-gray-100 py-12 sm:px-6 lg:w-[605px]">
				<Form subtitle={t('form-title')} />
			</div>
		</section>
	);
};
