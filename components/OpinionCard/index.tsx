import React from 'react';
import { FaRegStar } from 'react-icons/fa';

export default function OpinionCard({ mark, img, text, author }) {
	return (
		<div className='opinion-card'>
			<img src={img} alt='user-img' />

			<div className='text-content'>
				<p className='contain-opinion'>{text}</p>
				<h4 className='name-author'>{author}</h4>
				<span className='rate-star'>
					<FaRegStar size={30} className='star' />
					{mark} / 5
				</span>
			</div>
		</div>
	);
}
