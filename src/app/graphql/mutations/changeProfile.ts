import { gql } from '@apollo/client';

export const CHANGE_PROFILE = gql`
	mutation Mutation($fieldsValue: ChangeProfileFields) {
		changeProfile(fieldsValue: $fieldsValue) {
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
