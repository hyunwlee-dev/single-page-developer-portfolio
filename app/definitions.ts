import { ReactNode } from "react";

export type SocialName = 'github' | 'frontend-mentor' | 'linkedin' | 'twitter';
export type ExperienceType = {
  image: ReactNode,
  title: string,
  skills: string[]
  links: {
    project: () => void,
    code: () => void,
  }
}

