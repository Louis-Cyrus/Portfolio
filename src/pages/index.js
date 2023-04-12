import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Home from './home';

export default function Main() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Home/>
    </>
  );
}