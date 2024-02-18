import Container from "@/app/ui/container";
import Projects from "@/app/ui/projects/projects";
import Image from "next/image";

const experiences = [
  {
    image: <Image src='/images/thumbnail-project-1-large.webp' width={540} height={400} alt='' />,
    title: 'design portfolio', skills: ['html', 'css'],
    links: { project: '#', code: '#' }
  },
  {
    image: <Image src='/images/thumbnail-project-2-large.webp' width={540} height={400} alt='' />,
    title: 'e-learning landing page', skills: ['html', 'css'],
    links: { project: '#', code: '#' }
  },
  {
    image: <Image src='/images/thumbnail-project-3-large.webp' width={540} height={400} alt='' />,
    title: 'todo web app', skills: ['html', 'css', 'javascript'],
    links: { project: '#', code: '#' }
  },
  {
    image: <Image src='/images/thumbnail-project-4-large.webp' width={540} height={400} alt='' />,
    title: 'entertainment web app', skills: ['html', 'css', 'javascript'],
    links: { project: '#', code: '#' }
  },
  {
    image: <Image src='/images/thumbnail-project-5-large.webp' width={540} height={400} alt='' />,
    title: 'memory game', skills: ['html', 'css', 'javascript'],
    links: { project: '#', code: '#' }
  },
  {
    image: <Image src='/images/thumbnail-project-6-large.webp' width={540} height={400} alt='' />,
    title: 'art gallery showcase', skills: ['html', 'css', 'javascript'],
    links: { project: '#', code: '#' }
  }

];
export default function ProjectsContainer() {
  return (
    <Container
      as={'section'}
    >
      <Projects experiences={experiences} />
    </Container>
  );
}
