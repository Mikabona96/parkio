import { gql } from '@apollo/client';

export const CHECK_USER_SESSION_STATUS = gql`
	query CheckUserSessionStatus {
		checkUserSessionStatus {
			email
			id
			firstName
			lastName
			phoneNumber
			streetAddress
			postalCode
			city
		}
	}
`;
