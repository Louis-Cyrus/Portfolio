import Head from 'next/head';
import Link from 'next/link';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoSass, IoLogoJavascript } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { ImGit, ImGithub } from 'react-icons/im';
import { SiNextdotjs } from 'react-icons/si';
import aboutStyle from '../pages/styles/About.module.scss';

export default function About() {
    return (
        <>
            <Head>
                <title>About me</title>
            </Head>
            <div className={aboutStyle.about}>
                <h2 className={aboutStyle.aboutTitle}>About me</h2>
                <div className={aboutStyle.aboutUnderline}></div>
                <section className={aboutStyle.aboutDescription}>

                    <div className={aboutStyle.aboutParaph}>
                        <p className={aboutStyle.aboutText}>
                            My name is Louis-Cyrus Sanjabi and I am a skilled <span className={aboutStyle.bold}>front-end developer</span> with a specialization in <span className={aboutStyle.bold}>JavaScript</span>. 
                        </p>
                        <p className={aboutStyle.aboutText}>
                        After a professional retraining, studying at <span className={aboutStyle.bold}>OpenClassrooms</span> and <span className={aboutStyle.bold}>O'Clock</span>, I have developed a passion for creating stunning and functional user interfaces that provide the best user experience.
                        Check out some of my work in the <span className={aboutStyle.bold}>Projects section</span>, and <span className={aboutStyle.bold}>my skills</span> on the right.
                        </p>
                        <p className={aboutStyle.aboutText}>
                            I'm open to Job opportunities where I can contribute. If you have a good opportunity don't hesitate <span className={aboutStyle.bold}>to contact me</span>.
                        </p>
                        <div className={aboutStyle.button}>
                            <Link href="/contact">
                                <span className={aboutStyle.aboutLink}>
                                    <button className={aboutStyle.aboutButton}>Contact</button>
                                </span>
                            </Link>
                            <a href="https://drive.google.com/file/d/1g0qC9j4pME9Kc6S4BdtJWPro54uPr_xa/view?usp=sharing" target='_blank'>
                                <button className={aboutStyle.aboutButton}>Curriculum Vitae</button>
                            </a>
                        </div>
                    </div>
                    
                    <div className={aboutStyle.aboutSkills}>
                        <div className={aboutStyle.skills}>
                            <div className={aboutStyle.skill}>HTML <span className={aboutStyle.item}><AiFillHtml5/></span></div>
                            <div className={aboutStyle.skill}>CSS <span className={aboutStyle.item}><IoLogoCss3/></span></div>
                            <div className={aboutStyle.skill}>SASS <span className={aboutStyle.item}><IoLogoSass/></span></div>
                            <div className={aboutStyle.skill}>JavaScript <span className={aboutStyle.item}><IoLogoJavascript/></span></div>
                            <div className={aboutStyle.skill}>React <span className={aboutStyle.item}><GrReactjs/></span></div>
                            <div className={aboutStyle.skill}>Next <span className={aboutStyle.item}><SiNextdotjs/></span></div>
                            <div className={aboutStyle.skill}>GIT <span className={aboutStyle.item}><ImGit/></span></div>
                            <div className={aboutStyle.skill}>Github <span className={aboutStyle.item}><ImGithub/></span></div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}