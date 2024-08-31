export interface CVDetailedResponse {
  id: number;
  title: string;
  userId: number;
  user?: User;
  profiles?: Profile[];
  address?: Address[];
  educations?: Education[];
  skills?: Skill[];
  languages?: Language[];
  workExperiences?: WorkExperience[];
}

export interface CVListResponse {
  id: number;
  title: string;
}

// Will be put in its own fodler and file in future
export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface User {
  id: number;
  email: string;
  password: string;
  username: string;
  role: Role;
  verified: boolean;
  verificationToken?: string | null;
  resetPasswordToken?: string | null;
  resetPasswordExpires?: Date | null;
  profiles?: Profile[];
  educations?: Education[];
  skills?: Skill[];
  languages?: Language[];
  workExperiences?: WorkExperience[];
  cvs?: CVDetailedResponse[];
}

export interface Profile {
  id: number;
  firstName: string;
  lastName: string;
  profileImage?: string | null;
  profileSummary?: string | null;
  userId: number;
  user: User;
  cvs?: CVDetailedResponse[];
  // CHANGE THIS TO AN OWN TYPE
  contacts: {
    type: string;
    link: string;
  }[];
}

export interface Address {
  id: number;
  street: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
  userId: number;
  user: User;
  cvs?: CVDetailedResponse[];
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  startMonth: number;
  startYear: number;
  endMonth: number;
  endYear: number;
  additionalInfo: string | null;
  userId: number;
  user: User;
  cvs: CVDetailedResponse[];
}

export interface Skill {
  id: number;
  skillName: string;
  skillLevel: number;
  userId: number;
  user: User;
  cvs?: CVDetailedResponse[];
}

export interface Language {
  id: number;
  language: string;
  languageLevel: number;
  userId: number;
  user: User;
  cvs?: CVDetailedResponse[];
}

export interface WorkExperience {
  id: number;
  companyName: string;
  position: string;
  startMonth: number;
  startYear: number;
  endMonth: number;
  endYear: number;
  workDescription: string;
  userId: number;
  user: User;
  cvs?: CVDetailedResponse[];
}
