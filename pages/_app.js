import { Suspense } from 'react';
import '../styles/globals.css';
import Loading from './components/loading';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Suspense fallback={Loading}>
        <Component {...pageProps} />
        <Analytics />
      </Suspense>
    </>
  )
}

export default MyApp
