import {
	FirstSection,
	SecondSection,
	ThirdSection,
} from '@/components/parking-for-municipalities-and-property-owners';
import React from 'react';

const ParkingForMunicipalitiesAndPropertyOwners = () => {
	return (
		<main className="flex flex-col gap-[120px] py-[120px]">
			<FirstSection />
			<SecondSection />
			<ThirdSection />
		</main>
	);
};

export default ParkingForMunicipalitiesAndPropertyOwners;
