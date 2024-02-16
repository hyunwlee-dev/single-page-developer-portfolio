import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { SocialName } from "@/app/definitions";
import GithubIcon from '/public/images/icon-github.svg';
import FrontendMentorIcon from '/public/images/icon-frontend-mentor.svg';
import LinkedInIcon from '/public/images/icon-linkedin.svg';
import TwitterIcon from '/public/images/icon-twitter.svg';
import Link from 'next/link';
import clsx from "clsx";
import styles from './social-list.module.css';


interface IListProps extends HTMLAttributes<HTMLUListElement> { }

interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: SocialName;
  href?: string;
}

const icons = {
  github: <GithubIcon />,
  'frontend-mentor': <FrontendMentorIcon />,
  linkedin: <LinkedInIcon />,
  twitter: <TwitterIcon />
};

export default function SocialList({ className, children }: IListProps) {
  return (
    <ul className={clsx(styles.list, className)}>{children}</ul>
  );
}

function Item({ icon, href }: ILinkProps) {
  return (
    <li className={styles.item}>
      <Link
        href={href || '#'}
        target={'_blank'}
        title={icon}
        className={styles.link}
      >
        {icons[icon]}
      </Link>
    </li>
  );
}

SocialList.Item = Item;
