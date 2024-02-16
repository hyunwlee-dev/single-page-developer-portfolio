import Button from '@/app/ui/button';
import styles from './introduce.module.css';
import clsx from 'clsx';

export default function Introduce() {
  return (
    <>
      <h2 className={styles.heading2}>
        {`Nice to meet you!\nI'm `}
        <span className={styles.underline}>Adam Keys.</span>
      </h2>
      <p className={clsx(styles['pre-wrap'], styles.sub)}>
        {`Based in the UK, I’m a front-end developer\npassionate about building accessible web apps\nthat users love.`}
      </p>
      <Button>Contact me</Button>
    </>
  );
} 
