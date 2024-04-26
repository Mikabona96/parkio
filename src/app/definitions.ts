export type User = {
	id: number;
	email: string;
	password_hash: string;
	firstName: string;
	lastName: string;
	phoneNumber: number;
	streetAddress: string;
	postalCode: number;
	city: string;
	refresh_token: string;
};

export type ReturnedUser = {
	id: number;
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	streetAddress: string;
	postalCode: number;
	city: string;
};
