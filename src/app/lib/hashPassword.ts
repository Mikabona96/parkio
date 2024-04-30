import * as bcrypt from 'bcrypt';
import { SALT_OR_ROUNDS } from '@/constants';

export const hashPassword = async (password: string) => {
	const salt = SALT_OR_ROUNDS;
	return await bcrypt.hash(password, Number(`${salt}`));
};
