import { gql } from 'graphql-tag';

export const signupTypeDef = gql`
	input SignupFields {
		name: String
		lastname: String
		email: String
		phone: Float
		street: String
		code: Int
		city: String
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
		signup(fieldsValue: SignupFields): Response
	}
`;
