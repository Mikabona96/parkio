import { gql } from '@apollo/client';

export const GET_VEHICLES = gql`
	query Query($getVehiclesId: Int) {
		getVehicles(id: $getVehiclesId) {
			id
			userId
			vehicleNumber
			vehicleType
		}
	}
`;
