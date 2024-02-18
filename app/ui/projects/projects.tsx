'use client';

import Button from '@/app/ui/button';
import { ProjectsCard } from '@/app/ui/projects';
import { ExperienceType } from '@/app/definitions';
import styles from './projects.module.css';
import { useRouter } from 'next/navigation';

interface IProps extends Omit<ExperienceType, "links"> {
  links: {
    project: string, code: string
  }
}

export default function Projects({ experiences }: { experiences: IProps[] }) {
  const router = useRouter();
  return (
    <>
      <div className={styles.top}>
        <h2 className={styles.xxxl}>Projects</h2>
        <Button>Contact me</Button>
      </div>
      <ProjectsCard>
        {experiences.map(
          ({ image, title, skills, links }) =>
            <ProjectsCard.Item
              key={title}
              image={image}
              title={title}
              skills={skills}
              links={{
                project: () => router.push(`/${links.project}`),
                code: () => router.push(`/${links.code}`)
              }}
            />
        )}
      </ProjectsCard>
    </>
  );
}
