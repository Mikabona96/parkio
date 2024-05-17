import prisma from '../../../../../db.config';
import { GraphQLError } from 'graphql';

export const removeProfile = async (
	_: unknown,
	{ email }: { email: string },
) => {
	try {
		const { password_hash, refresh_token, ...rest } = await prisma.user.delete({
			where: {
				email,
			},
		});
		return { user: rest };
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
