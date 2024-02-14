import BaseLayout from '@/components/BaseLayout';
import Barands from '@/components/MainView/Brands';
import Header from '@/components/MainView/Header';
import HowWork from '@/components/MainView/HowWork';
import WhyUs from '@/components/MainView/WhyUs';

export default function Home() {
	return (
		<BaseLayout>
			<main>
				<Header />
				<Barands />
				<HowWork />
				<WhyUs />
			</main>
		</BaseLayout>
	);
}
