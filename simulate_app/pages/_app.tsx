import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../component/Layout'
import { wrapper } from '../redux/Store';
import { NextPage } from 'next';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <>  
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}
export default MyApp;
// export default wrapper.withRedux(MyApp);
