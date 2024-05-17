import { signup } from './sign-up';
import { signin } from './sign-in';
import { logout } from './logout';
import { checkUserSessionStatus } from './checkUserSessionStatus';
import { addVehicle } from './addVehicle';
import { getVehicles } from './getVehicles';
import { removeVehicle } from './removeVehicle';
import { changeProfile } from './changeProfile';
import { changePassword } from './changePassword';
import { removeProfile } from './removeProfile';

export const resolvers = {
	Query: {
		hello: () => 'Hello world!',
		checkUserSessionStatus,
		getVehicles,
	},
	Mutation: {
		signup,
		signin,
		addVehicle,
		logout,
		removeVehicle,
		changeProfile,
		changePassword,
		removeProfile,
	},
};
