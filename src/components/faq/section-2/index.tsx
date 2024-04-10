import { Form } from '@/components/Form';
import { useTranslations } from 'next-intl';
import React from 'react';

export const SecondSection = () => {
	const t = useTranslations('FAQ');
	return (
		<section className="py-[120px]">
			<Form title={t('form-title')} showUrgentMatters />
		</section>
	);
};
