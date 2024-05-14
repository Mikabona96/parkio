'use server';
import { cookies } from 'next/headers';

export const deleteCookies = async () => {
	await cookies().delete('access_token');
	await cookies().delete('refresh_token');
};
