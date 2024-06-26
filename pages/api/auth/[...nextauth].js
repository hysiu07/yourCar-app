import CredentialsProvider from 'next-auth/providers/credentials';
import authorizeUser from '../../../services/users/authorize';
import NextAuth from 'next-auth/next';

export default NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: 'Credentials',
			// `credentials` is used to generate a form on the sign in page.
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				// Add logic here to look up the user from the credentials supplied

				const user = await authorizeUser({
					email: credentials.email,
					password: credentials.password,
				});

				if (user) {
					// Any object returned will be saved in `user` property of the JWT

					return user;
				} else {
					// If you return null then an error will be displayed advising the user to check their details.
					return null;

					// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
				}
			},

			// callbacks: {
			// 	async jwt({ token, user }) {
			// 		if (user) {

			// 			token.name = user.username;
			// 			token.role = user.role;
			// 			token.id = user.id;
			// 		}

			// 		return token;
			// 	},

			// 	async session({ session, token }) {
			// 		session.user.role = token.role;
			// 		session.user.id = token.id;

			// 		return session;
			// 	},
			// },
		}),
	],
	callbacks: {
		async jwt({ token, account, user }) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token;

				token.name = user.username;
				token.role = user.role;
				token.id = user.id;
			}
			return token;
		},
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token from a provider.
			session.accessToken = token.accessToken;
			session.user.role = token.role;
			session.user.id = token.id;
			return session;
		},
	},
});
