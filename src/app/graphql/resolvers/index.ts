import { signup } from './sign-up';

export const resolvers = {
	Query: {
		hello: () => 'Hello world!',
	},
	Mutation: {
		signup,
	},
};
