"use client";
import Container from "@/app/ui/container";
import Projects from "@/app/ui/projects/projects";
import Image from "next/image";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const experiences = [
  {
    title: 'design portfolio', skills: ['html', 'css'],
    links: { project: '#', code: '#' }
  },
  {
    title: 'e-learning landing page', skills: ['html', 'css'],
    links: { project: '#', code: '#' }
  },
  {
    title: 'todo web app', skills: ['html', 'css', 'javascript'],
    links: { project: '#', code: '#' }
  },
  {
    title: 'entertainment web app', skills: ['html', 'css', 'javascript'],
    links: { project: '#', code: '#' }
  },
  {
    title: 'memory game', skills: ['html', 'css', 'javascript'],
    links: { project: '#', code: '#' }
  },
  {
    title: 'art gallery showcase', skills: ['html', 'css', 'javascript'],
    links: { project: '#', code: '#' }
  }
];

const caledExperiences = (laptopReached: boolean) => {
  if (laptopReached) {
    return experiences.map((experience, idx) => (
      {
        image: <Image src={`/images/thumbnail-project-${idx + 1}-large.webp`} width={540} height={400} alt='thumbnail-project-image' />,
        ...experience
      }));
  }
  return experiences.map((experience, idx) => (
    {
      image: <Image src={`/images/thumbnail-project-${idx + 1}-small.webp`} width={342} height={253} alt='thumbnail-project-image' />,
      ...experience
    }));
}

export default function ProjectsContainer() {
  const laptopReached = useMediaQuery(1100);
  return (
    <Container
      as={'section'}
    >
      <Projects experiences={caledExperiences(laptopReached)} />
    </Container>
  );
}
