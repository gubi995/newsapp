import Amplify from 'aws-amplify';

import awsExports from '../aws-exports';
import Layout from '../components/Layout';

import '../styles/globals.css';

Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
