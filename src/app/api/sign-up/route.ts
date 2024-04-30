import { NextResponse } from 'next/server';
import { ApiError } from 'next/dist/server/api-utils';

import { SignupFields } from '@/app/definitions';
import prisma from '../../../../db.config';
import { cookies } from 'next/headers';
import { getTokens, hashPassword } from '@/app/lib';

export async function GET() {}

export async function POST(request: Request) {
	const data: SignupFields = await request.json();
	const hash = await hashPassword(data.password);
	const tokens = await getTokens(data.name, data.email);
	const existedUser = await prisma.user.findUnique({
		where: {
			email: data.email,
		},
	});
	if (existedUser) {
		return NextResponse.json(
			`User with email:${data.email} is already exist...`,
			{ status: 403 },
		);
	}
	try {
		const { password_hash, refresh_token, ...rest } = await prisma.user.create({
			data: {
				city: data.city,
				email: data.email,
				firstName: data.name,
				lastName: data.lastname,
				phoneNumber: `${data.phone}`,
				postalCode: data.code,
				streetAddress: data.street,
				password_hash: hash,
				refresh_token: tokens.refresh_token,
			},
		});
		cookies().set('refresh_token', `${tokens.refresh_token}`, {
			expires: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000), // 7 days
			httpOnly: true,
		});
		cookies().set('access_token', `${tokens.access_token}`, {
			expires: new Date(Date.now() + 60 * 60 * 10000 * 0.25), // 15 minutes
			httpOnly: true,
		});
		return NextResponse.json(
			{
				access_token: tokens.access_token,
				refresh_token: tokens.refresh_token,
				user: { ...rest },
			},
			{ status: 201 },
		);
	} catch (error) {
		throw new ApiError(400, 'Error registration user...');
	}
}
