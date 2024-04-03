import {
	FirstSection,
	ParkingSteps,
	SecondSection,
	ThirdSection,
} from '@/components/home';

export default function Home() {
	return (
		<main className="flex flex-col gap-[120px]">
			<FirstSection />
			<ParkingSteps />
			<SecondSection />
			<ThirdSection />
			<SecondSection />
		</main>
	);
}
