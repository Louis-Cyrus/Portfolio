import styles from './footer.module.scss';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import { TbSquareLetterM } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a href='https://www.malt.fr/profile/louiscyrussanjabi' className={styles.socialMediaItem}>
          <TbSquareLetterM/>
        </a>
        <a href='mailto:louiscyrus.sanjabi@gmail.com' className={styles.socialMediaItem}>
          <AiFillMail/>
        </a>
      </div>
      <p className={styles.footerText}>Created and developped by Louis-Cyrus Sanjabi</p>
      <div className={styles.socialMedia}>
        <a href='https://www.linkedin.com/in/louis-cyrus-sanjabi/' className={styles.socialMediaItem}>
          <AiFillLinkedin/>
        </a>
        <a href='https://github.com/Louis-Cyrus' className={styles.socialMediaItem}>
          <AiFillGithub/>
        </a>
      </div>
    </footer>
  );
}