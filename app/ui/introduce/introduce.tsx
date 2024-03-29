import styles from './introduce.module.css';
import clsx from 'clsx';
import ContactButton from '@/app/ui/contact-button';

export default function Introduce() {
  return (
    <>
      <p className={styles.heading2}>
        {`Nice to meet you!\nI'm `}
        <span className={styles.underline}>Adam Keys.</span>
      </p>
      <p className={clsx(styles['pre-wrap'], styles.sub)}>
        {`Based in the UK, I’m a front-end developer\npassionate about building accessible web apps\nthat users love.`}
      </p>
      <ContactButton>Contact me</ContactButton>
    </>
  );
} 
