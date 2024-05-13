import { gql } from 'graphql-tag';
import { signupTypeDef } from './sign-up';

export const typeDefs = gql`
	type Query {
		hello: String
	}
	${signupTypeDef}
`;
