import BaseLayout from '@/components/BaseLayout';
import Barands from '@/components/MainView/Brands';
import Header from '@/components/MainView/Header';
import HowWork from '@/components/MainView/HowWork';
import WhyUs from '@/components/MainView/WhyUs';
import MostPopular from '@/components/MainView/MostPopular';
import Testimonials from '@/components/MainView/Testimonials';

export default function Home() {
	return (
		<BaseLayout>
			<main>
				<Header />
				<Barands />
				<HowWork />
				<WhyUs />
				<MostPopular />
				<Testimonials />
			</main>
		</BaseLayout>
	);
}
