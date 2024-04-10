import {
	FirstSection,
	SecondSection,
	ThirdSection,
} from '@/components/how-it-works';
import React from 'react';

export default function HowItWorks() {
	return (
		<section className="flex flex-col gap-[120px]">
			<FirstSection />
			<SecondSection />
			<ThirdSection />
		</section>
	);
}
