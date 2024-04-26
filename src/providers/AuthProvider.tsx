'use client';
import { ReturnedUser } from '@/app/definitions';
import { Dispatch, FC, SetStateAction, createContext, useState } from 'react';

type ContextType = {
	user: ReturnedUser | null;
	setUser: Dispatch<SetStateAction<ReturnedUser | null>>;
};

export const AuthContext = createContext<ContextType | null>(null);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<null | ReturnedUser>(null);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
