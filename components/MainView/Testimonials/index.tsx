import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

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
					<div className='item'>
						<img src='/img/mercedes.jpg' alt='' />

						<div className='text-content'>
							<p>
								"There are many variations of passages a but Nullam vulputate
								urna, adipiscing vulputate mauris nisl sagittis et. Quisque id
								semper est nullam enim leo in nec laoreet."
							</p>
							<h4>Charlie Johanson</h4>
						</div>
					</div>
					<div className='item'>
						<img src='/img/mercedes.jpg' alt='' />

						<div className='text-content'>
							<p>
								"There are many variations of passages a but Nullam vulputate
								urna, adipiscing vulputate mauris nisl sagittis et. Quisque id
								semper est nullam enim leo in nec laoreet."
							</p>
							<h4>Charlie Johanson</h4>
						</div>
					</div>
					<div className='item'>
						<img src='/img/mercedes.jpg' alt='' />

						<div className='text-content'>
							<p>
								"There are many variations of passages a but Nullam vulputate
								urna, adipiscing vulputate mauris nisl sagittis et. Quisque id
								semper est nullam enim leo in nec laoreet."
							</p>
							<h4>Charlie Johanson</h4>
						</div>
					</div>
				</Slider>
			</div>
		</section>
	);
}
