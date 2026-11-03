export interface JournalEntry {
  number: string;
  title: string;
  category: string;
  description: string;
  status: 'published' | 'draft' | 'upcoming';
  url?: string;
}

export const journalEntries: JournalEntry[] = [
  {
    number: '001',
    title: 'Deploying Applications on AWS EC2',
    category: 'CLOUD',
    description: 'Setting up and configuring EC2 instances for application deployment, including security groups and key pairs.',
    status: 'draft',
  },
  {
    number: '002',
    title: 'Understanding VPCs and Subnet Architecture',
    category: 'NETWORKING',
    description: 'Exploring virtual private cloud design, subnet segmentation, and routing tables in AWS.',
    status: 'draft',
  },
  {
    number: '003',
    title: 'Working with IAM Users and Permissions',
    category: 'SECURITY',
    description: 'Managing identity and access management policies, roles, and permission boundaries.',
    status: 'draft',
  },
  {
    number: '004',
    title: 'Linux Administration and Shell Scripting',
    category: 'LINUX',
    description: 'System administration tasks, bash scripting, and automating common server operations.',
    status: 'draft',
  },
  {
    number: '005',
    title: 'S3 Storage and Static Website Hosting',
    category: 'STORAGE',
    description: 'Using S3 for file storage, static website hosting, and bucket policy configuration.',
    status: 'draft',
  },
  {
    number: '006',
    title: 'Event-Driven AWS Architecture',
    category: 'ARCHITECTURE',
    description: 'Designing serverless event-driven workflows with Lambda, SQS, and S3 triggers.',
    status: 'upcoming',
  },
  {
    number: '007',
    title: 'Terraform Infrastructure Provisioning',
    category: 'DEVOPS',
    description: 'Infrastructure as code using Terraform for repeatable and version-controlled deployments.',
    status: 'upcoming',
  },
  {
    number: '008',
    title: 'Exploring Cloud-Based HPC Workflows',
    category: 'HPC',
    description: 'Investigating high-performance computing cluster provisioning on cloud platforms.',
    status: 'upcoming',
  },
  {
    number: '009',
    title: 'Learning Java Backend Development',
    category: 'BACKEND',
    description: 'Building backend services with Java, understanding OOP patterns and API development.',
    status: 'upcoming',
  },
];
