import { gql } from 'graphql-tag';

export const checkUserSessionStatusTypeDef = gql`
	type Query {
		checkUserSessionStatus: String
	}
`;
