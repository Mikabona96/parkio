import { VehicleType } from '@prisma/client';
import prisma from '../../../../../db.config';
import { GraphQLError } from 'graphql';

type ArgsData = {
	data: {
		userId: number;
		vehicleNumber: string;
		vehicleType: VehicleType;
	};
};

export const addVehicle = async (_: unknown, args: ArgsData) => {
	const { userId, vehicleNumber, vehicleType } = args.data;

	try {
		const vehicle = await prisma.vehicle.create({
			data: {
				userId,
				vehicleNumber,
				vehicleType,
			},
		});
		return vehicle;
	} catch (error) {
		console.error(error);
		throw new GraphQLError(`Something went wromng...`, {
			extensions: {
				statusCode: 500,
				message: 'Something went wrong',
				code: 'SERVER_ERROR',
			},
		});
	}
};
