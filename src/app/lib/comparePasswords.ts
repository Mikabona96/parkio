import * as bcrypt from 'bcrypt';

export const comparePasswords = async (
	data: string | Buffer,
	encrypted: string,
) => {
	try {
		return await bcrypt.compare(data, encrypted);
	} catch (error) {
		return false;
	}
};
