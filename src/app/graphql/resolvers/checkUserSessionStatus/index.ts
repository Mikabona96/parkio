import { cookies } from 'next/headers';
import prisma from '../../../../../db.config';
import { GraphQLError } from 'graphql';
import { getToken, verifyToken } from '@/app/lib';
import { AT_SECRET, RT_SECRET } from '@/constants';
import { User } from '@prisma/client';

export const checkUserSessionStatus = async (_: unknown, __: unknown) => {
	const access_token = cookies().get('access_token');
	const refresh_token = cookies().get('refresh_token');
	const at_verified = await verifyToken(`${access_token?.value}`, AT_SECRET);
	const rt_verified = await verifyToken(`${refresh_token?.value}`, RT_SECRET);

	if (at_verified) {
		const { exp, ...rest } = at_verified;
		return rest;
	}

	if (!at_verified && rt_verified) {
		try {
			const user = await prisma.user.findUnique({
				where: {
					email: `${rt_verified?.email}`,
				},
			});
			const {
				password_hash: ph,
				refresh_token: refr_tok,
				...dataForToken
			} = user as User;

			const newAtToken = await getToken(dataForToken, '15 minutes', AT_SECRET);
			cookies().set('access_token', `${newAtToken}`, {
				expires: new Date(Date.now() + 60 * 60 * 10000 * 0.25), // 15 minutes
				httpOnly: true,
			});
			const { password_hash, refresh_token, ...rest } = user as User;
			return { ...rest };
		} catch (error) {
			throw new GraphQLError(`Something went wromng...`, {
				extensions: {
					statusCode: 500,
					message: 'Something went wrong',
					code: 'SERVER_ERROR',
				},
			});
		}
	}
};
