import prisma from '../../../../../db.config';
import { GraphQLError } from 'graphql';

export const logout = async (_: unknown, { email }: { email: string }) => {
	try {
		await prisma.user.update({
			data: {
				refresh_token: null,
			},
			where: {
				email,
			},
		});
		return true;
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
