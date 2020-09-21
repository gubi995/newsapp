import Amplify from 'aws-amplify';
import { ReactQueryDevtools } from 'react-query-devtools';

import awsExports from '../aws-exports';
import Layout from '../components/Layout';

import '../styles/globals.css';

Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Layout>
    </>
  );
}

export default MyApp;
