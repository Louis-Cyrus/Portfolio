import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Home from './posts/Home/home';

export default function Main() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <Home/>
    </Layout>
  );
}