import { SigninFields } from '@/app/definitions';
import { useAuthContext } from './useAuthContext';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { SIGN_IN } from '@/app/graphql/mutations/sign-in';

type MutationResponseType = {
	signin: {
		access_token: string;
		refresh_token: string;
		user: {
			id: number;
			email: string;
			firstName: string;
			lastName: string;
			phoneNumber: string;
			streetAddress: string;
			postalCode: number;
			city: string;
		};
	};
};

export const useSignIn = (
	validatedData: SigninFields | undefined,
	redirectTo: string,
) => {
	const [signin, { data, loading, error }] = useMutation<MutationResponseType>(
		SIGN_IN,
		{
			errorPolicy: 'all',
		},
	);
	const auth = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (validatedData) {
			signin({
				variables: {
					fieldsValue: validatedData,
				},
			});
		}
	}, [validatedData]);

	if (data) {
		const user = (data as MutationResponseType)?.signin?.user;
		auth?.setUser(user);
		router.push(redirectTo);
	}

	if (error && error.graphQLErrors[0]) {
		return {
			error: error?.graphQLErrors[0] || undefined,
			loading,
			data: null,
		};
	}

	return {
		loading,
		data,
		error: error?.graphQLErrors[0] || undefined,
	};
};
