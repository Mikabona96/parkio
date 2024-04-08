import { SecondSection } from '@/components/home';
import { FirstSection } from '@/components/parkio-solutions';

export default function ParkioSolutions() {
	return (
		<main className="relative mt-[4.8rem] flex w-full flex-col gap-[120px]">
			<FirstSection />
			<div className="mt-[300vh]">
				<SecondSection />
			</div>
		</main>
	);
}
