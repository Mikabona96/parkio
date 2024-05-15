import { gql } from 'graphql-tag';

export const getVehiclesTypeDef = gql`
	type GetVehiclesResponse {
		id: String
		userId: Int
		vehicleNumber: String
		vehicleType: String
	}
	type Query {
		getVehicles(id: Int): [GetVehiclesResponse]
	}
`;
