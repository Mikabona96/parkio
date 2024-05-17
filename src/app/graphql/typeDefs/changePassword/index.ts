import { gql } from 'graphql-tag';

export const changePasswordTypeDef = gql`
	input ChangePasswordFields {
		userEmail: String
		password: String
		confirmpassword: String
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
		changePassword(fieldsValue: ChangePasswordFields): Response
	}
`;
