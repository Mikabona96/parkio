import { Button } from '@/elements';
import { useTranslations } from 'next-intl';
import React from 'react';

interface IProps {
	title?: string;
	description?: string;
	showUrgentMatters?: boolean;
	subtitle?: string;
}
export const Form = ({
	description,
	showUrgentMatters,
	title,
	subtitle,
}: IProps) => {
	const t = useTranslations('Form');
	return (
		<div className="flex w-full flex-col items-center">
			{title && <h3 className="text-xl font-normal text-gray-700">{title}</h3>}
			<h4 className="text-[32px] font-bold text-gray-900">
				{subtitle ? subtitle : t('form-subtitle')}
			</h4>
			{description && (
				<p className="mt-4 w-full max-w-[605px] text-center text-gray-500">
					{description}
				</p>
			)}
			<form
				action=""
				className="mt-6 flex h-[462px] w-full max-w-[389px] flex-col gap-4"
			>
				<input
					placeholder={t('form-full-name')}
					type="text"
					className="form-input h-11"
				/>
				<input placeholder="Email" type="email" className="form-input h-11" />
				<input
					placeholder={t('form-phone-number')}
					type="tel"
					className="form-input h-11 "
				/>
				<input
					placeholder={t('form-subject')}
					type="text"
					className="form-input h-11 "
				/>
				<textarea
					name="message"
					placeholder={t('form-message')}
					className={'form-input h-[154px] resize-none'}
				></textarea>
				<Button className="ml-auto">{t('form-button')}</Button>
			</form>
			{showUrgentMatters && (
				<p className="mt-6 text-gray-500">
					{t('form-urgent-matters', { tel: '+123-456-7890' })}
				</p>
			)}
		</div>
	);
};
