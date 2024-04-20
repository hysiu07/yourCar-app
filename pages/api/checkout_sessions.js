const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const price = req.body;
			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						price: 'price_1P1XOMIW9HXEwFUkIPC74Iq7',
						quantity: 1,
					},
				],
				mode: 'payment',

				success_url: `https://${process.env.VERCEL}/thanks`,
				cancel_url: `${req.headers.origin}/?canceled=true`,
			});

			res.redirect(303, session.url);
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}
