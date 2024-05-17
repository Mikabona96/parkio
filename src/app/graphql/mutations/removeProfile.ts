import { gql } from '@apollo/client';

export const REMOVE_PROFILE = gql`
	mutation RemoveProfile($email: String) {
		removeProfile(email: $email) {
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
