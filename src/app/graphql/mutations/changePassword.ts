import { gql } from '@apollo/client';

export const CHANGE_PASSWORD = gql`
	mutation Mutation($fieldsValue: ChangePasswordFields) {
		changePassword(fieldsValue: $fieldsValue) {
			access_token
			refresh_token
			user {
				id
				email
				firstName
				lastName
				phoneNumber
				streetAddress
				postalCode
				city
			}
		}
	}
`;
