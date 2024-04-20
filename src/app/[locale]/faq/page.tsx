import { FirstSection, SecondSection } from '@/components/faq';
import React from 'react';

export default function FAQ() {
	return (
		<main className=" flex flex-col sm:mt-[5rem] md:mt-[7rem] lg:mt-[10rem]">
			<FirstSection />
			<SecondSection />
		</main>
	);
}
