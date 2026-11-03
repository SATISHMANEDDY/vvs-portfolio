import { useReducedMotion, motion, type Variants } from 'framer-motion';
import { Award, BookOpen, Sparkles, ExternalLink } from 'lucide-react';
import { certifications, type Certification } from '../data/certifications';
import { useReveal } from '../hooks/useReveal';

function StatusIndicator({ status }: { status: Certification['status'] }) {
  if (status === 'completed') {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] tracking-wider uppercase text-emerald-800 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 shrink-0">
        <span className="relative flex h-2 w-2">
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
        </span>
        Completed
      </span>
    );
  }

  if (status === 'learning') {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] tracking-wider uppercase text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20 shrink-0">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        Learning Activity
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] tracking-wider uppercase text-accent-warm bg-accent-warm/10 px-2 py-0.5 rounded-full border border-accent-warm/20 shrink-0">
      <span className="relative flex h-2 w-2">
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-warm" />
      </span>
      In Progress
    </span>
  );
}

export function Certifications() {
  const { ref, isInView } = useReveal();
  const shouldReduceMotion = useReducedMotion();

  // Group certifications by category while preserving declaration order
  const categories = Array.from(new Set(certifications.map((c) => c.category)));

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="certifications" className="scroll-mt-20 py-16 sm:py-20 lg:py-28 relative">
      <div className="shell">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 flex-1">
            <span className="section-number">05</span>
            <span className="dot-leader" />
            <span className="tag">
              <Sparkles className="w-3 h-3 text-accent" />
              Learning Archive
            </span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft border border-border rounded-full px-3 py-1 bg-paper-deep/40">
            <Award className="w-3 h-3 text-accent" />
            <span>Archive Index &bull; {certifications.length} Entries</span>
          </div>
        </div>

        {/* Section Title & Subtitle */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-ink leading-[1.15]">
            Learning never ships<br />
            as a <span className="italic text-accent">final version</span>.
          </h2>
          <p className="mt-4 text-ink-soft text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
            A documented ledger of formal coursework, cloud provider training pathways, and professional simulations completed or actively pursued.
          </p>
        </div>

        {/* Certifications Grouped by Category */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-10 lg:space-y-12"
        >
          {categories.map((category, catIndex) => {
            const certsInCategory = certifications.filter((c) => c.category === category);

            return (
              <motion.div key={category} variants={itemVariants} className="space-y-3">
                {/* Category Header */}
                <div className="flex items-baseline justify-between border-b border-border/80 pb-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-accent font-medium">
                      [{String(catIndex + 1).padStart(2, '0')}]
                    </span>
                    <h3 className="eyebrow text-ink font-semibold tracking-[0.14em]">
                      {category}
                    </h3>
                  </div>
                  <span className="annotation text-xs font-mono">
                    {certsInCategory.length} {certsInCategory.length === 1 ? 'record' : 'records'}
                  </span>
                </div>

                {/* Bordered Rows List */}
                <div className="border border-border rounded-lg bg-paper divide-y divide-border/60 overflow-hidden shadow-xs">
                  {certsInCategory.map((cert) => (
                    <div
                      key={cert.title}
                      className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors duration-150 hover:bg-paper-deep/30 group"
                    >
                      {/* Left: Status & Main Info */}
                      <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                        <div className="mt-1 sm:mt-0 shrink-0">
                          <StatusIndicator status={cert.status} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-display font-medium text-ink text-base sm:text-lg leading-snug group-hover:text-accent transition-colors">
                            {cert.title}
                          </h4>
                          <p className="font-mono text-xs text-ink-soft uppercase tracking-wider mt-0.5">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>

                      {cert.credentialUrl && (
                        <div className="flex items-center self-end md:self-auto shrink-0 pt-2 md:pt-0 border-t border-border/40 md:border-t-0 w-full md:w-auto justify-end">
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:text-ink transition-colors font-medium underline underline-offset-4"
                          >
                            <span>Credential</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Archival Clarification Note */}
        <div className="mt-12 rounded-lg border border-dashed border-border bg-paper-deep/30 p-4 sm:p-5 flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-md bg-paper border border-border shrink-0 mt-0.5 sm:mt-0 shadow-2xs">
              <BookOpen className="w-4 h-4 text-accent" />
            </div>
            <div>
              <span className="eyebrow text-ink-soft block mb-1">Archival Note</span>
              <p className="annotation text-xs sm:text-sm text-ink-soft">
                AWS Skill Builder activities are shown as learning activities, not formal certifications.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-ink-faint font-mono text-[0.7rem] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Field Notes &bull; Sec. 05</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
