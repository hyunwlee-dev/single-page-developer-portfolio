import { HTMLAttributes } from "react";
import { ExperienceType } from "@/app/definitions";
import Button from "@/app/ui/button";
import styles from './projects.module.css';

interface IProps extends HTMLAttributes<HTMLUListElement> {
}

export default function ProjectsCard({ children }: IProps) {
  return (
    <ul className={styles.card}>
      {children}
    </ul>
  );
}

function Item({ image, title, skills, links }: ExperienceType) {
  return (
    <li className={styles.item}>
      <div className={styles['opacity-wrapper']}>
        {image}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.skills}>
        {skills.map((skill, idx) => <span key={`skill-${title}-${idx}`} className={styles.skill}>{skill}</span>)}
      </div>
      <Button onClick={links.project} className={styles['button-project']}>View Project</Button>
      <Button onClick={links.code} className={styles['button-code']}>View Code</Button>
    </li>
  );
}

ProjectsCard.Item = Item;

