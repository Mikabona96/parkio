'use server';
import { cookies } from 'next/headers';

export const deleteCookies = () => {
	cookies().delete('access_token');
	cookies().delete('refresh_token');
};
