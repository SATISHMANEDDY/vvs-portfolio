export interface Certification {
  title: string;
  issuer: string;
  category: string;
  credentialUrl?: string;
  status: 'completed' | 'in-progress' | 'learning';
}

export const certifications: Certification[] = [
  {
    title: 'AWS Academy Cloud Computing',
    issuer: 'AWS Academy',
    category: 'Cloud & Computing',
    status: 'completed',
  },
  {
    title: 'AWS Skill Builder — Hands-on Labs',
    issuer: 'AWS Skill Builder',
    category: 'Cloud & Computing',
    status: 'learning',
  },
  {
    title: 'Google AI Fundamentals',
    issuer: 'Google',
    category: 'Artificial Intelligence',
    status: 'completed',
  },
  {
    title: 'Tata Job Simulation',
    issuer: 'Tata / Forage',
    category: 'Professional Simulations',
    status: 'completed',
  },
  {
    title: 'Commonwealth Bank Job Simulation',
    issuer: 'Commonwealth Bank / Forage',
    category: 'Professional Simulations',
    status: 'completed',
  },
  {
    title: 'Springboard / Coursera Certificates',
    issuer: 'Springboard / Coursera',
    category: 'Additional Learning',
    status: 'completed',
  },
  {
    title: 'University & Technical Training',
    issuer: 'Aditya University',
    category: 'Additional Learning',
    status: 'completed',
  },
];
