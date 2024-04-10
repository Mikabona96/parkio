import {
	FirstSection,
	SecondSection,
	ThirdSection,
} from '@/components/about-us';
import React from 'react';

const AboutUs = () => {
	return (
		<main className="mt-[4.8rem] flex w-full flex-col gap-[120px]">
			<FirstSection />
			<SecondSection />
			<ThirdSection />
		</main>
	);
};
export default AboutUs;
