import Head from 'next/head';
import Header from './Header/header';
import Footer from './Footer/footer';
import styles from './layout.module.scss';
import sunny from '../../public/images/sunny.png'

const name = 'Louis-Cyrus Sanjabi';
export const siteTitle = 'LC Sanjabi portfolio';

export default function Layout({ children}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Welcome to my portfolio. I'm a Front-End Developer using Javascript, React.JS and Next.JS. Hope you will enjoy it and don't hesitate to contact me."
        />
        <meta
          property="og:image"
          content={sunny}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
}