import { gql } from 'graphql-tag';

export const removeProfileTypeDef = gql`
	type ReturnedUser {
		id: Int
		email: String
		firstName: String
		lastName: String
		phoneNumber: String
		streetAddress: String
		postalCode: Int
		city: String
	}

	type Response {
		user: ReturnedUser
	}

	type Mutation {
		removeProfile(email: String): Response
	}
`;
