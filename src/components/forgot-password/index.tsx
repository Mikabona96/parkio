import { Button } from '@/elements';
import { useTranslations } from 'next-intl';
import React from 'react';

export const FirstSection = () => {
	const t = useTranslations('Forgot-password');
	return (
		<section className="flex items-center justify-center py-[120px]">
			<div className="flex flex-col text-center">
				<h1 className="text-[32px] font-bold text-gray-900">{t('title')}</h1>
				<h3 className="mt-4">{t('subtitle')}</h3>
				<form action="" className="mt-8 flex flex-col">
					<input placeholder="Email" type="email" className="form-input h-11" />
					<Button className="mt-4">{t('button')}</Button>
				</form>
				<div className="mt-4 h-[1px] w-full bg-gray-300"></div>
			</div>
		</section>
	);
};
