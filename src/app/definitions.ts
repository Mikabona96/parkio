export type SignupFields = {
	name: string;
	lastname: string;
	email: string;
	phone: number;
	street: string;
	code: number;
	city: string;
	password: string;
	confirmpassword: string;
};

export type SigninFields = {
	email?: string;
	password?: string;
};

export type ReturnedUser = {
	id?: number;
	email?: string;
	firstName?: string;
	lastName?: string;
	phoneNumber?: string;
	streetAddress?: string;
	postalCode?: number;
	city?: string;
};

export type ReturnedCredentials = {
	access_token: string;
	refresh_token: string;
	user: ReturnedUser;
};
