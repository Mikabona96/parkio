'use client';
import {
	Button,
	CaseIcon,
	ParkingStatus,
	ProfileIcon,
	ChevronIcon,
} from '@/elements';
import { cn } from '@/tools/utils/cn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const tableRows = [
	{
		car: '71664',
		validFrom: '04-07-2023 / 00:33',
		validTo: '04-07-2023 / 16:05',
		length: '1 h 20 min',
		parking: 'Table body',
		quantityKwh: 'Table body',
		amount: '20 kr',
		status: 'active',
		refersTo: 'Table body',
	},
	{
		car: '71664',
		validFrom: '04-07-2023 / 00:33',
		validTo: '04-07-2023 / 16:05',
		length: '1 h 20 min',
		parking: 'Table body',
		quantityKwh: 'Table body',
		amount: '20 kr',
		status: 'active',
		refersTo: 'Table body',
	},
	{
		car: '71664',
		validFrom: '04-07-2023 / 00:33',
		validTo: '04-07-2023 / 16:05',
		length: '1 h 20 min',
		parking: 'Table body',
		quantityKwh: 'Table body',
		amount: '20 kr',
		status: 'inactive',
		refersTo: 'Table body',
	},
	{
		car: '71664',
		validFrom: '04-07-2023 / 00:33',
		validTo: '04-07-2023 / 16:05',
		length: '1 h 20 min',
		parking: 'Table body',
		quantityKwh: 'Table body',
		amount: '20 kr',
		status: 'inactive',
		refersTo: 'Table body',
	},
	{
		car: '71664',
		validFrom: '04-07-2023 / 00:33',
		validTo: '04-07-2023 / 16:05',
		length: '1 h 20 min',
		parking: 'Table body',
		quantityKwh: 'Table body',
		amount: '20 kr',
		status: 'active',
		refersTo: 'Table body',
	},
	{
		car: '71664',
		validFrom: '04-07-2023 / 00:33',
		validTo: '04-07-2023 / 16:05',
		length: '1 h 20 min',
		parking: 'Table body',
		quantityKwh: 'Table body',
		amount: '20 kr',
		status: 'active',
		refersTo: 'Table body',
	},
	{
		car: '71664',
		validFrom: '04-07-2023 / 00:33',
		validTo: '04-07-2023 / 16:05',
		length: '1 h 20 min',
		parking: 'Table body',
		quantityKwh: 'Table body',
		amount: '20 kr',
		status: 'ended',
		refersTo: 'Table body',
	},
	{
		car: '71664',
		validFrom: '04-07-2023 / 00:33',
		validTo: '04-07-2023 / 16:05',
		length: '1 h 20 min',
		parking: 'Table body',
		quantityKwh: 'Table body',
		amount: '20 kr',
		status: 'active',
		refersTo: 'Table body',
	},
];
export const FirstSection = () => {
	const [isDropdownOpen, stIsDropDownOpen] = useState(false);
	const [selectedReciept, setSelectedReciept] = useState<null | number>(null);
	const searchParams = useSearchParams();
	const show = searchParams.get('show') || 'private';
	const rowsPerPage = searchParams.get('rows') || '8';
	const currentPage = searchParams.get('page') || '1';
	const t = useTranslations('Account-parkings-receipts');

	return (
		<section className="flex flex-col gap-6">
			<div className="flex items-center justify-between sm:flex-col sm:gap-6 md:flex-row md:gap-0">
				{/* //+ ======= Tabs ======= */}
				<div className="flex h-9 rounded-[4px] bg-[#EAECF0] p-[1px]">
					<Link
						href={`?show=private&page=${currentPage}&rows=${rowsPerPage}`}
						className={cn(
							'flex w-[120px] items-center justify-center gap-1 rounded-sm bg-[#EAECF0] text-sm transition-all',
							{
								'bg-[#fff] text-[#C777E3]': show === 'private',
							},
						)}
					>
						<ProfileIcon active={show === 'private'} />
						<span>{t('tab-1')}</span>
					</Link>
					<Link
						href={`?show=business&page=${currentPage}&rows=${rowsPerPage}`}
						className={cn(
							'flex w-[120px] items-center justify-center gap-1 rounded-sm bg-[#EAECF0] text-sm transition-all',
							{
								'bg-[#fff] text-[#C777E3]': show === 'business',
							},
						)}
					>
						<CaseIcon active={show === 'business'} />
						<span>{t('tab-2')}</span>
					</Link>
				</div>
				{/* //$ ======= Tabs ======= */}
				<Button>{t('button')}</Button>
			</div>
			{/* //+ =========== Table =========== */}
			<div className="overflow-hidden rounded-lg border border-[#F5F5F5] sm:overflow-x-scroll md:w-[500px]">
				<table className="w-full">
					<thead className="bg-[#F9FAFB]">
						<tr>
							<th className="border border-l-0 border-t-0 border-[#F5F5F5] py-[14px]"></th>
							<th className="border border-t-0 border-[#F5F5F5] px-3 py-[14px] text-start text-[12px] font-normal text-gray-900">
								{t('table-header-1')}
							</th>
							<th className="border border-l-0 border-t-0 border-[#F5F5F5] px-3 py-[14px] text-left text-[12px] font-normal text-gray-900">
								{t('table-header-2')}
							</th>
							<th className="border border-l-0 border-t-0 border-[#F5F5F5] px-3 py-[14px] text-left text-[12px] font-normal text-gray-900">
								{t('table-header-3')}
							</th>
							<th className="border border-l-0 border-t-0 border-[#F5F5F5] px-3 py-[14px] text-left text-[12px] font-normal text-gray-900">
								{t('table-header-4')}
							</th>
							<th className="border border-l-0 border-t-0 border-[#F5F5F5] px-3 py-[14px] text-left text-[12px] font-normal text-gray-900">
								{t('table-header-5')}
							</th>
							<th className="text-nowrap border border-l-0 border-t-0 border-[#F5F5F5] px-3 py-[14px] text-left text-[12px] font-normal text-gray-900">
								{t('table-header-6')}
							</th>
							<th className="border border-l-0 border-t-0 border-[#F5F5F5] px-3 py-[14px] text-left text-[12px] font-normal text-gray-900">
								{t('table-header-7')}
							</th>
							<th className="border border-l-0 border-t-0 border-[#F5F5F5] px-3 py-[14px] text-left text-[12px] font-normal text-gray-900">
								{t('table-header-8')}
							</th>
							<th className="border border-l-0 border-r-0 border-t-0 border-[#F5F5F5] px-3 py-[14px] text-left text-[12px] font-normal text-gray-900">
								{t('table-header-9')}
							</th>
						</tr>
					</thead>
					<tbody>
						{tableRows.map((row, idx) => {
							return (
								<tr
									key={idx}
									className="text-sm last:border-b-0 even:bg-[#F9FAFB]"
								>
									<td className="w-[60px] border border-l-0 border-[#F5F5F5] p-5">
										<p tabIndex={0} className="checkbox">
											<input
												className="h-full w-full cursor-pointer opacity-0"
												type="checkbox"
												checked={idx == selectedReciept}
												onChange={() => setSelectedReciept(idx)}
												name="agree"
												id="form-agree-checkbox"
											/>
										</p>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-center">
										<span>{row.car}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-center">
										<span>{row.validFrom}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-center">
										<span>{row.validTo}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-center">
										<span>{row.length}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-center">
										<span>{row.parking}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-center">
										<span>{row.quantityKwh}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-center">
										<span>{row.amount}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-center">
										<ParkingStatus
											status={row.status as 'active' | 'inactive' | 'ended'}
										/>
									</td>
									<td className="border border-r-0 border-[#F5F5F5] px-3 py-5 text-center">
										<span>{row.refersTo}</span>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			{/* //$ =========== Table =========== */}
			<div className="ml-auto mt-7 flex">
				<div className="flex items-center gap-2">
					<span>{t('bottom-navigation')}</span>
					{/* //+ ===========DROPDOWN=========== */}
					<button
						onClick={() => stIsDropDownOpen(!isDropdownOpen)}
						className="relative flex items-center rounded-lg border border-[#EAECF0] px-3 py-2 outline-0"
					>
						{rowsPerPage}:{' '}
						<ChevronIcon
							className={cn('rotate-0 transition-all', {
								'rotate-180': isDropdownOpen,
							})}
						/>
						{/* //* Dropdown Menu */}
						{isDropdownOpen && (
							<ul className="absolute left-0 top-[42px] flex h-[100px] w-full list-none flex-col overflow-y-auto rounded-lg border border-[#EAECF0] bg-[#fff]">
								{[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
									<Link
										scroll={false}
										href={`?show=${show}&page=${currentPage}&rows=${item}`}
										key={item}
									>
										<li className="w-full px-3 py-1 even:border even:border-l-0 even:border-r-0 even:border-[#EAECF0]">
											{item}
										</li>
									</Link>
								))}
							</ul>
						)}
						{/* //* Dropdown Menu */}
					</button>
					{/* //$ ===========DROPDOWN=========== */}
					<span>{currentPage} of 8</span>
					<div className="flex items-center gap-6">
						<Link
							scroll={false}
							href={`?show=${show}&page=${Number(currentPage) - 1}&rows=${rowsPerPage}`}
						>
							<ChevronIcon className="rotate-90" />
						</Link>
						<Link
							scroll={false}
							href={`?show=${show}&page=${Number(currentPage) + 1}&rows=${rowsPerPage}`}
						>
							<ChevronIcon className="-rotate-90" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
