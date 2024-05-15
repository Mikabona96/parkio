import { z } from 'zod';

export type AddVehicleState = {
	errors?: {
		vehicle?: string[];
	};
	message?: string | null;
	validatedData?: { vehicle?: string };
};

const AddVehicleField = z.object({
	vehicle: z.string().min(4, 'Vehicle number should be at least of 4 symbols'),
	vehicleType: z.string({ message: 'Please select vehicle type...' }),
});

export async function addVehicle(
	prevState: AddVehicleState | void,
	formData: FormData,
) {
	const fieldsToValidate = AddVehicleField.safeParse({
		vehicle: formData.get('vehicle'),
		vehicleType: formData.get('vehicleType'),
	});

	if (!fieldsToValidate.success) {
		return {
			errors: fieldsToValidate.error.flatten().fieldErrors,
			message: 'Fields validation not success !',
		};
	}

	const vehicleToCheck = AddVehicleField.parse({
		vehicle: formData.get('vehicle'),
		vehicleType: formData.get('vehicleType'),
	});

	return { validatedData: vehicleToCheck };
}
