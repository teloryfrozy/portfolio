export interface Experience {
    country: string;
    company: string;
    role: string;
    startDate: Date;
    endDate?: Date;
    tasks: string[];
    technologies: string[];
    website?: string;
    logo: string;
}

export interface Education {
    country: string;
    organization: string;
    degree: string;
    startDate: Date;
    endDate: Date;
    duration: string;
    courses: string[];
    website?: string;
    logo: string;
}

interface Link {
    text: string;
    link: string;
}

export interface Project {
    url: string
    title: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    advancedDescription: string;
    tasks: string[];
    details: string[];
    skills: string[];
    images: string[];
    links?: Link[];
}

export interface Report {
    title: string;
    date: Date;
    description: string;
    filename: string;
}
