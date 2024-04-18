'use client';

import clsx from 'clsx';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';

export const Select = () => {
	const [open, setOpen] = useState(false);
	const [isPending, startTransition] = useTransition();
	const localeActive = useLocale();
	const router = useRouter();

	const changeLocale = (locale: string) => {
		startTransition(() => {
			router.replace(`/${locale}`);
		});
	};

	return (
		<div className="relative z-[999999] select-none">
			<div
				tabIndex={0}
				onKeyDown={(event) => {
					if (event.key === 'Enter') {
						setOpen(!open);
					}
				}}
				onClick={() => setOpen(!open)}
				className="flex w-full flex-row gap-2 transition-all hover:text-gradient-3"
			>
				<Image
					width={24}
					height={24}
					className="h-6 w-6"
					src="/iLangLogo.svg"
					alt="lang-badge.svg"
				/>
				{localeActive === 'en-US' ? 'ENG' : 'SWE'}
				<Image
					width={24}
					height={24}
					className={clsx('h-6 w-6 transition-all', {
						'-rotate-180': open === true,
					})}
					src="/chevron.svg"
					alt="lang-badge.svg"
				/>
			</div>
			{open && !isPending && (
				<ul className="absolute top-10 flex h-[99px] w-full cursor-default list-none flex-col gap-4 rounded-lg border-x-[1px] border-y-[1px] border-gray-200 bg-[#fff] px-3 py-4 shadow-select">
					<li
						onClick={() => {
							changeLocale('en-US');
						}}
						className="flex cursor-pointer items-center gap-3"
					>
						<p
							onKeyDown={(event) => {
								if (event.key === 'Enter') {
									changeLocale('en-US');
								}
							}}
							tabIndex={0}
							className="checkbox"
						>
							<input
								className="h-full w-full cursor-pointer opacity-0"
								type="checkbox"
								checked={localeActive === 'en-US'}
								onChange={() => changeLocale('en-US')}
								name="agree"
								id="form-agree-checkbox"
							/>
						</p>
						ENG
					</li>
					<li
						onClick={() => {
							changeLocale('sv-SE');
						}}
						className="flex cursor-pointer items-center gap-3"
					>
						<p
							onKeyDown={(event) => {
								if (event.key === 'Enter') {
									changeLocale('sv-SE');
								}
							}}
							tabIndex={0}
							className="checkbox"
						>
							<input
								className="h-full w-full cursor-pointer opacity-0"
								checked={localeActive === 'sv-SE'}
								type="checkbox"
								name="agree"
								id="form-agree-checkbox"
							/>
						</p>
						SWE
					</li>
				</ul>
			)}
		</div>
	);
};
