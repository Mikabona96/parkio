import { gql } from '@apollo/client';

export const LOG_OUT = gql`
	query Query($email: String) {
		logout(email: $email)
	}
`;
