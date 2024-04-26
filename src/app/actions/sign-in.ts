'use server';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import prisma from '../../../db.config';
import { cookies } from 'next/headers';
import { User } from '@prisma/client';

export type SignInState = {
	errors?: {
		email?: string[];
		password?: string[];
	};
	message?: string | null;
};

const getTokens = async (name: string, email: string) => {
	const [access_token, refresh_token] = await Promise.all([
		jwt.sign({ name, email }, `${process.env.AT_SECRET}`, {
			expiresIn: 60 * 15,
		}),
		jwt.sign({ email }, `${process.env.RT_SECRET}`, {
			expiresIn: '7d',
		}),
	]);
	return { access_token, refresh_token };
};

const SignInUser = z.object({
	email: z.string().email('Email is not correct.'),
	password: z.string().min(5, 'Password should be at least of 5 symbols.'),
});

export async function signin(
	prevState: SignInState | void,
	formData: FormData,
) {
	const validatedFields = SignInUser.safeParse({
		email: formData.get('email'),
		password: formData.get('password'),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Fields validation not success !',
		};
	}
	const userToCheck = SignInUser.parse({
		email: formData.get('email'),
		password: formData.get('password'),
	});

	try {
		const { refresh_token, password_hash, ...rest } =
			(await prisma.user.findUnique({
				where: {
					email: userToCheck.email,
				},
			})) as User;

		if (!password_hash) throw new Error();

		const passwordsMatch = await bcrypt.compare(
			userToCheck.password,
			password_hash,
		);

		if (!passwordsMatch) {
			return {
				message: 'Wrong password or email !',
			};
		}

		const tokens = await getTokens(rest.firstName, rest.email);
		cookies().set('refresh_token', `${tokens.refresh_token}`, {
			expires: new Date(Date.now() + 604800000),
			httpOnly: true,
		});
		cookies().set('access_token', `${tokens.access_token}`, {
			expires: new Date(Date.now() + 900000),
			httpOnly: true,
		});
		return {
			access_token: tokens.access_token,
			refresh_token: tokens.refresh_token,
			user: { ...rest },
		};
	} catch (error) {
		return {
			message: 'Something went wrong !',
		};
	}
}
