import { gql } from 'graphql-tag';
import { signupTypeDef } from './sign-up';
import { signinTypeDef } from './sign-in';

export const typeDefs = gql`
	type Query {
		hello: String
	}
	${signupTypeDef}
	${signinTypeDef}
`;
