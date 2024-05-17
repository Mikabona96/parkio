import { SigninFields } from '@/app/definitions';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { SIGN_IN } from '@/app/graphql/mutations/sign-in';
import { CHECK_USER_SESSION_STATUS } from '@/app/graphql/queries/checkUserSessionStatus';

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
	const router = useRouter();

	useEffect(() => {
		if (validatedData) {
			signin({
				variables: {
					fieldsValue: validatedData,
				},
				refetchQueries: [{ query: CHECK_USER_SESSION_STATUS }],
			});
		}
	}, [validatedData]);

	if (data) {
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
