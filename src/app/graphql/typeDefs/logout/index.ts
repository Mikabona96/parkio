import { gql } from 'graphql-tag';

export const logoutTypeDef = gql`
	type Mutation {
		logout(email: String): Boolean
	}
`;
