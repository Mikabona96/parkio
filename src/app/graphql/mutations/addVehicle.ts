import { gql } from '@apollo/client';

export const ADD_VEHICLE = gql`
	mutation AddVehicle($data: Data) {
		addVehicle(data: $data) {
			id
			userId
			vehicleNumber
			vehicleType
		}
	}
`;
