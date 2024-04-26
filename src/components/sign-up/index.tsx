'use client';
import { signup } from '@/app/actions';
import { Button } from '@/elements';
import { AuthContext } from '@/providers/AuthProvider';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

export const FirstSection = () => {
	const t = useTranslations('Sign-up');
	const [checked, setChecked] = useState(false);
	const { locale } = useParams();
	const [state, dispatch] = useFormState(signup, undefined);
	const auth = useContext(AuthContext);
	const router = useRouter();
	useEffect(() => {
		if (state?.access_token && state?.refresh_token) {
			window.localStorage.setItem('access_token', state?.access_token);
			window.localStorage.setItem('refresh_token', state?.refresh_token);
			if (state?.user) {
				auth?.setUser(state?.user);
				router.push('/');
			}
		}
	}, [state?.user, state?.refresh_token, state?.access_token, auth, router]);
	return (
		<section className="flex items-center justify-center py-[120px] sm:px-6">
			<div className="flex flex-col text-center">
				<h1 className="text-[32px] font-bold text-gray-900">{t('title')}</h1>
				<h3 className="mt-4">{t('subtitle')}</h3>
				<form action={dispatch} className="mt-8 flex flex-col gap-4">
					<div className="flex gap-4">
						<input
							id="name"
							name="name"
							required
							placeholder={t('first-name')}
							type="text"
							className="form-input h-11"
						/>
						<input
							id="lastname"
							required
							name="lastname"
							placeholder={t('last-name')}
							type="text"
							className="form-input h-11"
						/>
					</div>
					<label htmlFor="email">
						<input
							id="email"
							required
							name="email"
							placeholder="Email"
							type="email"
							className="form-input h-11"
						/>
						<p className="mt-1 px-4 text-xs text-[#ff898b]">
							{state?.errors && state?.errors.email}
						</p>
					</label>
					<input
						id="phone"
						name="phone"
						required
						placeholder={t('phone')}
						type="tel"
						className="form-input h-11"
					/>
					<input
						id="street"
						required
						name="street"
						placeholder={t('street-address')}
						type="text"
						className="form-input h-11"
					/>
					<div className="flex gap-4">
						<input
							id="code"
							required
							name="code"
							placeholder={t('post-code')}
							type="number"
							className="form-input h-11"
						/>
						<input
							id="city"
							name="city"
							required
							placeholder={t('city')}
							type="text"
							className="form-input h-11"
						/>
					</div>
					<label htmlFor="password" className="text-start">
						<input
							id="password"
							required
							placeholder={t('password')}
							type="password"
							name="password"
							className="form-input h-11"
						/>
						<p className="mt-1 px-4 text-start text-xs text-[#ff898b]">
							{state?.errors && state?.errors.password}
						</p>
					</label>
					<label htmlFor="confirmpassword">
						<input
							required
							id="confirmpassword"
							name="confirmpassword"
							placeholder={t('confirm-password')}
							type="password"
							className="form-input h-11"
						/>
						<p className="mt-1 px-4 text-xs text-[#ff898b]">
							{state?.errors && state?.errors.confirmpassword}
						</p>
					</label>
					<div
						onClick={() => {
							setChecked(!checked);
						}}
						className="flex cursor-pointer select-none items-center gap-2"
					>
						<p
							onKeyDown={(event) => {
								if (event.key === 'Enter') {
									setChecked(!checked);
								}
							}}
							tabIndex={0}
							className="checkbox"
						>
							<input
								className="h-full w-full opacity-0"
								type="checkbox"
								name="agree"
								onChange={() => {}}
								checked={checked}
								id="form-agree-checkbox"
							/>
						</p>
						{t('checkbox')}
					</div>
					<Button disabled={!checked} className="max-w-full">
						{t('register')}
					</Button>
				</form>
				<div
					className="flex h-8 items-end space-x-1"
					aria-live="polite"
					aria-atomic="true"
				>
					{state?.message && (
						<p className="mt-1 px-4 text-xs text-[#ff898b]">{state?.message}</p>
					)}
				</div>
				<div className="mt-4 h-[1px] w-full bg-gray-300"></div>
				<Link
					href={`/${locale}/sign-in`}
					className="mt-5 text-start transition-all hover:text-gradient-3"
				>
					{t('question')}
				</Link>
			</div>
		</section>
	);
};
