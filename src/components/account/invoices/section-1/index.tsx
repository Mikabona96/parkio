'use client';
import { Button, ChevronIcon, ParkingStatus } from '@/elements';
import { cn } from '@/tools/utils/cn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const tableRows = [
	{
		date: '04-07-2023',
		amount: '20 SEK',
		paymentMethod: 'Table body',
		status: 'active',
		refersTo: 'Table body',
	},
	{
		date: '04-07-2023',
		amount: '20 SEK',
		paymentMethod: 'Table body',
		status: 'active',
		refersTo: 'Table body',
	},
	{
		date: '04-07-2023',
		amount: '20 SEK',
		paymentMethod: 'Table body',
		status: 'inactive',
		refersTo: 'Table body',
	},
	{
		date: '04-07-2023',
		amount: '20 SEK',
		paymentMethod: 'Table body',
		status: 'inactive',
		refersTo: 'Table body',
	},
	{
		date: '04-07-2023',
		amount: '20 SEK',
		paymentMethod: 'Table body',
		status: 'active',
		refersTo: 'Table body',
	},
	{
		date: '04-07-2023',
		amount: '20 SEK',
		paymentMethod: 'Table body',
		status: 'active',
		refersTo: 'Table body',
	},
	{
		date: '04-07-2023',
		amount: '20 SEK',
		paymentMethod: 'Table body',
		status: 'ended',
		refersTo: 'Table body',
	},
	{
		date: '04-07-2023',
		amount: '20 SEK',
		paymentMethod: 'Table body',
		status: 'active',
		refersTo: 'Table body',
	},
];

export const FirstSection = () => {
	const [selectedInvoice, setSelectedInvoice] = useState<null | number>(null);
	const [isDropdownOpen, stIsDropDownOpen] = useState(false);
	const searchParams = useSearchParams();
	const rowsPerPage = searchParams.get('rows') || '8';
	const currentPage = searchParams.get('page') || '1';
	const t = useTranslations('Account-invoices');
	return (
		<section className="flex flex-col gap-6">
			<Button className="ml-auto">{t('button')}</Button>
			<div className="overflow-hidden rounded-lg border border-[#F5F5F5]">
				{/* //+ =========== Table =========== */}
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
												checked={idx == selectedInvoice}
												onChange={() => setSelectedInvoice(idx)}
												name="agree"
												id="form-agree-checkbox"
											/>
										</p>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-left">
										<span>{row.date}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-left">
										<span>{row.amount}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-left">
										<span>{row.paymentMethod}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-left">
										<ParkingStatus
											status={row.status as 'active' | 'inactive' | 'ended'}
										/>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-left">
										<span>{row.refersTo}</span>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				{/* //$ =========== Table =========== */}
			</div>
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
										href={`?&page=${currentPage}&rows=${item}`}
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
							href={`?&page=${Number(currentPage) - 1}&rows=${rowsPerPage}`}
						>
							<ChevronIcon className="rotate-90" />
						</Link>
						<Link
							scroll={false}
							href={`?&page=${Number(currentPage) + 1}&rows=${rowsPerPage}`}
						>
							<ChevronIcon className="-rotate-90" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
