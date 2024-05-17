'use client';
import { deleteCookies } from '@/app/actions';
import { REMOVE_PROFILE } from '@/app/graphql/mutations/removeProfile';
import { useAuthContext } from '@/tools/hooks';
import { useMutation } from '@apollo/client';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

export const ThirdSection = () => {
	const t = useTranslations('Account-profile');
	const auth = useAuthContext();
	const locale = useLocale();

	type Response = {
		removeProfile: {
			user: {
				id: number;
				email: string;
				firstName: string;
				lastName: string;
				phoneNumber: string;
				streetAddress: string;
				postalCode: number;
				city: string;
			};
		};
	};

	const [remove, { data, loading, error }] = useMutation<
		Response,
		{ email: string }
	>(REMOVE_PROFILE);

	return (
		<section className="flex flex-col">
			<div className="flex flex-col">
				<h3 className="text-[20px] text-gray-900">{t('s-3-title')}</h3>
				<p className="mt-4 whitespace-pre-line">{t('s-3-description')}</p>
			</div>
			<Link
				onClick={() => {
					if (auth?.user) {
						remove({
							variables: {
								email: `${auth.user.email}`,
							},
						});
						deleteCookies();
					}
				}}
				href={`/${locale}/sign-in`}
				className="ml-auto mt-6 w-fit rounded-lg bg-[#FFA1A3] px-5 py-3 font-bold text-[#fff] transition-all active:bg-[#ff898b]"
			>
				{t('s-3-button')}
			</Link>
		</section>
	);
};
