import styles from './footer.module.scss';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className={styles.footer}>
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