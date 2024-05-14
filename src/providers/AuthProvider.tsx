'use client';
import { ReturnedUser } from '@/app/definitions';
import { CHECK_USER_SESSION_STATUS } from '@/app/graphql/queries/checkUserSessionStatus';
import { useLazyQuery, useQuery } from '@apollo/client';
import {
	Dispatch,
	FC,
	SetStateAction,
	createContext,
	useEffect,
	useState,
} from 'react';

type ContextType = {
	user: ReturnedUser | null;
	setUser: Dispatch<SetStateAction<ReturnedUser | null>>;
};

export const AuthContext = createContext<ContextType | null>(null);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<null | ReturnedUser>(null);
	const { loading, error, data } = useQuery<{
		checkUserSessionStatus: ReturnedUser;
	}>(CHECK_USER_SESSION_STATUS);

	useEffect(() => {
		if (data && !error) {
			setUser(data?.checkUserSessionStatus);
		}
	}, [data, error]);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
