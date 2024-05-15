'use client';
import { ADD_VEHICLE } from '@/app/graphql/mutations/addVehicle';
import { TrashIcon } from '@/elements';
import { SmallSpinner } from '@/elements/smallSpinner';
import { addVehicle as addVehicleValidator } from '@/tools/helpers/validation';
import { useAuthContext } from '@/tools/hooks';
import { useMutation } from '@apollo/client';
import { VehicleType } from '@prisma/client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

interface IRootLayoutProps {
	children: React.ReactNode;
	params: {
		locale: string;
	};
}

type AddVehicleVariablesType = {
	data: {
		userId: number;
		vehicleNumber: string;
		vehicleType: VehicleType;
	};
};

function AccountLayout({
	children,
	params: { locale },
}: Readonly<IRootLayoutProps>) {
	const t = useTranslations('Account');
	const path = usePathname();
	const [state, dispatch] = useFormState(addVehicleValidator, undefined);
	const auth = useAuthContext();
	const formRef = useRef<HTMLFormElement>(null);
	const [addVehicle, { data, loading, error }] = useMutation<
		boolean,
		AddVehicleVariablesType
	>(ADD_VEHICLE, {
		errorPolicy: 'all',
	});

	useEffect(() => {
		if (state?.validatedData && auth?.user) {
			addVehicle({
				variables: {
					data: {
						userId: auth?.user?.id as number,
						vehicleNumber: state.validatedData.vehicle,
						vehicleType: state.validatedData.vehicleType as VehicleType,
					},
				},
			});
			formRef.current?.reset();
		}
	}, [state?.validatedData]);

	const menuItems = [
		{
			title: t('menu-items-1'),
			href: `/${locale}/account/profile`,
		},
		{
			title: t('menu-items-2'),
			href: `/${locale}/account/parkings-receipts`,
		},
		{
			title: t('menu-items-3'),
			href: `/${locale}/account/parkings-subscriptions`,
		},
		{
			title: t('menu-items-4'),
			href: `/${locale}/account/invoices`,
		},
	];
	return (
		<main className="mb-[120px] flex pt-20 sm:flex-col sm:px-6 lg:mt-[4.8rem] lg:px-[60px] xl:px-[120px]">
			<h1 className="text-[32px] font-bold text-gray-900">{t('title')}</h1>
			<div className="mt-6 flex sm:flex-col md:gap-[88px] lg:flex-row xl:gap-[108px]">
				<div className="flex w-full min-w-[290px] max-w-[290px] flex-col gap-2">
					<ul className="w-full max-w-[282px] list-none">
						{menuItems.map((item, idx) => (
							<Link key={idx} href={item.href}>
								<li
									className={`relative flex cursor-pointer items-center p-4 transition-all hover:text-gradient-3 ${item.href === path && 'text-gradient-3 before:absolute before:left-0 before:top-[50%] before:h-6 before:w-1 before:translate-y-[-50%] before:rounded-lg before:bg-gradient-3 before:content-[""]'}`}
								>
									{item.title}
								</li>
							</Link>
						))}
					</ul>
					<div className="mt-2 h-[1px] w-full bg-gray-300"></div>
					<div className="flex-flex-col mt-6">
						{/* <h3>{t('no-vehicles')}</h3> */}
						<>
							<h3>{t('My-vehicles')}</h3>
							<div className="mt-4 flex w-full items-center rounded-[4px] bg-gray-100 px-3 py-4">
								<Image
									width={24}
									height={24}
									className="mr-2"
									alt="car-icon.svg"
									src={'/car-icon.svg'}
								/>
								71664
								<span className="ml-auto cursor-pointer">
									<TrashIcon color="#FFA1A3" />
								</span>
							</div>
						</>
						<form
							ref={formRef}
							action={dispatch}
							className="mt-3 flex flex-col gap-2"
						>
							<input
								name="vehicle"
								placeholder={t('input')}
								type="text"
								className="form-input"
							/>
							<p className="mt-1 px-4 text-xs text-[#ff898b]">
								{state?.errors?.vehicle}
							</p>
							<div className="flex w-full justify-between">
								<div className="flex gap-2">
									<Image
										width={24}
										height={24}
										className="mr-2"
										alt="car-icon.svg"
										src={'/car-icon.svg'}
									/>
									<label className="relative mt-1 flex h-4 w-4 items-center justify-center rounded-[50%] border border-gray-500 before:absolute before:left-[50%] before:top-[50%] before:h-2 before:w-2 before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-[50%] before:bg-gradient-to-bl before:from-gradient-1 before:to-gradient-3 before:opacity-0 has-[:checked]:border-gradient-1 before:has-[:checked]:opacity-100">
										<input
											className="h-6 w-5 cursor-pointer opacity-0"
											type="radio"
											value={'CAR'}
											name="vehicleType"
										/>
									</label>
									<span>{t('car')}</span>
								</div>
								<div className="flex gap-2">
									<Image
										width={24}
										height={24}
										className="mr-2"
										alt="motorcycle.svg"
										src={'/motorcycle.svg'}
									/>
									<label className="relative mt-1 flex h-4 w-4 items-center justify-center rounded-[50%] border border-gray-500 before:absolute before:left-[50%] before:top-[50%] before:h-2 before:w-2 before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-[50%] before:bg-gradient-to-bl before:from-gradient-1 before:to-gradient-3 before:opacity-0 has-[:checked]:border-gradient-1 before:has-[:checked]:opacity-100">
										<input
											className="h-6 w-5 cursor-pointer opacity-0"
											type="radio"
											value={'MOTORCYCLE'}
											name="vehicleType"
										/>
									</label>
									<span>{t('motorcycle')}</span>
								</div>
							</div>
							<p className="mt-1 px-4 text-xs text-[#ff898b]">
								{state?.errors?.vehicleType}
							</p>
							<button
								disabled={loading}
								className="flex items-center justify-center rounded-lg border-[1px] border-gray-300 py-[10px] shadow-sm shadow-gray-300 transition-all duration-300 hover:border-gradient-3 hover:bg-gradient-3 hover:text-[#fff] disabled:cursor-not-allowed disabled:bg-gray-300"
							>
								{loading ? <SmallSpinner /> : t('button')}
							</button>
							<p className="mt-1 px-4 text-xs text-[#ff898b]">
								{state?.message}
							</p>
						</form>
					</div>
				</div>
				<main className="w-full sm:mt-12 md:mt-4 lg:min-w-[422px]">
					{children}
				</main>
			</div>
		</main>
	);
}

export default AccountLayout;
