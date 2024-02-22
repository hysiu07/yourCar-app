/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		AIRTABLE_API_TOKEN: process.env.AIRTABLE_API_TOKEN,
		AIRTABLE_API_BASE: process.env.AIRTABLE_API_BASE,
	},
	reactStrictMode: true,
};

// module.exports = {
// 	env: {
// 		AIRTABLE_API_TOKEN: process.env.AIRTABLE_API_TOKEN,
// 		AIRTABLE_API_BASE: process.env.AIRTABLE_API_BASE,
// 	},
// };

export default nextConfig;
