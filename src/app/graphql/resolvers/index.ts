import { signup } from './sign-up';
import { signin } from './sign-in';
import { logout } from './logout';
import { checkUserSessionStatus } from './checkUserSessionStatus';
import { addVehicle } from './addVehicle';
import { getVehicles } from './getVehicles';
import { removeVehicle } from './removeVehicle';
import { changeProfile } from './changeProfile';
import { changePassword } from './changePassword';

export const resolvers = {
	Query: {
		hello: () => 'Hello world!',
		checkUserSessionStatus,
		logout,
		getVehicles,
	},
	Mutation: {
		signup,
		signin,
		addVehicle,
		removeVehicle,
		changeProfile,
		changePassword,
	},
};
