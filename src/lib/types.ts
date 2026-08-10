export interface ProfileStat{
    label:string
    value:string
}

export interface Profile {
  name: string;
  role: string;
  status: string;
  location: string;
  stats: ProfileStat[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  metric?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface AboutContent {
  bio:string
  education:{
    institution: string
    degree: string
    period: string
  }
  highlight: string
}