import { SignupFields } from '@/app/definitions';
import { z } from 'zod';

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
	validatedData?: SignupFields;
};

const SignupUserFields = z
	.object({
		name: z.string(),
		lastname: z.string(),
		email: z.string().email('Email is not correct.'),
		phone: z.number(),
		street: z.string(),
		code: z.number(),
		city: z.string(),
		password: z.string().min(5, 'Password should be at least of 5 symbols.'),
		confirmpassword: z.string().min(5, ''),
	})
	.refine((data) => data.password === data.confirmpassword, {
		message: 'Passwords should match.',
		path: ['confirmpassword'], // path of error
	});

export async function validateSignupFields(
	prevState: State | void,
	formData: FormData,
) {
	const fieldsToValidate = SignupUserFields.safeParse({
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

	if (!fieldsToValidate.success) {
		return {
			errors: fieldsToValidate.error.flatten().fieldErrors,
			message: 'Fields validation not success !',
		};
	}

	const signupFieldsValidated = SignupUserFields.parse({
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

	return { validatedData: signupFieldsValidated };
}
