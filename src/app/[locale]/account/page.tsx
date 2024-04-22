import { redirect } from 'next/navigation';

interface IProps {
	params: {
		locale: string;
	};
}

const Account = ({ params: { locale } }: IProps) =>
	redirect(`/${locale}/account/profile`);

export default Account;
