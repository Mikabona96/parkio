import { gql } from 'graphql-tag';

export const signinTypeDef = gql`
	input SigninFields {
		email: String
		password: String
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
		signin(fieldsValue: SigninFields): Response
	}
`;
