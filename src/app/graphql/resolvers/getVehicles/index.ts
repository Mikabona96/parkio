import prisma from '../../../../../db.config';
import { GraphQLError } from 'graphql';

export const getVehicles = async (_: unknown, { id }: { id: number }) => {
	try {
		const vehicles = await prisma.vehicle.findMany({
			where: {
				userId: id,
			},
		});

		return vehicles;
	} catch (error) {
		throw new GraphQLError(`Something went wromng...`, {
			extensions: {
				statusCode: 500,
				message: 'Something went wrong',
				code: 'SERVER_ERROR',
			},
		});
	}
};
