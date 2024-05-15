import prisma from '../../../../../db.config';
import { GraphQLError } from 'graphql';

export const removeVehicle = async (_: unknown, { id }: { id: string }) => {
	try {
		const vehicle = await prisma.vehicle.delete({
			where: {
				id,
			},
		});

		return vehicle;
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
