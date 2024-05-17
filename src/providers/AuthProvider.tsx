'use client';
import { ReturnedUser } from '@/app/definitions';
import { CHECK_USER_SESSION_STATUS } from '@/app/graphql/queries/checkUserSessionStatus';
import { ApolloError, useQuery } from '@apollo/client';
import { FC, createContext } from 'react';

type ContextType = {
	user?: ReturnedUser;
	loading?: boolean;
	error?: ApolloError;
};

export const AuthContext = createContext<ContextType | null>(null);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const { loading, error, data } = useQuery<{
		checkUserSessionStatus: ReturnedUser;
	}>(CHECK_USER_SESSION_STATUS);

	return (
		<AuthContext.Provider
			value={{
				user: data?.checkUserSessionStatus || undefined,
				loading,
				error,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
