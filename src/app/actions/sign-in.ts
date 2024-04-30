'use server';
import { z } from 'zod';
import { SigninFields } from '../definitions';

export type SignInState = {
	errors?: {
		email?: string[];
		password?: string[];
	};
	message?: string | null;
	validatedData?: SigninFields;
};

const SignInUserFields = z.object({
	email: z.string().email('Email is not correct.'),
	password: z.string().min(5, 'Password should be at least of 5 symbols.'),
});

export async function signin(
	prevState: SignInState | void,
	formData: FormData,
) {
	const fieldsToValidate = SignInUserFields.safeParse({
		email: formData.get('email'),
		password: formData.get('password'),
	});

	if (!fieldsToValidate.success) {
		return {
			errors: fieldsToValidate.error.flatten().fieldErrors,
			message: 'Fields validation not success !',
		};
	}
	const userToCheck = SignInUserFields.parse({
		email: formData.get('email'),
		password: formData.get('password'),
	});

	return { validatedData: userToCheck };
}
