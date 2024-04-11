'use client';
import { Button } from '@/elements';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

export const FirstSection = () => {
	const [checked, setChecked] = useState(false);
	const { locale } = useParams();
	return (
		<section className="flex items-center justify-center py-[120px]">
			<div className="flex flex-col text-center">
				<h1 className="text-[32px] font-bold text-gray-900">
					Welcome to PARKIO!
				</h1>
				<h3 className="mt-4">Create Your Account</h3>
				<form action="" className="mt-8 flex flex-col gap-4">
					<div className="flex gap-4">
						<input
							placeholder="First name"
							type="text"
							className="form-input h-11"
						/>
						<input
							placeholder="Last name"
							type="text"
							className="form-input h-11"
						/>
					</div>
					<input placeholder="Email" type="email" className="form-input h-11" />
					<input
						placeholder="Phone number"
						type="tel"
						className="form-input h-11"
					/>
					<input
						placeholder="Street Address"
						type="text"
						className="form-input h-11"
					/>
					<div className="flex gap-4">
						<input
							placeholder="Post Code"
							type="number"
							className="form-input h-11"
						/>
						<input placeholder="City" type="text" className="form-input h-11" />
					</div>
					<input
						placeholder="Password"
						type="password"
						className="form-input h-11"
					/>
					<input
						placeholder="Confirm password"
						type="password"
						className="form-input h-11"
					/>
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
						I agree to the Terms & Conditions and Privacy Policy
					</div>
					<Button className="max-w-full">Register</Button>
				</form>
				<div className="mt-4 h-[1px] w-full bg-gray-300"></div>
				<Link
					href={`/${locale}/sign-in`}
					className="mt-5 text-start transition-all hover:text-gradient-3"
				>
					Already have an account?
				</Link>
			</div>
		</section>
	);
};
