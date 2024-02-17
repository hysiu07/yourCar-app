import React from 'react'
import { FaRegStar } from 'react-icons/fa';

export default function OpinionCard() {
  return (
		<div className='item'>
			<img src='img/users/charlie.jpg' alt='' />

			<div className='text-content'>
				<p className='contain-opinion'>
					"There are many variations of passages a but Nullam vulputate urna,
					adipiscing vulputate mauris nisl sagittis et. Quisque id semper est
					nullam enim leo in nec laoreet."
				</p>
				<h4 className='name-author'>Charlie Johanson</h4>
				<span className='rate-star'>
					<FaRegStar size={30} className='star' />
					4.6 / 5
				</span>
			</div>
		</div>
	);
}
