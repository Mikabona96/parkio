'use client';
import { ADD_VEHICLE } from '@/app/graphql/mutations/addVehicle';
import { REMOVE_VEHICLE } from '@/app/graphql/mutations/removeVehicle';
import { GET_VEHICLES } from '@/app/graphql/queries/getVehicles';
import { TrashIcon } from '@/elements';
import { SmallSpinner } from '@/elements/smallSpinner';
import { addVehicle as addVehicleValidator } from '@/tools/helpers/validation';
import { useAuthContext } from '@/tools/hooks';
import { cn } from '@/tools/utils/cn';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { Vehicle, VehicleType } from '@prisma/client';
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

type GET_VEHICLES_TYPE = { getVehicles: Vehicle[] };
type ADD_VEHICLE_TYPE = { addVehicle: Vehicle };
type REMOVE_VEHICLE_TYPE = { removeVehicle: Vehicle };

function AccountLayout({
	children,
	params: { locale },
}: Readonly<IRootLayoutProps>) {
	const t = useTranslations('Account');
	const path = usePathname();
	const [state, dispatch] = useFormState(addVehicleValidator, undefined);
	const auth = useAuthContext();
	const formRef = useRef<HTMLFormElement>(null);
	const [removeVehicle, { data: removedVehicle }] =
		useMutation<REMOVE_VEHICLE_TYPE>(REMOVE_VEHICLE, {
			errorPolicy: 'all',
			update(cache, { data }) {
				//+ Vehicle to remove
				const { removeVehicle } = data as REMOVE_VEHICLE_TYPE;

				//+ All vehicles
				const { getVehicles } = cache.readQuery<GET_VEHICLES_TYPE>({
					query: GET_VEHICLES,
					variables: { getVehiclesId: auth?.user?.id },
				}) as GET_VEHICLES_TYPE;

				//+ writing cache... adding new vehicle to cache
				cache.writeQuery({
					query: GET_VEHICLES,
					variables: { getVehiclesId: auth?.user?.id },
					data: {
						getVehicles: [
							...getVehicles.filter(
								(vehicle) => vehicle.id !== removeVehicle.id,
							),
						],
					},
				});
			},
		});

	const [addVehicle, { data, loading, error }] = useMutation<
		ADD_VEHICLE_TYPE,
		AddVehicleVariablesType
	>(ADD_VEHICLE, {
		errorPolicy: 'all',
		//+ Updating cache and put new vehicle to cache
		update(cache, { data }) {
			//+ Vehicle to add
			const { addVehicle } = data as ADD_VEHICLE_TYPE;

			//+ All vehicles
			const { getVehicles } = cache.readQuery<GET_VEHICLES_TYPE>({
				query: GET_VEHICLES,
				variables: { getVehiclesId: auth?.user?.id },
			}) as GET_VEHICLES_TYPE;

			//+ writing cache... adding new vehicle to cache
			cache.writeQuery({
				query: GET_VEHICLES,
				variables: { getVehiclesId: auth?.user?.id },
				data: {
					getVehicles: [addVehicle, ...getVehicles],
				},
			});
		},
	});

	const [
		getVehicles,
		{ data: vehicles, loading: vehiclesLoading, error: vehiclesError },
	] = useLazyQuery<GET_VEHICLES_TYPE>(GET_VEHICLES, {
		errorPolicy: 'all',
	});

	useEffect(() => {
		getVehicles({
			variables: {
				getVehiclesId: auth?.user?.id,
			},
		});
	}, [auth?.user?.id]);

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
						{!vehicles?.getVehicles.length && !vehiclesLoading && (
							<h3>{t('no-vehicles')}</h3>
						)}
						{vehiclesLoading && (
							<>
								<div
									className={
										'relative flex h-14 w-full animate-vehicleSkeleton items-center overflow-hidden rounded-[4px] bg-[#0000001c] px-3 py-4'
									}
								></div>
								<div
									className={
										'relative mt-4 flex h-14 w-full animate-vehicleSkeleton items-center overflow-hidden rounded-[4px] bg-[#0000001c] px-3 py-4'
									}
								></div>
							</>
						)}
						{vehicles?.getVehicles.length && (
							<>
								<h3>{t('My-vehicles')}</h3>
								<div className="scroll mt-4 h-fit max-h-[210px] overflow-y-auto">
									{vehicles.getVehicles.map((vehicle, idx) => (
										<div
											key={vehicle.id}
											className={cn(
												'flex w-full items-center rounded-[4px] bg-gray-100 px-3 py-4',
												{
													'mt-4': idx > 0,
												},
											)}
										>
											<Image
												width={24}
												height={24}
												className="mr-2"
												alt={
													vehicle.vehicleType === 'CAR'
														? 'car-icon.svg'
														: 'motorcycle.svg'
												}
												src={
													vehicle.vehicleType === 'CAR'
														? '/car-icon.svg'
														: '/motorcycle.svg'
												}
											/>
											{vehicle.vehicleNumber}
											<span
												onClick={() => {
													removeVehicle({
														variables: {
															removeVehicleId: vehicle.id,
														},
													});
												}}
												className="ml-auto cursor-pointer"
											>
												<TrashIcon color="#FFA1A3" />
											</span>
										</div>
									))}
								</div>
							</>
						)}
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
								<label className="flex cursor-pointer gap-2">
									<Image
										width={24}
										height={24}
										className="mr-2"
										alt="car-icon.svg"
										src={'/car-icon.svg'}
									/>
									<div className="relative mt-1 flex h-4 w-4 items-center justify-center rounded-[50%] border border-gray-500 before:absolute before:left-[50%] before:top-[50%] before:h-2 before:w-2 before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-[50%] before:bg-gradient-to-bl before:from-gradient-1 before:to-gradient-3 before:opacity-0 has-[:checked]:border-gradient-1 before:has-[:checked]:opacity-100">
										<input
											className="h-6 w-5 cursor-pointer opacity-0"
											type="radio"
											defaultChecked
											value={'CAR'}
											name="vehicleType"
										/>
									</div>
									<span>{t('car')}</span>
								</label>
								<label className="flex cursor-pointer gap-2">
									<Image
										width={24}
										height={24}
										className="mr-2"
										alt="motorcycle.svg"
										src={'/motorcycle.svg'}
									/>
									<div className="relative mt-1 flex h-4 w-4 items-center justify-center rounded-[50%] border border-gray-500 before:absolute before:left-[50%] before:top-[50%] before:h-2 before:w-2 before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-[50%] before:bg-gradient-to-bl before:from-gradient-1 before:to-gradient-3 before:opacity-0 has-[:checked]:border-gradient-1 before:has-[:checked]:opacity-100">
										<input
											className="h-6 w-5 cursor-pointer opacity-0"
											type="radio"
											value={'MOTORCYCLE'}
											name="vehicleType"
										/>
									</div>
									<span>{t('motorcycle')}</span>
								</label>
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
