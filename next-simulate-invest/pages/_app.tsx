import '../styles/globals.css'
import type { AppProps as NextAppProps } from 'next/app'
import Layout from '../component/Layout'
import { wrapper } from '../redux/Store';
import { NextComponentType, NextPage } from 'next';
import { FC } from 'react';


type ComponentProp = NextComponentType & {
  getLayout?: () => FC<{}>
}

type AppProps = NextAppProps & { Component: ComponentProp }

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    Component.getLayout || ((page: any) => <Layout>{page}</Layout>)

  return getLayout(<Component {...pageProps} />)
}

// const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {

//   return <>  
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   </>
// }
export default wrapper.withRedux(MyApp);
// export default wrapper.withRedux(MyApp);
