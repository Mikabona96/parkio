import { gql } from 'graphql-tag';

export const changeProfileTypeDef = gql`
	input ChangeProfileFields {
		name: String
		lastname: String
		email: String
		userEmail: String
		phone: Float
		street: String
		code: Int
		city: String
	}

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
		access_token: String
		refresh_token: String
		user: ReturnedUser
	}

	type Mutation {
		changeProfile(fieldsValue: ChangeProfileFields): Response
	}
`;
