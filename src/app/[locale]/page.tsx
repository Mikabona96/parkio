import {
	FifthSection,
	FirstSection,
	FourthSection,
	GetParkio,
	ParkingSteps,
	SecondSection,
	ThirdSection,
} from '@/components/home';

export default function Home() {
	return (
		<main className="mt-20 flex flex-col gap-[120px]">
			<FirstSection />
			<ParkingSteps />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<GetParkio />
			<FifthSection />
		</main>
	);
}
