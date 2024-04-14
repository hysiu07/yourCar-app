import React from 'react';

export default function Order({ order }) {
	return (
		<div
			className='order'
			style={
				order.status === 'not paid'
					? { background: '#8d7e7e80', color: 'white' }
					: { background: 'white' }
			}
		>
			<div className='order-info '>
				<div className='box'>
					<span className='label'>Order ID:</span>
					<span>{order.airtableId}</span>
				</div>
				<div className='box'>
					<span className='label'>User email:</span>
					<span>{order.email[0]}</span>
				</div>
				<div className='box'>
					<span className='label'>User name:</span>
					<span>{order.username[0]}</span>
				</div>
				<div className='box'>
					<span className='label'>Location:</span>
					<span>{order.city}</span>
				</div>
				<div className='box'>
					<span className='label'>Price sum:</span>
					<span>{order.priceSum} USD</span>
				</div>
				<div className='box'>
					<span className='label'>Pick up:</span>
					<span>{order.pickUpDate} </span>
				</div>
				<div className='box'>
					<span className='label'>Retur:</span>
					<span>{order.returDate}</span>
				</div>
				<div className='box'>
					<span className='label'>Status:</span>
					<span>{order.status}</span>
				</div>
			</div>
			<div className='order-info'>
				<div className='box'>
					<span className='label'>Number days:</span>
					<span>{order.numberDays}</span>
				</div>

				<div className='box'>
					<span className='label'>Car</span>
					<span>{order.carName}</span>
				</div>
				<div className='box'>
					<span className='label'>Car price:</span>
					<span>{order.carPrice} USD</span>
				</div>
				<div className='box'>
					<span className='label'>Insurance Type:</span>
					<span>{order.insuranceType}</span>
				</div>
				<div className='box'>
					<span className='label'>Insurance price:</span>
					<span>{order.insurancePrice} USD</span>
				</div>
				<div className='box'>
					<span className='label'>Equipments:</span>
					{order.equipments ? (
						order.equipments.map((eq, index) => {
							return <span key={index}>{eq} </span>;
						})
					) : (
						<span>0</span>
					)}
				</div>
				<div className='box'>
					<span className='label'>Equipments sum:</span>
					{order.equipments ? (
						<span>{order.equipmentsSum} USD</span>
					) : (
						<span>0</span>
					)}
				</div>
			</div>
		</div>
	);
}
