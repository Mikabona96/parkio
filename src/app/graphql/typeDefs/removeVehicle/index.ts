import { gql } from 'graphql-tag';

export const removeVehicleTypeDef = gql`
	type RemoveVehicleResponse {
		id: String
		userId: Int
		vehicleNumber: String
		vehicleType: String
	}
	type Mutation {
		removeVehicle(id: String): RemoveVehicleResponse
	}
`;
