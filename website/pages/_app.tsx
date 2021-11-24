import type {AppProps} from 'next/app';
import type {VFC} from 'react';
import Head from 'next/head';
import '@shuoink/ui-styles/index.css';

const App: VFC<AppProps> = ({Component, pageProps}) => (
  <>
    <Head>
      <link rel="icon" href="favicon.svg" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
