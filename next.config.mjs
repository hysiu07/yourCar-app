/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		AIRTABLE_API_TOKEN: process.env.AIRTABLE_API_TOKEN,
		AIRTABLE_API_BASE: process.env.AIRTABLE_API_BASE,
	},
	reactStrictMode: true,
	eslint: {
		
		ignoreDuringBuilds: true,
	},
};



export default nextConfig;
