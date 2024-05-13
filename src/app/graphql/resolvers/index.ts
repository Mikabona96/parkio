import { signup } from './sign-up';
import { signin } from './sign-in';

export const resolvers = {
	Query: {
		hello: () => 'Hello world!',
	},
	Mutation: {
		signup,
		signin,
	},
};
