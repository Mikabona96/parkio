import { Button } from '@/elements';
import { useTranslations } from 'next-intl';
import React from 'react';

export const FirstSection = () => {
	const t = useTranslations('Account-profile');
	return (
		<section className="flex w-full justify-between sm:flex-col lg:flex-row lg:gap-12 xl:gap-0">
			<div className="form-1 w-full max-w-[384px]">
				<h3 className="text-[20px] text-gray-700">{t('form-1-title')}</h3>
				<form action="" className="mt-5 flex flex-col gap-4">
					<div className="flex gap-4">
						<input
							placeholder={t('first-name')}
							type="text"
							className="form-input h-11"
						/>
						<input
							placeholder={t('last-name')}
							type="text"
							className="form-input h-11"
						/>
					</div>
					<input placeholder="Email" type="email" className="form-input h-11" />
					<input
						placeholder={t('phone')}
						type="tel"
						className="form-input h-11"
					/>
					<input
						placeholder={t('street-address')}
						type="text"
						className="form-input h-11"
					/>
					<div className="flex gap-4">
						<input
							placeholder={t('post-code')}
							type="number"
							className="form-input h-11"
						/>
						<input
							placeholder={t('city')}
							type="text"
							className="form-input h-11"
						/>
					</div>
					<Button className="ml-auto w-fit">{t('form-1-button')}</Button>
				</form>
			</div>
			<div className="form-2 w-full max-w-[315px]">
				<h3 className="text-[20px] text-gray-700">{t('form-1-title')}</h3>
				<form action="" className="mt-5 flex flex-col gap-4">
					<input
						placeholder={t('password')}
						type="password"
						className="form-input h-11"
					/>
					<input
						placeholder={t('confirm-password')}
						type="password"
						className="form-input h-11"
					/>
					<Button className="ml-auto w-fit">{t('form-2-button')}</Button>
				</form>
			</div>
		</section>
	);
};
