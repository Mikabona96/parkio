import {
	FirstSection,
	ParkingSteps,
	SecondSection,
	ThirdSection,
} from '@/components/home';

export default function Home() {
	return (
		<main className="flex flex-col">
			<FirstSection />
			<ParkingSteps />
			<SecondSection />
			<ThirdSection />
		</main>
	);
}
