import 'tailwindcss/tailwind.css';
import '@material-tailwind/react/tailwind.css';
import Head from 'next/head';
import { Provider } from 'next-auth/client';
import '../style.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Head>
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'
      />
      </Head>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
  </div>
    )
}

export default MyApp
