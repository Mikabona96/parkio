import { signup } from './sign-up';
import { signin } from './sign-in';
import { logout } from './logout';
import { checkUserSessionStatus } from './checkUserSessionStatus';
import { addVehicle } from './addVehicle';

export const resolvers = {
	Query: {
		hello: () => 'Hello world!',
		checkUserSessionStatus,
		logout,
	},
	Mutation: {
		signup,
		signin,
		addVehicle,
	},
};
