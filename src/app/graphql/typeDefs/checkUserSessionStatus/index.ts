import { gql } from 'graphql-tag';

export const checkUserSessionStatusTypeDef = gql`
	type CheckUSSResponse {
		id: Int
		email: String
		firstName: String
		lastName: String
		phoneNumber: String
		streetAddress: String
		postalCode: Int
		city: String
	}
	type Query {
		checkUserSessionStatus: CheckUSSResponse
	}
`;
