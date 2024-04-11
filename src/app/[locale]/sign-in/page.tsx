import { FirstSection } from '@/components/sign-in';
import React from 'react';

interface IParams {
	params: {
		locale: string;
	};
}

const SignIn = ({ params: { locale } }: IParams) => {
	return (
		<main>
			<FirstSection locale={locale} />
		</main>
	);
};

export default SignIn;
