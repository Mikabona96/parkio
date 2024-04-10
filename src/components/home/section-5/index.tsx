import { Form } from '@/components/Form';
import { useTranslations } from 'next-intl';

export const FifthSection = () => {
	const t = useTranslations('Home');
	return (
		<section className="mb-[120px]">
			<Form
				showUrgentMatters
				description={t('form-description')}
				title={t('form-title')}
			/>
		</section>
	);
};
