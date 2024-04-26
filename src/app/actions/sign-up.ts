'use server';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import prisma from '../../../db.config';
import { cookies } from 'next/headers';

export type State = {
	errors?: {
		name?: string[];
		lastname?: string[];
		email?: string[];
		phone?: string[];
		street?: string[];
		code?: string[];
		city?: string[];
		password?: string[];
		confirmpassword?: string[];
	};
	message?: string | null;
};

const CreateUser = z.object({
	name: z.string(),
	lastname: z.string(),
	email: z.string().email('Email is not correct.'),
	phone: z.number(),
	street: z.string(),
	code: z.number(),
	city: z.string(),
	password: z.string().min(5, 'Password should be at least of 5 symbols.'),
	confirmpassword: z.string().min(5, 'passwords should match.'),
});

const hashPassword = async (password: string) => {
	const salt = process.env.SALT_OR_ROUNDS;
	return await bcrypt.hash(password, Number(`${salt}`));
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

export async function signup(
	prevState: State | void | string,
	formData: FormData,
) {
	const validatedFields = CreateUser.safeParse({
		name: formData.get('name'),
		lastname: formData.get('lastname'),
		email: formData.get('email'),
		phone: Number(formData.get('phone')),
		street: formData.get('street'),
		code: Number(formData.get('code')),
		city: formData.get('city'),
		password: formData.get('password'),
		confirmpassword: formData.get('confirmpassword'),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Fields validation not success !',
		};
	}

	const user = CreateUser.parse({
		name: formData.get('name'),
		lastname: formData.get('lastname'),
		email: formData.get('email'),
		phone: Number(formData.get('phone')),
		street: formData.get('street'),
		code: Number(formData.get('code')),
		city: formData.get('city'),
		password: formData.get('password'),
		confirmpassword: formData.get('confirmpassword'),
	});

	if (user.password !== user.confirmpassword) {
		return {
			errors: { confirmpassword: ['Passwords should match'] },
			message: 'Fields validation not success !',
		};
	}

	const hash = await hashPassword(user.password);
	const tokens = await getTokens(user.name, user.email);
	try {
		const { password_hash, refresh_token, ...rest } = await prisma.user.create({
			data: {
				city: user.city,
				email: user.email,
				firstName: user.name,
				lastName: user.lastname,
				phoneNumber: `${user.phone}`,
				postalCode: user.code,
				streetAddress: user.street,
				password_hash: hash,
				refresh_token: tokens.refresh_token,
			},
		});
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
		// if (error instanceof AuthError) {
		// 	switch (error.type) {
		// 		case 'CredentialsSignin':
		// 			return 'Invalid credentials.';
		// 		default:
		// 			return 'Something went wrong.';
		// 	}
		// }
		return {
			message: 'Something went wrong !',
		};
		// throw error;
	}
}
