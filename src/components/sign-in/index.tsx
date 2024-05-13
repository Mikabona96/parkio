'use client';
import { signin } from '@/app/actions';
import { Button } from '@/elements';
import { useSignIn } from '@/tools/hooks';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { useFormState } from 'react-dom';

export const FirstSection = ({ locale }: { locale: string }) => {
	const t = useTranslations('Sign-in');
	const [state, dispatch] = useFormState(signin, undefined);
	const { error, loading } = useSignIn(
		state?.validatedData,
		`/${locale}/account/profile`,
	);
	return (
		<section className="flex items-center justify-center py-[120px] sm:px-6">
			<div className="flex flex-col text-center">
				<h1 className="text-[32px] font-bold text-gray-900">{t('title')}</h1>
				<h3 className="mt-4">{t('subtitle')}</h3>
				<form action={dispatch} className="mt-8 flex flex-col">
					<input
						placeholder="Email"
						name="email"
						id="email"
						type="email"
						className="form-input h-11"
					/>
					<input
						name="password"
						id="password"
						placeholder={t('password')}
						type="password"
						className="form-input mt-4 h-11"
					/>
					<Button className="mt-12">{t('log-in')}</Button>
					<p className="mt-1 px-4 text-xs text-[#ff898b]">{state?.message}</p>
					{error?.message && (
						<p className="mt-1 px-4 text-xs text-[#ff898b]">{error?.message}</p>
					)}
				</form>
				<div className="mt-4 h-[1px] w-full bg-gray-300"></div>
				<Link
					href={`/${locale}/sign-up`}
					className="mt-5 text-start transition-all hover:text-gradient-3"
				>
					{t('question')}
				</Link>
			</div>
		</section>
	);
};
