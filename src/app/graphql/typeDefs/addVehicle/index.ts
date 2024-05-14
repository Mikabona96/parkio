import { gql } from 'graphql-tag';

export const addVehicleTypeDef = gql`
	input Data {
		userId: Int
		vehicleNumber: String
		vehicleType: String
	}
	type Mutation {
		addVehicle(data: Data): Boolean
	}
`;
