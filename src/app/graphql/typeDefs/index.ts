import { gql } from 'graphql-tag';
import { signupTypeDef } from './sign-up';
import { signinTypeDef } from './sign-in';
import { logoutTypeDef } from './logout';
import { checkUserSessionStatusTypeDef } from './checkUserSessionStatus';
import { addVehicleTypeDef } from './addVehicle';
import { getVehiclesTypeDef } from './getVehicles';
import { removeVehicleTypeDef } from './removeVehicle';
import { changeProfileTypeDef } from './changeProfile';
import { changePasswordTypeDef } from './changePassword';

export const typeDefs = gql`
	type Query {
		hello: String
	}
	${signupTypeDef}
	${signinTypeDef}
	${logoutTypeDef}
	${checkUserSessionStatusTypeDef}
	${addVehicleTypeDef}
	${getVehiclesTypeDef}
	${removeVehicleTypeDef}
	${changeProfileTypeDef}
	${changePasswordTypeDef}
`;
