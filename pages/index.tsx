import BaseLayout from '@/components/BaseLayout';
import Barands from '@/components/MainView/Brands';
import Header from '@/components/MainView/Header';
import HowWork from '@/components/MainView/HowWork';
import WhyUs from '@/components/MainView/WhyUs';
import MostPopular from '@/components/MainView/MostPopular';
import Testimonials from '@/components/MainView/Testimonials';
import getPopularCars from '@/services/cars/getPopularCars';

export const getStaticProps = async () => {
	const specialCars = await getPopularCars();
	return {
		props: {
			specialCars,
		},
	};
};
export default function Home({ specialCars }) {
	return (
		<BaseLayout>
			<main>
				<Header />
				<Barands />
				<HowWork />
				<WhyUs />
				<MostPopular specialCars={specialCars} />
				<Testimonials />
			</main>
		</BaseLayout>
	);
}
