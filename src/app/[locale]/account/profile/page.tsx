import {
	FirstSection,
	SecondSection,
	ThirdSection,
} from '@/components/account/profile';
import React from 'react';

const Profile = () => {
	return (
		<>
			<FirstSection />
			<div className="my-12 h-[1px] w-full bg-gray-300"></div>
			<SecondSection />
			<div className="my-12 h-[1px] w-full bg-gray-300"></div>
			<ThirdSection />
		</>
	);
};

export default Profile;
