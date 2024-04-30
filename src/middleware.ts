import createMiddleware from 'next-intl/middleware';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { RT_SECRET } from './constants';
import { jwtVerify } from 'jose';

const localeMiddleware = createMiddleware({
	// A list of all locales that are supported
	locales: ['en-US', 'sv-SE'],

	// Used when no locale matches
	defaultLocale: 'en-US',
});

const verifyToken = async (token: string, key: Uint8Array) => {
	try {
		const { payload } = await jwtVerify(token, key);
		return payload;
	} catch {
		return null;
	}
};

const protectedRoutes =
	/(?:\/(en-US|sv-SE))?\/account\/(profile|invoices|parkings-subscriptions|parkings-receipts)/;
const publicRoutes = /(?:\/(en-US|sv-SE))?\/sign-(in|up)/;

export async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;
	const locale = path.match(/^\/([^\/]+)/)?.[1];

	if (publicRoutes.test(path)) {
		const refresh_token = cookies().get('refresh_token')?.value;
		const verifiedRt = await verifyToken(`${refresh_token}`, RT_SECRET);
		if (refresh_token && verifiedRt) {
			return NextResponse.redirect(
				new URL(`/${locale}/account/profile`, request.nextUrl),
			);
		}
	}
	if (protectedRoutes.test(path)) {
		const refresh_token = cookies().get('refresh_token')?.value;
		const verifiedRt = await verifyToken(`${refresh_token}`, RT_SECRET);
		if (!refresh_token || !verifiedRt) {
			return NextResponse.redirect(
				new URL(`/${locale}/sign-in`, request.nextUrl),
			);
		}
	}
	return localeMiddleware(request);
}

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(en-US|sv-SE)/:path*'],
};
