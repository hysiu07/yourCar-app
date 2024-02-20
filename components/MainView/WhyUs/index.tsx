import React from 'react';

export default function WhyUs() {
	return (
		<section className='why-us' id='why-us'>
			<div className='why-us__img'>
				<div className='background-map'>
					<div className='car-img'></div>
				</div>
			</div>
			<div className='why-us__text-container'>
				<h2>WHY CHOOSE US</h2>
				<h3>We offer the best experience with our rental deals.</h3>
				<div className='advantages-box'>
					<div className='advantage element'>
						<div className='img'>
							<img src='/img/icons/wallet.svg' alt='wallet-icon' />
						</div>
						<div className='text'>
							<h4>Best price guaranteed</h4>
							<p>Find a lower price? We’ll refund you 100% of the difference</p>
						</div>
					</div>
					<div className='advantage element'>
						<div className='img'>
							<img src='/img/icons/user.svg' alt='user-icon' />
						</div>
						<div className='text'>
							<h4>Experience driver</h4>
							<p>
								Don’t have a driver? Don’t worry, we have many experienced
								driver for you.
							</p>
						</div>
					</div>
					<div className='advantage element'>
						<div className='img'>
							<img src='/img/icons/time.svg' alt='time-icon' />
						</div>
						<div className='text'>
							<h4>24-hour car delivery</h4>
							<p>
								Book your car anytime and we will deliver it directly to you.
							</p>
						</div>
					</div>
					<div className='advantage element'>
						<div className='img'>
							<img src='/img/icons/chat.svg' alt='chat-icon' />
						</div>
						<div className='text'>
							<h4>24/7 technical support</h4>
							<p>
								Have a question? Contact Carentall support anytime when you have
								problem.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
