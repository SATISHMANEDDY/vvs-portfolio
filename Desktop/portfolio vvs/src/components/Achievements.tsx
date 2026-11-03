import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Trophy, Award, Sparkles, Star, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { achievements } from '../data/achievements';
import { useReveal } from '../hooks/useReveal';

export function Achievements() {
  const { ref, isInView } = useReveal(true, '-60px');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const featuredAchievement = achievements.find((item) => item.featured) ?? achievements[0];
  const gridAchievements = achievements.filter((item) => item !== featuredAchievement);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="achievements"
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
              <span className="section-number">03</span>
              <div className="dot-leader" aria-hidden="true" />
              <span className="tag">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Recognition</span>
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-ink leading-[1.12]">
                Milestones along
                <br />
                <span className="italic text-accent font-display">the way.</span>
              </h2>

              <p className="annotation max-w-md text-ink-soft text-xs sm:text-sm leading-relaxed border-l-2 border-[var(--color-pencil)] pl-4 py-1">
                Field documentation of competitive hackathon victories, global ambassador candidate shortlists, and student builder community recognition.
              </p>
            </div>
          </motion.div>

          {/* Featured Achievement: ELITE CHASETHON */}
          <motion.div variants={itemVariants}>
            <div className="relative rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-paper-deep)]/40 via-[var(--color-paper)] to-[var(--color-paper-deep)]/25 p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden border-l-[6px] border-l-[var(--color-accent-warm)]">
              {/* Background watermark icon */}
              <div
                className="absolute -right-8 -bottom-10 pointer-events-none opacity-[0.04] text-ink select-none"
                aria-hidden="true"
              >
                <Trophy className="w-72 h-72 sm:w-88 sm:h-88" />
              </div>

              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[var(--color-border)]">
                <div className="flex items-center gap-2">
                  <span className="eyebrow text-ink-soft">REF. 03-A // HACKATHON FIRST PRIZE</span>
                  <span className="text-[var(--color-pencil)]" aria-hidden="true">
                    •
                  </span>
                  <span className="eyebrow text-accent">GITAM VISAKHAPATNAM</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[0.7rem] uppercase tracking-wider font-semibold bg-[var(--color-accent-warm)]/10 text-[var(--color-accent-warm)] border border-[var(--color-accent-warm)]/30 shadow-xs">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>{featuredAchievement.status}</span>
                  </span>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="pt-6 sm:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Trophy Icon Frame */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[var(--color-accent-warm)]/10 border border-[var(--color-accent-warm)]/30 flex items-center justify-center text-[var(--color-accent-warm)] shadow-inner">
                      <Trophy className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.75} />
                    </div>

                    <div className="space-y-1 sm:space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs uppercase tracking-widest text-accent font-medium">
                          Major Competitive Victory
                        </span>
                        <Star className="w-3.5 h-3.5 text-[var(--color-accent-warm)] fill-[var(--color-accent-warm)]" />
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-ink uppercase">
                        {featuredAchievement.title}
                      </h3>
                      <p className="font-sans text-base sm:text-lg font-medium text-ink-soft">
                        {featuredAchievement.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-ink-soft leading-relaxed max-w-2xl pt-1">
                    {featuredAchievement.description} Competed against collegiate developer teams to engineer an end-to-end software solution under demanding time limits. Successfully demonstrated technical depth, clean system design, and impactful product delivery evaluated by academic and industry judges.
                  </p>

                  {/* Highlights / Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="tag text-xs bg-paper border-[var(--color-border)] text-ink">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent-warm)]" />
                      First Place Winner
                    </span>
                    <span className="tag text-xs bg-paper border-[var(--color-border)] text-ink">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      GITAM University, Visakhapatnam
                    </span>
                    <span className="tag text-xs bg-paper border-[var(--color-border)] text-ink">
                      Problem Solving & Rapid Execution
                    </span>
                  </div>
                </div>

                {/* Notebook Field Note / Callout Card */}
                <div className="lg:col-span-4 bg-paper border border-[var(--color-border)] rounded-xl p-5 space-y-3 relative shadow-xs">
                  <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2.5">
                    <span className="font-mono text-[0.68rem] uppercase tracking-wider text-ink-faint">
                      Field Note // Spec
                    </span>
                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-accent-warm)]" />
                  </div>
                  <blockquote className="font-mono text-xs text-ink-soft leading-relaxed italic">
                    "Evaluated on architectural logic, real-time code execution, and high-pressure team problem solving. Earned top ranking among participating university teams."
                  </blockquote>
                  <div className="pt-2 flex items-center justify-between text-[0.7rem] font-mono text-ink-faint">
                    <span>Verified Academic Milestone</span>
                    <span className="text-accent">GITAM Campus</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid of Other Achievements */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="eyebrow text-ink-faint">03-B // Additional Candidacies & Programs</span>
              <div className="flex-1 border-b border-dashed border-[var(--color-border)]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {gridAchievements.map((item, index) => {
                const isGoogle = item.title.includes('GOOGLE');
                const isAWS = item.title.includes('AWS');

                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="relative rounded-xl border border-[var(--color-border)] bg-paper p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-accent/40 hover:shadow-xs group"
                  >
                    {/* Top status bar */}
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-[var(--color-paper-deep)]/60 border border-[var(--color-border)] flex items-center justify-center text-accent group-hover:border-accent transition-colors">
                            {isGoogle ? (
                              <Award className="w-4 h-4" />
                            ) : isAWS ? (
                              <Star className="w-4 h-4" />
                            ) : (
                              <Sparkles className="w-4 h-4" />
                            )}
                          </div>
                          <span className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-faint">
                            {index === 0 ? 'ITEM 03-B1' : 'ITEM 03-B2'}
                          </span>
                        </div>

                        {/* Status Badge */}
                        {isGoogle ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[0.68rem] uppercase tracking-wider font-semibold bg-accent/10 text-accent border border-accent/25">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            {item.status}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[0.68rem] uppercase tracking-wider font-semibold bg-[var(--color-paper-deep)] text-ink-soft border border-[var(--color-border)]">
                            <Sparkles className="w-3 h-3 text-accent" />
                            {item.status}
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h4 className="font-display text-lg sm:text-xl font-medium tracking-tight text-ink group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <p className="font-mono text-xs text-accent mt-1 mb-3">
                        {item.subtitle}
                      </p>

                      <p className="font-sans text-sm text-ink-soft leading-relaxed">
                        {item.description}
                      </p>

                      {/* Specific clarity callout for Google Student Ambassador shortlist */}
                      {isGoogle && (
                        <div className="mt-4 p-3 rounded-lg bg-[var(--color-paper-deep)]/40 border border-[var(--color-border)] flex items-start gap-2.5">
                          <AlertCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <p className="font-mono text-[0.72rem] text-ink-soft leading-snug">
                            <strong className="text-ink font-semibold">Shortlist Notice:</strong> Advanced to the final candidate evaluation stage for the 2026 cohort (shortlisted candidate status; final selection pending).
                          </p>
                        </div>
                      )}

                      {/* AWS specific notes */}
                      {isAWS && (
                        <div className="mt-4 p-3 rounded-lg bg-[var(--color-paper-deep)]/40 border border-[var(--color-border)] flex items-start gap-2.5">
                          <Sparkles className="w-4 h-4 text-[var(--color-accent-warm)] mt-0.5 flex-shrink-0" />
                          <p className="font-mono text-[0.72rem] text-ink-soft leading-snug">
                            <strong className="text-ink font-semibold">Community Profile:</strong> Active engagement in cloud learning pathways, technical labs, and student builder documentation.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Bottom Metadata Tags */}
                    <div className="pt-6 mt-6 border-t border-[var(--color-border)] flex flex-wrap items-center gap-2">
                      {isGoogle ? (
                        <>
                          <span className="tag text-[0.68rem] py-1 px-2.5">Google Ecosystem</span>
                          <span className="tag text-[0.68rem] py-1 px-2.5">Cohort 2026</span>
                          <span className="tag text-[0.68rem] py-1 px-2.5">Campus Ambassador</span>
                        </>
                      ) : (
                        <>
                          <span className="tag text-[0.68rem] py-1 px-2.5">AWS Cloud</span>
                          <span className="tag text-[0.68rem] py-1 px-2.5">Student Builder</span>
                          <span className="tag text-[0.68rem] py-1 px-2.5">Community Learning</span>
                        </>
                      )}
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
