export interface Profile {
  name: string;
  role: string;
  status: string;
  location: string;
  tagline:string;
  initials:string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  detail?: string;
  stack: string[];
  metric?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  index?: string;
  planet?: string;
  theme?: string;
}

export interface AboutContent {
  bio: string;
  statement: string;
  education: {
    institution: string;
    degree: string;
    period: string;
  };
  highlight: string;
}