import '@/styles/globals.scss';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import type { AppProps } from 'next/app';

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<Provider store={store}>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</Provider>
	);
}
