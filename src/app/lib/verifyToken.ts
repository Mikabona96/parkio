import { jwtVerify } from 'jose';

export const verifyToken = async (token: string, key: Uint8Array) => {
	try {
		const { payload } = await jwtVerify(token, key);
		return payload;
	} catch {
		return null;
	}
};
