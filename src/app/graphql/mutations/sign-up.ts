import { gql } from '@apollo/client';

export const SIGN_UP = gql`
	mutation SignupMutation($fieldsValue: SignupFields) {
		signup(fieldsValue: $fieldsValue) {
			access_token
			refresh_token
			user {
				firstName
				city
				lastName
				id
				postalCode
				phoneNumber
				email
				streetAddress
			}
		}
	}
`;
