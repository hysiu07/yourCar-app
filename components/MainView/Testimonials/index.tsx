import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaRegStar } from 'react-icons/fa';

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
					<div className='opinion-card'>
						<img src='img/users/charlie.jpg' alt='' />

						<div className='text-content'>
							<p className='contain-opinion'>
								"There are many variations of passages a but Nullam vulputate
								urna, adipiscing vulputate mauris nisl sagittis et. Quisque id
								semper est nullam enim leo in nec laoreet."
							</p>
							<h4 className='name-author'>Charlie Johanson</h4>
							<span className='rate-star'>
								<FaRegStar size={30} className='star' />
								4.6 / 5
							</span>
						</div>
					</div>
					<div className='opinion-card'>
						<img src='/img/mercedes.jpg' alt='' />

						<div className='text-content'>
							<p className='contain-opinion'>
								"There are many variations of passages a but Nullam vulputate
								urna, adipiscing vulputate mauris nisl sagittis et. Quisque id
								semper est nullam enim leo in nec laoreet."
							</p>
							<h4 className='name-author'>Charlie Johanson</h4>
							<span className='rate-star'>
								<FaRegStar size={30} className='star' />
								4.6 / 5
							</span>
						</div>
					</div>
				</Slider>
			</div>
		</section>
	);
}
