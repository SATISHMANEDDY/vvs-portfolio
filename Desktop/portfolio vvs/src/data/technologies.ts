export interface TechCategory {
  name: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  type: 'project' | 'exploring';
}

export const technologies: TechCategory[] = [
  {
    name: 'Programming & Backend',
    items: [
      { name: 'Java', type: 'project' },
      { name: 'Python', type: 'project' },
      { name: 'JavaScript', type: 'project' },
    ],
  },
  {
    name: 'Web Development',
    items: [
      { name: 'HTML', type: 'project' },
      { name: 'CSS', type: 'project' },
      { name: 'React', type: 'project' },
      { name: 'Node.js', type: 'project' },
      { name: 'Express.js', type: 'project' },
      { name: 'Next.js', type: 'project' },
      { name: 'FastAPI', type: 'project' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    items: [
      { name: 'AWS', type: 'project' },
      { name: 'EC2', type: 'project' },
      { name: 'S3', type: 'project' },
      { name: 'IAM', type: 'project' },
      { name: 'VPC', type: 'exploring' },
      { name: 'Lambda', type: 'project' },
      { name: 'SQS', type: 'project' },
      { name: 'Terraform', type: 'project' },
      { name: 'Linux', type: 'project' },
      { name: 'Ubuntu', type: 'project' },
      { name: 'Apache', type: 'exploring' },
    ],
  },
  {
    name: 'AI & Data',
    items: [
      { name: 'Machine Learning', type: 'project' },
      { name: 'Random Forest', type: 'project' },
      { name: 'K-Means', type: 'project' },
      { name: 'Apriori', type: 'project' },
      { name: 'Natural Language Processing', type: 'project' },
    ],
  },
  {
    name: 'Databases & Tools',
    items: [
      { name: 'MongoDB', type: 'project' },
      { name: 'PostgreSQL', type: 'project' },
      { name: 'Git', type: 'project' },
      { name: 'GitHub', type: 'project' },
      { name: 'VS Code', type: 'project' },
      { name: 'IntelliJ IDEA', type: 'project' },
      { name: 'MobaXterm', type: 'project' },
    ],
  },
];
