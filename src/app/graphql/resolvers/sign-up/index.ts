import { cookies } from 'next/headers';
import { GraphQLError } from 'graphql';

import prisma from '../../../../../db.config';
import { getTokens, hashPassword } from '@/app/lib';

import { SignupFields } from '@/app/definitions';

export const signup = async (
	_: unknown,
	args: { fieldsValue: SignupFields },
) => {
	const data = args.fieldsValue;
	const hash = await hashPassword(data.password);
	const tokens = await getTokens(data.name, data.email);

	const existedUser = await prisma.user.findUnique({
		where: {
			email: data.email,
		},
	});
	if (existedUser) {
		throw new GraphQLError(
			`User with email:${data.email} is already exist...`,
			{
				extensions: {
					statusCode: 401,
					message: 'Unauthorized',
					code: "USER'S_EMAIL_ALREADY_EXISTS",
				},
			},
		);
	}
	try {
		const { password_hash, refresh_token, ...rest } = await prisma.user.create({
			data: {
				city: data.city,
				email: data.email,
				firstName: data.name,
				lastName: data.lastname,
				phoneNumber: `${data.phone}`,
				postalCode: data.code,
				streetAddress: data.street,
				password_hash: hash,
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
		throw new GraphQLError(`Error registration user...`, {
			extensions: {
				statusCode: 401,
				message: 'Unauthorized',
				code: 'ERROR_REGISTRATION_USER',
			},
		});
	}
};
