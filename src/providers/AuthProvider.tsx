'use client';
import { checkUserSessionStatus } from '@/app/actions';
import { ReturnedUser } from '@/app/definitions';
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

	useEffect(() => {
		const loadUser = async () => {
			const email = await checkUserSessionStatus();
			email && setUser({ email: `${email}` });
		};
		loadUser();
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
