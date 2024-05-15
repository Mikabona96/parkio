import { gql } from '@apollo/client';

export const REMOVE_VEHICLE = gql`
	mutation RemoveVehicle($removeVehicleId: String) {
		removeVehicle(id: $removeVehicleId) {
			id
			userId
			vehicleNumber
			vehicleType
		}
	}
`;
