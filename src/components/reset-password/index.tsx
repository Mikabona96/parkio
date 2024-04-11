import { Button } from '@/elements';
import { useTranslations } from 'next-intl';
import React from 'react';

export const FirstSection = () => {
	const t = useTranslations('Reset-password');
	return (
		<section className="flex items-center justify-center py-[120px]">
			<div className="flex w-full max-w-[354px] flex-col text-center">
				<h1 className="text-[32px] font-bold text-gray-900">{t('title')}</h1>
				<h3 className="mt-4">{t('subtitle')}</h3>
				<form action="" className="mt-8 flex flex-col">
					<input
						placeholder={t('password')}
						type="password"
						className="form-input mt-4 h-11"
					/>
					<input
						placeholder={t('confirm-password')}
						type="password"
						className="form-input mt-4 h-11"
					/>
					<Button className="mt-4">{t('button')}</Button>
				</form>
				<div className="mt-4 h-[1px] w-full bg-gray-300"></div>
			</div>
		</section>
	);
};
