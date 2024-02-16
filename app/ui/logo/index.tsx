import Link from 'next/link';
import styles from './logo.module.css';
import { AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
}

export default function Logo({ className, ...props }: IProps) {
  return (
    <Link
      href={'/'}
      className={clsx(styles.logo, className)}
      {...props}
    >
      <h1 className={styles.heading1}>
        adamkeys
      </h1>
    </Link>
  );
}
