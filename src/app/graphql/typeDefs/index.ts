import { gql } from 'graphql-tag';
import { signupTypeDef } from './sign-up';
import { signinTypeDef } from './sign-in';
import { logoutTypeDef } from './logout';
import { checkUserSessionStatusTypeDef } from './checkUserSessionStatus';

export const typeDefs = gql`
	type Query {
		hello: String
	}
	${signupTypeDef}
	${signinTypeDef}
	${logoutTypeDef}
	${checkUserSessionStatusTypeDef}
`;
