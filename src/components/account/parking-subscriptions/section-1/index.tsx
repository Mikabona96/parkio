import { useTranslations } from 'next-intl';

const tableRows = [
	{
		from: '04-07-2023 / 16:05',
		endDate: '04-07-2023 / 16:05',
		companyNameOrgNumber: 'randomname / 1234567',
		type: 'With permit',
		areaCode: 'all areas',
		timeLimits: 'Monday-Friday 08:00-17:00',
		monthlyRate: '216 SEK',
	},
];

export const FirstSection = () => {
	const t = useTranslations('Account-subscriptions');
	return (
		<section>
			{/* //+ =========== Table =========== */}
			<div className="overflow-hidden rounded-lg border border-[#F5F5F5] sm:overflow-x-auto md:overflow-x-auto">
				<table className="w-full">
					<thead className="bg-[#F9FAFB]">
						<tr>
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
							<th className="border border-l-0 border-t-0 border-[#F5F5F5] px-3 py-[14px] text-left text-[12px] font-normal text-gray-900">
								{t('table-header-6')}
							</th>
							<th className="border border-l-0 border-t-0 border-[#F5F5F5] px-3 py-[14px] text-left text-[12px] font-normal text-gray-900">
								{t('table-header-7')}
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
									<td className="border border-[#F5F5F5] px-3 py-5 text-left">
										<span>{row.from}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-left">
										<span>{row.endDate}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-left">
										<span>{row.companyNameOrgNumber}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-left">
										<span>{row.type}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-left">
										<span>{row.areaCode}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-left">
										<span>{row.timeLimits}</span>
									</td>
									<td className="border border-[#F5F5F5] px-3 py-5 text-left">
										<span>{row.monthlyRate}</span>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			{/* //$ =========== Table =========== */}
			<p className="mt-6 text-sm">{t('botom-text')}</p>
		</section>
	);
};
