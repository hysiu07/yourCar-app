export const daysNumber = (returnDate, pickUpDate) => {
	const returnDateQuery = returnDate;

	if (returnDateQuery) {
		if (Array.isArray(returnDateQuery)) {
			returnDate = new Date(returnDateQuery[0]);
		} else {
			returnDate = new Date(returnDateQuery);
		}
	}

	const pickUpDateQuery = pickUpDate;

	if (pickUpDateQuery) {
		if (Array.isArray(pickUpDateQuery)) {
			pickUpDate = new Date(pickUpDateQuery[0]);
		} else {
			pickUpDate = new Date(pickUpDateQuery);
		}
	}

	const differenceInDays =
		returnDate && pickUpDate
			? Math.floor(
					(returnDate.getTime() - pickUpDate.getTime()) / (1000 * 3600 * 24)
			  )
			: null;

	return differenceInDays;
};
