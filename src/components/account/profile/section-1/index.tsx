'use client';
import { PasswordFields, ProfileFields } from '@/app/definitions';
import { CHANGE_PASSWORD } from '@/app/graphql/mutations/changePassword';
import { CHANGE_PROFILE } from '@/app/graphql/mutations/changeProfile';
import { Button } from '@/elements';
import { validatePasswordFields } from '@/tools/helpers/validation/changePassword';
import { validateChangeProfileFields } from '@/tools/helpers/validation/changeProfile';
import { useAuthContext } from '@/tools/hooks';
import { useMutation } from '@apollo/client';
import { useTranslations } from 'next-intl';
import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

type Response = {
	access_token: string;
	refresh_token: string;
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

type MutationResponseType = {
	changeProfile: Response;
};

type ChangePasswordType = {
	changePassword: Response;
};

export const FirstSection = () => {
	const t = useTranslations('Account-profile');
	const [state, dispatch] = useFormState(
		validateChangeProfileFields,
		undefined,
	);
	const [statePassword, dispatchPassowrd] = useFormState(
		validatePasswordFields,
		undefined,
	);
	const [changeProfile, { data, loading, error }] = useMutation<
		MutationResponseType,
		{ fieldsValue: ProfileFields & { userEmail: string } }
	>(CHANGE_PROFILE, {
		errorPolicy: 'all',
	});
	const [
		changePassword,
		{
			data: changePasswordData,
			loading: changePasswordLoading,
			error: changePasswordError,
		},
	] = useMutation<
		ChangePasswordType,
		{ fieldsValue: PasswordFields & { userEmail: string } }
	>(CHANGE_PASSWORD, {
		errorPolicy: 'all',
	});

	const formRef = useRef<HTMLFormElement>(null);
	const formRef2 = useRef<HTMLFormElement>(null);
	const auth = useAuthContext();

	useEffect(() => {
		if (state?.validatedData && auth?.user) {
			changeProfile({
				variables: {
					fieldsValue: {
						...state.validatedData,
						userEmail: `${auth.user.email}`,
					},
				},
			});
			formRef.current?.reset();
		}
	}, [state?.validatedData]);

	useEffect(() => {
		if (statePassword?.validatedData && auth?.user) {
			changePassword({
				variables: {
					fieldsValue: {
						...statePassword.validatedData,
						userEmail: `${auth.user.email}`,
					},
				},
			});
			formRef2.current?.reset();
		}
	}, [statePassword?.validatedData]);

	return (
		<section className="flex w-full justify-between sm:flex-col md:flex-row lg:gap-12 xl:gap-0">
			<div className="form-1 w-full max-w-[384px]">
				<h3 className="text-[20px] text-gray-700">{t('form-1-title')}</h3>
				<form
					ref={formRef}
					action={dispatch}
					className="mt-5 flex flex-col gap-4"
				>
					<div className="flex gap-4">
						<input
							placeholder={t('first-name')}
							type="text"
							className="form-input h-11"
							name="name"
						/>
						<input
							placeholder={t('last-name')}
							type="text"
							name="lastname"
							className="form-input h-11"
						/>
					</div>
					<label htmlFor="email">
						<input
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
						placeholder={t('phone')}
						type="tel"
						name="phone"
						className="form-input h-11"
					/>
					<input
						placeholder={t('street-address')}
						type="text"
						className="form-input h-11"
						name="street"
					/>
					<div className="flex gap-4">
						<input
							placeholder={t('post-code')}
							type="number"
							name="code"
							className="form-input h-11"
						/>
						<input
							placeholder={t('city')}
							type="text"
							name="city"
							className="form-input h-11"
						/>
					</div>
					<Button className="ml-auto w-fit">{t('form-1-button')}</Button>
				</form>
			</div>
			<div className="form-2 w-full max-w-[315px]">
				<h3 className="text-[20px] text-gray-700">{t('form-1-title')}</h3>
				<form
					ref={formRef2}
					action={dispatchPassowrd}
					className="mt-5 flex flex-col gap-4"
				>
					<label htmlFor="password" className="text-start">
						<input
							required
							placeholder={t('password')}
							type="password"
							name="password"
							className="form-input h-11"
						/>
						<p className="mt-1 px-4 text-start text-xs text-[#ff898b]">
							{statePassword?.errors && statePassword?.errors.password}
						</p>
					</label>
					<label htmlFor="confirmpassword">
						<input
							required
							name="confirmpassword"
							placeholder={t('confirm-password')}
							type="password"
							className="form-input h-11"
						/>
						<p className="mt-1 px-4 text-xs text-[#ff898b]">
							{statePassword?.errors && statePassword?.errors.confirmpassword}
						</p>
					</label>
					<Button className="ml-auto w-fit">{t('form-2-button')}</Button>
				</form>
			</div>
		</section>
	);
};
