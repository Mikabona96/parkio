import { FirstSection, ParkingSteps } from '@/components/home';
import { SecondSection } from '@/components/home/section-2';

export default function Home() {
  return (
    <main className="flex flex-col">
      <FirstSection />
      <ParkingSteps />
      <SecondSection />
    </main>
  );
}
