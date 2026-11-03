import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Users, Cloud, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface ExperienceEntry {
  id: string;
  index: string;
  title: string;
  organization: string;
  role: string;
  roleBadge: string;
  period: string;
  description: string;
  icon: typeof Users;
  highlights: string[];
  fieldNote: string;
}

const experiences: ExperienceEntry[] = [
  {
    id: 'dott-connect',
    index: '04.1',
    title: 'Dott.Connect — Aditya University',
    organization: 'Aditya University',
    role: 'Student Team Lead / Event Contributor',
    roleBadge: 'Leadership & Event Lead',
    period: 'Symposium & Tech Showcase',
    description:
      'Led a 4-member student team responsible for organizing, designing, and operating the Cloud & DevOps technical demonstration stall at Aditya University’s flagship Dott.Connect event. Curated live interactive displays explaining cloud computing foundations, containerized workflows, and infrastructure deployment pipelines to visiting peers, faculty, and industry guests.',
    icon: Users,
    highlights: [
      'Led 4-Member Student Team',
      'Cloud & DevOps Live Demonstrations',
      'Interactive Peer Walkthroughs',
      'Aditya University Campus',
    ],
    fieldNote:
      'Managed end-to-end stall logistics, guided team members through presentation topics, and translated complex cloud concepts into clear visual demos for attendees.',
  },
  {
    id: 'cloud-devops-community',
    index: '04.2',
    title: 'Cloud & DevOps Learning Community',
    organization: 'Peer Engineering Circle',
    role: 'Active Member & Collaborative Contributor',
    roleBadge: 'Community & Peer Learning',
    period: 'Collaborative Study Network',
    description:
      'Participated in a collaborative learning environment committed to peer technical growth across modern cloud infrastructure, Linux system administration, and DevOps practices. Organized peer review sessions, discussed infrastructure-as-code patterns, and troubleshot containerized setups in team lab environments.',
    icon: Cloud,
    highlights: [
      'Linux & Container Labs',
      'CI/CD Pipeline Discussions',
      'Peer Code & Config Reviews',
      'Collaborative Problem Solving',
    ],
    fieldNote:
      'Fostered mutual accountability and hands-on practice through collective technical teardowns and decentralized knowledge sharing.',
  },
  {
    id: 'aws-learning-contributions',
    index: '04.3',
    title: 'AWS Learning & Community Contributions',
    organization: 'AWS Cloud & Student Forums',
    role: 'Student Builder & Pathway Explorer',
    roleBadge: 'Self-Directed & Knowledge Sharing',
    period: 'Continuous Exploration',
    description:
      'Engaged in self-directed exploration of AWS learning pathways, covering compute architectures, serverless implementations, storage models, and security best practices. Synthesized and shared architecture diagrams, practical lab notes, and reference summaries to help fellow students navigate cloud fundamentals.',
    icon: BookOpen,
    highlights: [
      'AWS Learning Pathways',
      'Cloud Architecture Reference Guides',
      'Community Knowledge Transfer',
      'Hands-on Cloud Experiments',
    ],
    fieldNote:
      'Documenting architectural tradeoffs and building open reference notes to lower the barrier for collegiate developers entering cloud technologies.',
  },
];

export function Experience() {
  const { ref, isInView } = useReveal(true, '-60px');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-20 py-16 sm:py-20 lg:py-28 border-b border-[var(--color-border)]"
    >
      <div className="shell">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12 sm:space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="section-number">04</span>
              <div className="dot-leader" aria-hidden="true" />
              <span className="tag">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Beyond the Screen</span>
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-ink leading-[1.12]">
                Building with{' '}
                <span className="italic text-accent font-display">people,</span>
                <br />
                not just technology.
              </h2>

              <p className="annotation max-w-md text-ink-soft text-xs sm:text-sm leading-relaxed border-l-2 border-[var(--color-pencil)] pl-4 py-1">
                Collaborative team leadership, peer mentorship circles, and student technical initiatives that bridge technology with collective growth.
              </p>
            </div>
          </motion.div>

          {/* Editorial Timeline Container */}
          <div className="relative">
            {/* Background vertical guideline */}
            <div
              className="hidden sm:block absolute left-[1.125rem] top-4 bottom-4 w-px bg-[var(--color-border)] pointer-events-none"
              aria-hidden="true"
            />

            <div className="space-y-8 sm:space-y-10">
              {experiences.map((entry) => {
                const IconComponent = entry.icon;

                return (
                  <motion.div
                    key={entry.id}
                    variants={itemVariants}
                    className="relative sm:pl-12 group"
                  >
                    {/* Timeline Node marker for desktop */}
                    <div
                      className="hidden sm:flex absolute left-0 top-6 w-9 h-9 rounded-full bg-paper border border-[var(--color-border)] items-center justify-center text-ink-soft group-hover:border-accent group-hover:text-accent transition-colors shadow-xs z-10"
                      aria-hidden="true"
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>

                    {/* Timeline Card Entry */}
                    <div className="relative rounded-xl border border-[var(--color-border)] bg-paper p-6 sm:p-8 border-l-4 border-l-accent transition-all duration-300 hover:border-accent/50 hover:shadow-sm">
                      {/* Top Header Row */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--color-border)]">
                        <div className="flex items-center gap-2.5">
                          {/* Mobile icon */}
                          <div className="sm:hidden w-8 h-8 rounded-lg bg-[var(--color-paper-deep)] border border-[var(--color-border)] flex items-center justify-center text-accent">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="font-mono text-xs font-semibold text-accent tracking-wider">
                            {entry.index}
                          </span>
                          <span className="text-[var(--color-pencil)]" aria-hidden="true">
                            •
                          </span>
                          <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                            {entry.period}
                          </span>
                        </div>

                        {/* Role Tag */}
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[0.7rem] uppercase tracking-wider font-medium bg-accent/10 text-accent border border-accent/20">
                          <span>{entry.role}</span>
                        </span>
                      </div>

                      {/* Title & Body */}
                      <div className="pt-5 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                          <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-ink group-hover:text-accent transition-colors">
                            {entry.title}
                          </h3>
                          <span className="font-mono text-xs text-ink-faint">
                            {entry.organization}
                          </span>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-ink-soft leading-relaxed max-w-3xl">
                          {entry.description}
                        </p>

                        {/* Field Note Annotation Box */}
                        <div className="p-3.5 sm:p-4 rounded-lg bg-[var(--color-paper-deep)]/45 border border-[var(--color-border)] flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                          <div className="space-y-1">
                            <span className="eyebrow text-ink-faint block">
                              Leadership Observation // Log
                            </span>
                            <p className="font-mono text-xs text-ink-soft leading-relaxed">
                              {entry.fieldNote}
                            </p>
                          </div>
                        </div>

                        {/* Highlights Tags */}
                        <div className="pt-2 flex flex-wrap items-center gap-2">
                          {entry.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="tag text-[0.68rem] py-1 px-2.5 bg-paper"
                            >
                              <CheckCircle2 className="w-3 h-3 text-accent" />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
