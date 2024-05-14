import { gql } from 'graphql-tag';

export const logoutTypeDef = gql`
	type Query {
		logout(email: String): Boolean
	}
`;
