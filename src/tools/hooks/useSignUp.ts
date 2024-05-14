import { SignupFields } from '@/app/definitions';
import { useAuthContext } from './useAuthContext';
import { useRouter } from 'next/navigation';
import { SIGN_UP } from '@/app/graphql/mutations/sign-up';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';

type MutationResponseType = {
	signup: {
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

export const useSignUp = (
	validatedData: SignupFields | undefined,
	redirectTo: string,
) => {
	const [signup, { data, loading, error }] = useMutation<MutationResponseType>(
		SIGN_UP,
		{
			errorPolicy: 'all',
		},
	);
	const auth = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (validatedData) {
			signup({
				variables: {
					fieldsValue: validatedData,
				},
			});
		}
	}, [validatedData]);

	if (data) {
		const user = (data as MutationResponseType)?.signup?.user;
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
