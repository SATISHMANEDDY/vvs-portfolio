export interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  status: string;
  featured?: boolean;
}

export const achievements: Achievement[] = [
  {
    title: 'ELITE CHASETHON',
    subtitle: 'Winner — Elite Chasethon, GITAM University, Visakhapatnam',
    description: 'Competed and won the Elite Chasethon event at GITAM University.',
    status: 'WINNER',
    featured: true,
  },
  {
    title: 'GOOGLE STUDENT AMBASSADOR PROGRAM 2026',
    subtitle: 'Final Shortlist',
    description: 'Selected for the final shortlist of the Google Student Ambassador Program 2026.',
    status: 'FINAL SHORTLIST',
  },
  {
    title: 'AWS COMMUNITY / STUDENT BUILDER ACTIVITIES',
    subtitle: 'Application / Profile / Contributions',
    description: 'Active involvement in AWS learning pathways, community activities, and student builder contributions.',
    status: 'APPLICATION / CONTRIBUTIONS',
  },
];
