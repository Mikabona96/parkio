import { cookies } from 'next/headers';
import { GraphQLError } from 'graphql';

import prisma from '../../../../../db.config';
import { getTokens, hashPassword } from '@/app/lib';

import { PasswordFields } from '@/app/definitions';

export const changePassword = async (
	_: unknown,
	args: { fieldsValue: PasswordFields & { userEmail: string } },
) => {
	const data = args.fieldsValue;

	const existedUser = await prisma.user.findUnique({
		where: {
			email: data.userEmail,
		},
	});

	if (!existedUser) {
		throw new GraphQLError(
			`User with email:${data.userEmail} is not exist...`,
			{
				extensions: {
					statusCode: 401,
					message: 'Unauthorized',
					code: "USER'S_EMAIL_ALREADY_EXISTS",
				},
			},
		);
	}

	const hash = await hashPassword(data.password);
	try {
		const { password_hash, refresh_token, ...rest } = await prisma.user.update({
			data: {
				password_hash: hash,
			},
			where: {
				email: data.userEmail,
			},
		});
		const tokens = await getTokens(rest);
		await prisma.user.update({
			where: {
				id: rest.id,
			},
			data: {
				refresh_token: tokens.refresh_token,
			},
		});

		cookies().set('refresh_token', `${tokens.refresh_token}`, {
			expires: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000), // 7 days
			httpOnly: true,
		});
		cookies().set('access_token', `${tokens.access_token}`, {
			expires: new Date(Date.now() + 60 * 60 * 10000 * 0.25), // 15 minutes
			httpOnly: true,
		});

		return {
			access_token: tokens.access_token,
			refresh_token: tokens.refresh_token,
			user: { ...rest },
		};
	} catch (error) {
		throw new GraphQLError(`Error changing user's password...`, {
			extensions: {
				statusCode: 401,
				message: 'Unauthorized',
				code: 'ERROR_REGISTRATION_USER',
			},
		});
	}
};
