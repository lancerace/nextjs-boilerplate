// This default export is required in a new `pages/_app.js` file. It is main app router
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
