import '@/styles/globals.scss';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
// import store from '@/redux/store';
import type { AppProps } from 'next/app';
import { persistor, store } from '../redux/configureStorePersist';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<Provider store={store}>
			<SessionProvider session={session}>
				<PersistGate loading={null} persistor={persistor}>
					<Component {...pageProps} />
				</PersistGate>
			</SessionProvider>
		</Provider>
	);
}
