import { ReturnedCredentials } from '@/app/definitions';
import { useEffect } from 'react';
import { useAuthContext } from './useAuthContext';
import { useRouter } from 'next/navigation';

type TProps = {
	route: string;
	errorMessage: string;
	redirectTo: string;
	validatedData?:
		| {
				email: string;
				password: string;
		  }
		| undefined;
};

export const useAuth = ({
	validatedData,
	errorMessage,
	route,
	redirectTo,
}: TProps) => {
	const auth = useAuthContext();
	const router = useRouter();
	useEffect(() => {
		if (validatedData) {
			const signinUser = async () => {
				const response = await fetch(route, {
					method: 'POST',
					body: JSON.stringify(validatedData),
				});
				if (!response.ok && response.status === 403) {
					alert(errorMessage);
					return;
				}
				const data: ReturnedCredentials = await response.json();
				auth?.setUser(data.user);
				router.push(redirectTo);
			};
			signinUser();
		}
	}, [validatedData]);
};
