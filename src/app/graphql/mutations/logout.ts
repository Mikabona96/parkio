import { gql } from '@apollo/client';

export const LOG_OUT = gql`
	mutation Logout($email: String) {
		logout(email: $email)
	}
`;
