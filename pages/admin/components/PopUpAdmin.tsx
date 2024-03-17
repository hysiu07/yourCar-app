
import React from 'react';
type PopUpAdminProps = {
	text: string;
	name: string;
	handle: () => void;
	closePopUp: (status: boolean) => void;
};

export default function PopUpAdmin({
	text,
	name,
	handle,
	closePopUp,
}: PopUpAdminProps) {
	return (
		<div className='popup-admin'>
			<h4>{text}</h4>
			<h4>{name}</h4>
			<div>
				<button
					onClick={()=>{handle()}}
				>
					Yes
				</button>
				<button
					onClick={() => {
						closePopUp(false);
					}}
				>
					Close
				</button>
			</div>
		</div>
	);
}
