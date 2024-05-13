import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.css';
import { Footer, Header } from '@/components';
import { NextIntlClientProvider } from '@/providers';
import { AuthProvider } from '@/providers/AuthProvider';
import { ApolloProvider } from '@/providers/ApolloProvider';

const MabryPro = localFont({
	src: [
		{
			path: '../../../public/fonts/Mabry_Pro/MabryPro-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Mabry_Pro/MabryPro-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Mabry_Pro/MabryPro-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Mabry_Pro/MabryPro-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

interface IRootLayoutProps {
	children: React.ReactNode;
	params: {
		locale: string;
	};
}

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<IRootLayoutProps>) {
	return (
		<html lang={locale}>
			<body className={`${MabryPro.className} text-gray-700`}>
				<ApolloProvider>
					{/* //+ NextIntlClientProvider for use in client components */}
					<AuthProvider>
						<NextIntlClientProvider>
							<div className="relative w-full">
								<Header locale={locale} />
								<div className="m-auto h-full max-w-screen-xl">{children}</div>
								<Footer />
							</div>
						</NextIntlClientProvider>
					</AuthProvider>
				</ApolloProvider>
			</body>
		</html>
	);
}
