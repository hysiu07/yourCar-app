import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaRegStar } from 'react-icons/fa';
import OpinionCard from '@/components/OpinionCard';

import { testimonials } from '@/services/Testimonials/testimonials';

export default function Testimonials() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<section className='testimonials'>
			<h2>TESTIMONIALS</h2>
			<h3>What people say about us?</h3>
			<div className='slider-container'>
				<Slider {...settings} className='slider'>
					{testimonials.map((opinion,index) => (
						<OpinionCard
							key={index}
							mark={opinion.mark}
							img={opinion.img}
							text={opinion.text}
							author={opinion.name}
						/>
					))}
				</Slider>
			</div>
		</section>
	);
}
