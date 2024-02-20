import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

type NavBtnPropsType = {
	showMenuHandler: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function NavBtn({ showMenuHandler }: NavBtnPropsType) {
	return (
		<div
			className='nav-btn'
			onClick={() => {
				showMenuHandler(true);
			}}
		>
			<GiHamburgerMenu size={30} />
		</div>
	);
}
