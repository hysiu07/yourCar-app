import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

type NavBtnPropsType = {
	showMenuBtn: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function NavBtn({ showMenuBtn }: NavBtnPropsType) {
	return (
		<div
			className='nav-btn'
			onClick={() => {
				showMenuBtn();
			}}
		>
			<GiHamburgerMenu size={30} />
		</div>
	);
}
