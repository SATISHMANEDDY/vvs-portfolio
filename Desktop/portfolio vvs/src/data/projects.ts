export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  note?: string;
  technologies: string[];
  status: string;
  statusColor: 'blue' | 'orange' | 'green';
  githubUrl?: string;
  liveUrl?: string;
  team?: string[];
  archFlow?: string[];
  gallery?: { src: string; alt: string; label: string }[];
  brief?: {
    domain: string;
    overview: Array<string | { text: string; href: string }>;
    contributions: Array<string | { text: string; href: string }>;
    technologyStack: {
      label: string;
      items: Array<string | { text: string; href: string }>;
    }[];
    testing: string[];
    objective: string;
    focus: string;
    references: { text: string; href: string }[];
  };
}

import cfdCar from '../assets/images/aws-hpc-cfd-car.png';
import cfdFlow from '../assets/images/aws-hpc-flow.png';
import cfdWake from '../assets/images/aws-hpc-wake.png';
import awsConsole from '../assets/images/aws-hpc-console.png';

export const projects: Project[] = [
  {
    id: 'aws-hpc',
    number: '01',
    title: 'Automated Event-Driven AWS HPC Cluster Provisioning for On-Demand CFD Simulations',
    category: 'CLOUD INFRASTRUCTURE / DEVOPS',
    description:
      'A completed event-driven AWS workflow that provisions temporary high-performance computing infrastructure for on-demand CFD simulations. Simulation inputs trigger the pipeline, workloads run across the provisioned cluster, results are stored, and resources are released after execution.',
    note: 'Completed implementation with CFD visualizations and an operational AWS HPC environment.',
    technologies: ['AWS S3', 'AWS Lambda', 'Amazon SQS', 'Terraform', 'AWS ParallelCluster', 'Amazon EC2', 'Ubuntu / Linux'],
    status: 'COMPLETED — IMPLEMENTED',
    statusColor: 'green',
    archFlow: ['S3 Upload', 'Lambda', 'SQS', 'Terraform', 'HPC Cluster', 'Simulation', 'Results → S3'],
    gallery: [
      { src: cfdCar, alt: 'CFD simulation visualizing airflow around a car', label: 'CFD / AUTOMOTIVE FLOW' },
      { src: cfdFlow, alt: 'Diagram showing fully developed channel flow', label: 'FLOW MODEL / REFERENCE' },
      { src: cfdWake, alt: 'CFD wake visualization behind a cylindrical body', label: 'WAKE ANALYSIS / VECTOR FIELD' },
      { src: awsConsole, alt: 'AWS EC2 console showing the HPC cluster instances', label: 'AWS CONSOLE / CLUSTER STATUS' },
    ],
    brief: {
      domain: 'Cloud Computing | High Performance Computing | Computational Fluid Dynamics | DevOps',
      overview: [
        {
          text: 'Designed and developed an automated, event-driven cloud HPC platform for executing Computational Fluid Dynamics (CFD) simulations on demand using OpenFOAM and Amazon Web Services (AWS).',
          href: 'https://www.openfoam.com/',
        },
        {
          text: 'The platform integrates AWS Lambda, Amazon SQS FIFO, AWS Step Functions and AWS Batch to automate simulation job validation, asynchronous queuing, workflow orchestration and computational execution. Docker provides a consistent runtime environment, while Amazon S3 and Amazon DynamoDB manage simulation artifacts, job metadata and execution status.',
          href: 'https://aws.amazon.com/',
        },
        'The system incorporates reliability mechanisms including SHA-256 checksum verification, job deduplication, execution timeouts, conditional state updates, failure logging and recovery handling. It also supports MPI-based parallel simulation execution.',
        'Infrastructure provisioning is defined through AWS CloudFormation, with Python implementing the application control and worker components.',
      ],
      contributions: [
        'Designed an event-driven architecture for on-demand CFD workload execution using AWS.',
        'Implemented asynchronous job processing using Amazon SQS FIFO.',
        'Developed automated workflow orchestration using AWS Step Functions.',
        'Integrated AWS Batch for managed computational job scheduling.',
        'Containerized OpenFOAM simulation workloads using Docker.',
        'Implemented Python-based job validation, execution and recovery logic.',
        'Integrated Amazon S3-based input and output management with SHA-256 checksum verification.',
        'Implemented Amazon DynamoDB-based job tracking and execution-state management.',
        'Incorporated fault-tolerance, duplicate-processing prevention and failure-handling mechanisms.',
        'Developed infrastructure provisioning templates using AWS CloudFormation.',
        'Integrated MPI support for parallel computational workloads.',
        'Utilized Amazon CloudWatch for logging and monitoring.',
      ],
      technologyStack: [
        {
          label: 'Cloud Infrastructure',
          items: ['AWS EC2', 'AWS Batch', 'AWS Lambda', 'AWS Step Functions', 'Amazon SQS', 'Amazon S3', 'Amazon DynamoDB', 'Amazon CloudWatch'],
        },
        {
          label: 'Scientific Computing',
          items: [
            { text: 'OpenFOAM', href: 'https://www.openfoam.com/' },
            { text: 'Computational Fluid Dynamics (CFD)', href: 'https://www.openfoam.com/documentation/overview' },
            { text: 'Message Passing Interface (MPI)', href: 'https://www.mpi-forum.org/' },
          ],
        },
        {
          label: 'Development',
          items: [{ text: 'Python', href: 'https://www.python.org/' }],
        },
        {
          label: 'Infrastructure & DevOps',
          items: ['Docker', 'AWS CloudFormation', 'Infrastructure as Code (IaC)'],
        },
      ],
      testing: [
        'Python automated testing',
        'Input validation',
        'Checksum verification',
        'Duplicate-job handling',
        'Failure and recovery testing',
      ],
      objective:
        'To simplify scientific computing by providing an automated, scalable and reproducible cloud-based execution environment for CFD simulations, reducing manual infrastructure management and enabling demand-driven access to computational resources.',
      focus:
        'Event-driven architecture, automated HPC provisioning, containerized scientific workloads, distributed job orchestration and cloud resource management.',
      references: [
        { text: 'AWS Batch – HPC Workloads', href: 'https://docs.aws.amazon.com/batch/latest/userguide/multi-node-parallel-jobs.html' },
        { text: 'AWS Step Functions – Workflow Orchestration', href: 'https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html' },
        { text: 'Amazon SQS – Message Queuing', href: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html' },
        { text: 'OpenFOAM – CFD Documentation', href: 'https://www.openfoam.com/documentation/overview' },
        { text: 'Docker – Containerization', href: 'https://docs.docker.com/' },
        { text: 'MPI Forum – Parallel Computing Standards', href: 'https://www.mpi-forum.org/docs/' },
        { text: 'AWS CloudFormation – Infrastructure as Code', href: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html' },
      ],
    },
  },
  {
    id: 'diabetes-prediction',
    number: '02',
    title: 'AI Diabetes Prediction System',
    category: 'ARTIFICIAL INTELLIGENCE / FULL STACK',
    description:
      'A machine-learning-based application that predicts diabetes risk using input health-related features. The project combines a prediction model with a web interface and backend services.',
    technologies: ['Python', 'Random Forest', 'Next.js', 'FastAPI', 'PostgreSQL'],
    status: 'COMPLETED — IMPLEMENTED',
    statusColor: 'green',
  },
  {
    id: 'college-portal',
    number: '03',
    title: 'College Admission and Information Portal',
    category: 'FULL-STACK DEVELOPMENT',
    description:
      'A MERN-stack web application designed to organize college admission information, academic programs, and student-facing information through a centralized portal.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    status: 'COMPLETED — IMPLEMENTED',
    statusColor: 'green',
  },
  {
    id: 'ecart',
    number: '04',
    title: 'Online E-cart System',
    category: 'JAVA / BACKEND DEVELOPMENT',
    description:
      'A Java-based online shopping application developed as a team project, focusing on core e-commerce workflows and software development fundamentals.',
    technologies: ['Java'],
    status: 'TEAM PROJECT',
    statusColor: 'green',
    team: ['Satish Maneddy', 'Gowtham Reddy', 'K. Nripesh Babu', 'Vinay Reddy'],
  },
  {
    id: 'fashion-trends',
    number: '05',
    title: 'Fashion Trend Analysis Using Sales Data',
    category: 'DATA SCIENCE / MACHINE LEARNING',
    description:
      'A data analysis project using a sales dataset of approximately 700 records and 11 attributes to explore customer and product patterns.',
    technologies: ['Python', 'K-Means Clustering', 'Apriori Algorithm', 'MLxtend', 'Weka'],
    status: 'PROJECT / ANALYSIS',
    statusColor: 'blue',
  },
  {
    id: 'mental-health',
    number: '06',
    title: 'Mental Health Detection Using Voice and Social Text',
    category: 'AI / NLP',
    description:
      'An experimental project exploring mental-health-related signals through text analysis and voice characteristics such as tone and pitch. It combines natural language processing with voice-feature analysis.',
    note: 'This is an experimental research project, not a clinically validated diagnostic system.',
    technologies: ['Python', 'Flask', 'NLP', 'Voice-Feature Analysis'],
    status: 'EXPERIMENTAL / RESEARCH',
    statusColor: 'orange',
  },
];

export interface ArchiveProject {
  title: string;
  category: string;
  status: string;
}

export const archiveProjects: ArchiveProject[] = [
  {
    title: 'Patent Drafting Assistant',
    category: 'AI / TOOLING',
    status: 'CONCEPT / EARLY EXPLORATION',
  },
  {
    title: 'Airport Digital Twin — Cloud Concept',
    category: 'CLOUD / SIMULATION',
    status: 'CONCEPTUAL STUDY',
  },
];
