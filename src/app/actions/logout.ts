'use server';
import { cookies } from 'next/headers';
import prisma from '../../../db.config';

export const logout = async (email: string) => {
	try {
		await prisma.user.update({
			data: {
				refresh_token: null,
			},
			where: {
				email,
			},
		});
		cookies().delete('refresh_token');
		cookies().delete('access_token');
	} catch (error) {}
};
