import { gql } from '@apollo/client';

export const SIGN_IN = gql`
	mutation SigninMutation($fieldsValue: SigninFields) {
		signin(fieldsValue: $fieldsValue) {
			access_token
			refresh_token
			user {
				city
				email
				firstName
				id
				lastName
				phoneNumber
				postalCode
				streetAddress
			}
		}
	}
`;
