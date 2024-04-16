import { cn } from '@/tools/utils/cn';
import React from 'react';

export const ParkingStatus = ({
	status,
}: {
	status: 'active' | 'ended' | 'inactive';
}) => {
	return (
		<span
			className={cn(
				'relative flex w-fit max-w-[102px] rounded-2xl border py-[3px] pl-[22px] pr-2 text-xs before:absolute before:left-[9px] before:top-[50%] before:h-[6px] before:w-[6px] before:translate-y-[-50%] before:rounded-[50%] before:content-[""]',
				{
					'border-[#ABEFC6] bg-[#ECFDF3] text-[#067647] before:bg-[#17B26A]':
						status === 'active',
					'border-[#EAECF0] bg-[#F9FAFB] text-gray-900 before:bg-gray-900':
						status === 'inactive',
					'border-[#FECDCA] bg-[#FEF3F2] text-[#B42318] before:bg-[#B42318]':
						status === 'ended',
				},
			)}
		>
			{status === 'active'
				? 'Active'
				: status === 'inactive'
					? 'Inactive'
					: 'Ended'}
		</span>
	);
};
