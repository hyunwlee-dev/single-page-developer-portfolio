import { HTMLAttributes } from 'react';
import styles from './introduce.module.css';

interface IProps extends HTMLAttributes<HTMLUListElement> { }

export default function SkillfulCard({ children }: IProps) {
  return (
    <ul className={styles.skillful}>
      {children}
    </ul>
  );
}

function Item({ skill, year }: { skill: string, year: number }) {
  return (
    <li className={styles.item}>
      <p className={styles.skill}>{skill}</p>
      <p>{`${year} Years Experience`}</p>
    </li>
  );
}

SkillfulCard.Item = Item;
