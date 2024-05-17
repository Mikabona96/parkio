import { ProfileFields } from '@/app/definitions';
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
	};
	message?: string | null;
	validatedData?: ProfileFields;
};

const ChangeProfileFields = z.object({
	name: z.string(),
	lastname: z.string(),
	email: z.string().email('Email is not correct.'),
	phone: z.number(),
	street: z.string(),
	code: z.number(),
	city: z.string(),
});

export async function validateChangeProfileFields(
	prevState: State | void,
	formData: FormData,
) {
	const fieldsToValidate = ChangeProfileFields.safeParse({
		name: formData.get('name'),
		lastname: formData.get('lastname'),
		email: formData.get('email'),
		phone: Number(formData.get('phone')),
		street: formData.get('street'),
		code: Number(formData.get('code')),
		city: formData.get('city'),
	});

	if (!fieldsToValidate.success) {
		return {
			errors: fieldsToValidate.error.flatten().fieldErrors,
			message: 'Fields validation not success !',
		};
	}

	const signupFieldsValidated = ChangeProfileFields.parse({
		name: formData.get('name'),
		lastname: formData.get('lastname'),
		email: formData.get('email'),
		phone: Number(formData.get('phone')),
		street: formData.get('street'),
		code: Number(formData.get('code')),
		city: formData.get('city'),
	});

	return { validatedData: signupFieldsValidated };
}
