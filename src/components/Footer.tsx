import {
	FaceBookIcon,
	GooglePlayButton,
	InstagramIcon,
	Logo,
} from '@/elements';
import { AppStoreButton } from '@/elements';
import { LinkedInIcon } from '@/elements/LinkedInIcon';
import { cn } from '@/tools/utils/cn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
	const t = useTranslations('Footer');
	const linksFirstColumn = [
		{
			title: t('For-those-who-park'),
			href: '#',
		},
		{
			title: t('How-PARKIO-app-works'),
			href: '#',
		},
		{
			title: t('Short-time-parking'),
			href: '#',
		},
		{
			title: t('Digital-permit'),
			href: '#',
		},
		{
			title: t('Business-parking'),
			href: '#',
		},
		{
			title: t('Family-account'),
			href: '#',
		},
		{
			title: t('Guest-parking'),
			href: '#',
		},
		{
			title: t("Resident's-parking"),
			href: '#',
		},
		{
			title: t('SMS-parking'),
			href: '#',
		},
	];
	const linksSecondColumn = [
		{
			title: t('For-those-who-own-parking-spaces'),
			href: '#',
		},
		{
			title: t('Parking-for-municipalities-and-property-owners'),
			href: '#',
		},
	];
	const linksThirdColumn = [
		{
			title: t('general'),
			href: '#',
		},
		{
			title: t('about-us'),
			href: '#',
		},
		{
			title: t('faq'),
			href: '#',
		},
		{
			title: t('contact-us'),
			href: '#',
		},
	];

	const bottomLinks = [
		{
			title: t('terms-service-app'),
			href: '#',
		},
		{
			title: t('terms-service-business-parking'),
			href: '#',
		},
		{
			title: t('privacy-policy'),
			href: '#',
		},
		{
			title: t('cookie-policy'),
			href: '#',
		},
		{
			title: t('legal-notice'),
			href: '#',
		},
		{
			title: t('GRPD'),
			href: '#',
		},
	];
	return (
		<footer className="flex w-full justify-center bg-footerBackground px-[120px] pb-6 pt-16">
			<div className="w-full max-w-screen-xl">
				<nav className="flex justify-between">
					<Logo color="#fff" />
					<ul className="flex w-[190px] flex-col gap-2">
						{linksFirstColumn.map(({ href, title }, idx) =>
							idx === 0 ? (
								<li key={idx} className="p-2">
									<p className="text-[#fff]">{title}</p>
								</li>
							) : (
								<li key={idx} className="p-2">
									<Link
										className={
											' text-[#ffffff99] transition-all duration-300 ease-in-out hover:text-gradient-3'
										}
										href={href}
									>
										{title}
									</Link>
								</li>
							),
						)}
					</ul>
					<ul className="flex w-[288px] flex-col gap-2">
						{linksSecondColumn.map(({ href, title }, idx) =>
							idx === 0 ? (
								<li key={idx} className="p-2">
									<p className=" text-[#fff]">{title}</p>
								</li>
							) : (
								<li key={idx} className="p-2">
									<Link
										className={
											'text-[#ffffff99] transition-all duration-300 ease-in-out hover:text-gradient-3'
										}
										href={href}
									>
										{title}
									</Link>
								</li>
							),
						)}
					</ul>
					<ul className="flex w-[112px] flex-col gap-2">
						{linksThirdColumn.map(({ href, title }, idx) =>
							idx === 0 ? (
								<li key={idx} className="p-2">
									<p key={idx} className=" text-[#fff]">
										{title}
									</p>
								</li>
							) : (
								<li key={idx} className="p-2">
									<Link
										className={
											' text-[#ffffff99] transition-all duration-300 ease-in-out hover:text-gradient-3'
										}
										key={idx}
										href={href}
									>
										{title}
									</Link>
								</li>
							),
						)}
					</ul>
					<div className="flex w-[337px] flex-col py-2">
						<div className="flex flex-col gap-2">
							<p className="px-2 pb-2 text-xl font-bold text-[#fff]">
								{t('subscribe-to-our-newsletter')}
							</p>
							<p className="p-2 text-[#fff]">{t('stay-in-the-loop')}</p>
						</div>
						<form className="mt-6 flex items-center gap-4 pl-2">
							<input
								placeholder="Email"
								type="email"
								className={cn('form-input form-input_black h-11 w-[284px]')}
							/>
							<button className="gradient-chevron" />
						</form>
						<div className="mt-12 flex w-full gap-4 px-2">
							<AppStoreButton variant={'white'} />
							<GooglePlayButton variant="white" />
						</div>
					</div>
				</nav>
				<div className="my-12 h-[0.5px] w-full bg-[#ffffff66]"></div>
				<div className="flex justify-between">
					<ul className="flex justify-between">
						{bottomLinks.map(({ title, href }, idx) => (
							<li key={idx} className="p-2">
								<Link
									className="text-xs text-[#ffffff99] transition-all duration-300 ease-in-out hover:text-gradient-3"
									href={href}
								>
									{title}
								</Link>
							</li>
						))}
					</ul>
					<div className="flex gap-6">
						<Link href="#">
							<InstagramIcon />
						</Link>
						<Link href="#">
							<FaceBookIcon />
						</Link>
						<Link href="#">
							<LinkedInIcon />
						</Link>
					</div>
				</div>
				<p className="mx-auto mt-12 w-fit text-xs text-[#ffffff99]">
					{t('all-rights-reserverd', { year: '2024' })}
				</p>
			</div>
		</footer>
	);
};
