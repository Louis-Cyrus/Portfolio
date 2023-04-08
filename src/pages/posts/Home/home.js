import Link from 'next/link';
import homeStyle from './Home.module.scss'

export default function Home() {
  return (
    <div className={homeStyle.Home}>
      <div className={homeStyle.HomeBody}>
        <div className={homeStyle.HomeBodyContainer}>
          <div className={homeStyle.HomeBodyContainerInner}>
            <img src="/images/telechargement.jpeg" alt="background" className={homeStyle.HomeBodyContainerCircle}/>
            <img src="/images/avatar.svg" alt="Me" className={homeStyle.HomeBodyContainerImage} />
          </div>
        </div>
        <div className={homeStyle.HomeBodyContent}>
          <h1 className={homeStyle.HomeBodyContentTitle}>Louis-Cyrus Sanjabi</h1>
          <h3 className={homeStyle.HomeBodyContentSubtitle}>
            Hey I am a front-end developer based in <span className={homeStyle.Paris}>Paris, France</span>.<br/>
            You can see my projects here on my Portfolio</h3>
          <div className={homeStyle.HomeBodyContentButtons}>
            <Link href="/portfolio" download>
              <span className={homeStyle.HomeBodyContentButtonsLink}>
                <button className={homeStyle.HomeBodyContentButtonsButton}>See my projects</button>
              </span>
            </Link>
            <Link href="/contact">
              <span className={homeStyle.HomeBodyContentButtonsLink}>
                <button className={homeStyle.HomeBodyContentButtonsButton}>Contact Me</button>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}