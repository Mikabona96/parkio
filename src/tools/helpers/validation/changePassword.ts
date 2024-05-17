import { PasswordFields } from '@/app/definitions';
import { z } from 'zod';

export type State = {
	errors?: {
		password?: string[];
		confirmpassword?: string[];
	};
	message?: string | null;
	validatedData?: PasswordFields;
};

const SignupUserFields = z
	.object({
		password: z.string().min(5, 'Password should be at least of 5 symbols.'),
		confirmpassword: z.string().min(5, ''),
	})
	.refine((data) => data.password === data.confirmpassword, {
		message: 'Passwords should match.',
		path: ['confirmpassword'], // path of error
	});

export async function validatePasswordFields(
	prevState: State | void,
	formData: FormData,
) {
	const fieldsToValidate = SignupUserFields.safeParse({
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
		password: formData.get('password'),
		confirmpassword: formData.get('confirmpassword'),
	});

	return { validatedData: signupFieldsValidated };
}
