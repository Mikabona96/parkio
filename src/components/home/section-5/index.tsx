import { Button } from '@/elements';
import { useTranslations } from 'next-intl';

export const FifthSection = () => {
	const t = useTranslations('Home');
	return (
		<section className="mb-[120px] flex w-full flex-col items-center">
			<h3 className="text-xl font-normal text-gray-700">{t('s-5-title')}</h3>
			<h4 className="text-[32px] font-bold text-gray-900">
				{t('s-5-subtitle')}
			</h4>
			<p className="mt-4 w-full max-w-[605px] text-center text-gray-500">
				{t('s-5-description')}
			</p>
			<form
				action=""
				className="mt-6 flex h-[462px] w-full max-w-[389px] flex-col gap-4"
			>
				<input
					placeholder={t('s-5-full-name')}
					type="text"
					className="form-input h-11"
				/>
				<input placeholder="Email" type="email" className="form-input h-11" />
				<input
					placeholder={t('s-5-phone-number')}
					type="tel"
					className="form-input h-11 "
				/>
				<input
					placeholder={t('s-5-subject')}
					type="text"
					className="form-input h-11 "
				/>
				<textarea
					name="message"
					placeholder={t('s-5-message')}
					className={'form-input h-[154px] resize-none'}
				></textarea>
				<Button className="ml-auto">{t('s-5-button')}</Button>
			</form>
			<p className="mt-6 text-gray-500">
				{t('s-5-urgent-matters', { tel: '+123-456-7890' })}
			</p>
		</section>
	);
};
