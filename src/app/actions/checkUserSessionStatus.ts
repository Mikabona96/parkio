'use server';
import { cookies } from 'next/headers';
import { AT_SECRET, RT_SECRET } from '@/constants';
import { getToken, verifyToken } from '../lib';
import prisma from '../../../db.config';

export const checkUserSessionStatus = async () => {
	const access_token = cookies().get('access_token');
	const refresh_token = cookies().get('refresh_token');
	const at_verified = await verifyToken(`${access_token?.value}`, AT_SECRET);
	const rt_verified = await verifyToken(`${refresh_token?.value}`, RT_SECRET);

	if (at_verified?.email) {
		return at_verified?.email;
	}

	if (!at_verified && rt_verified) {
		try {
			const user = await prisma.user.findUnique({
				where: {
					email: `${rt_verified?.email}`,
				},
			});
			const newAtToken = await getToken(
				{ email: user?.email, name: user?.firstName },
				'15 minutes',
				AT_SECRET,
			);
			cookies().set('access_token', `${newAtToken}`, {
				expires: new Date(Date.now() + 60 * 60 * 10000 * 0.25), // 15 minutes
				httpOnly: true,
			});
			return user?.email;
		} catch (error) {
			console.log('Something went wrong in checkUserSessionStatus action');
			return null;
		}
	}
};