import { AT_SECRET, RT_SECRET } from '@/constants';
import { KeyLike, SignJWT } from 'jose';

export const getTokens = async (name: string, email: string) => {
	const [access_token, refresh_token] = await Promise.all([
		new SignJWT({ name, email })
			.setProtectedHeader({
				alg: 'HS256',
			})
			.setExpirationTime('15 minutes')
			.sign(AT_SECRET),
		new SignJWT({ email })
			.setProtectedHeader({
				alg: 'HS256',
			})
			.setExpirationTime('7 days')
			.sign(RT_SECRET),
	]);
	return { access_token, refresh_token };
};

/**
 * Set the "exp" (Expiration Time) Claim.
 *
 * - If a `number` is passed as an argument it is used as the claim directly.
 * - If a `Date` instance is passed as an argument it is converted to unix timestamp and used as the
 *   claim.
 * - If a `string` is passed as an argument it is resolved to a time span, and then added to the
 *   current unix timestamp and used as the claim.
 *
 * Format used for time span should be a number followed by a unit, such as "5 minutes" or "1
 * day".
 *
 * Valid units are: "sec", "secs", "second", "seconds", "s", "minute", "minutes", "min", "mins",
 * "m", "hour", "hours", "hr", "hrs", "h", "day", "days", "d", "week", "weeks", "w", "year",
 * "years", "yr", "yrs", and "y". It is not possible to specify months. 365.25 days is used as an
 * alias for a year.
 *
 * If the string is suffixed with "ago", or prefixed with a "-", the resulting time span gets
 * subtracted from the current unix timestamp. A "from now" suffix can also be used for
 * readability when adding to the current unix timestamp.
 *
 * @param input "exp" (Expiration Time) Claim value to set on the JWT Claims Set.
 */
export const getToken = async (
	args: { name?: string; email?: string },
	exp: string | number | Date,
	secret: KeyLike | Uint8Array,
) =>
	await new SignJWT(args)
		.setProtectedHeader({
			alg: 'HS256',
		})
		.setExpirationTime(exp)
		.sign(secret);
