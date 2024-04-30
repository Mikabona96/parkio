import { SigninFields } from '@/app/definitions';
import * as bcrypt from 'bcrypt';
import prisma from '../../../../db.config';
import { NextResponse } from 'next/server';
import { comparePasswords, getTokens } from '@/app/lib';
import { cookies } from 'next/headers';
import { ApiError } from 'next/dist/server/api-utils';

export async function GET() {}
export async function POST(request: Request) {
	const data: SigninFields = await request.json();
	//+ find user email in db
	const existingUser = await prisma.user.findUnique({
		where: {
			email: data.email,
		},
	});
	if (!existingUser) {
		return NextResponse.json(`Email or password is not correct...`, {
			status: 403,
		});
	}
	//+ Compare passwords
	const passwordsMatch = await comparePasswords(
		`${data.password}`,
		`${existingUser.password_hash}`,
	);
	if (!passwordsMatch) {
		return NextResponse.json(`Email or password is not correct...`, {
			status: 403,
		});
	}

	const tokens = await getTokens(existingUser.firstName, existingUser.email);

	try {
		//+ Update refresh_token in db
		const { password_hash, refresh_token, ...rest } = await prisma.user.update({
			where: {
				email: `${data.email}`,
			},
			data: {
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
