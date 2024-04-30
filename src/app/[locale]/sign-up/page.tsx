import { FirstSection } from '@/components/sign-up';
import React from 'react';

interface IParams {
	params: {
		locale: string;
	};
}

const SignUp = ({ params: { locale } }: IParams) => {
	return (
		<main>
			<FirstSection locale={locale} />
		</main>
	);
};

export default SignUp;
