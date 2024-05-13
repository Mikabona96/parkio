import { SigninFields } from '@/app/definitions';
import prisma from '../../../../../db.config';
import { GraphQLError } from 'graphql';
import { comparePasswords, getTokens } from '@/app/lib';
import { cookies } from 'next/headers';

export const signin = async (
	_: unknown,
	args: { fieldsValue: SigninFields },
) => {
	const data = args.fieldsValue;
	//+ find user email in db
	const existingUser = await prisma.user.findUnique({
		where: {
			email: data.email,
		},
	});
	if (!existingUser) {
		throw new GraphQLError(`Email or password is not correct...`, {
			extensions: {
				statusCode: 401,
				message: 'Unauthorized',
				code: "USER'S_EMAIL_OR_PASSWORD_IS_INCORRECT",
			},
		});
	}
	//+ Compare passwords
	const passwordsMatch = await comparePasswords(
		`${data.password}`,
		`${existingUser.password_hash}`,
	);

	if (!passwordsMatch) {
		throw new GraphQLError(`Email or password is not correct...`, {
			extensions: {
				statusCode: 401,
				message: 'Unauthorized',
				code: "USER'S_EMAIL_OR_PASSWORD_IS_INCORRECT",
			},
		});
	}

	const tokens = await getTokens(existingUser.firstName, existingUser.email);

	try {
		//+ Update refresh_token in db
		const { password_hash, refresh_token, ...rest } = await prisma.user.update({
			where: {
				email: `${data.email}`,
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
		throw new GraphQLError(`Error registration user...`, {
			extensions: {
				statusCode: 401,
				message: 'Unauthorized',
				code: 'ERROR_REGISTRATION_USER',
			},
		});
	}
};
