import { motion } from 'framer-motion';
import { FileText, Sparkles, PenLine, ArrowUpRight } from 'lucide-react';
import { journalEntries, type JournalEntry } from '../data/journal';
import { useReveal } from '../hooks/useReveal';

export function Journal() {
  const { ref, isInView } = useReveal();

  const getStatusBadge = (status: JournalEntry['status']) => {
    switch (status) {
      case 'draft':
        return (
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.65rem] font-mono uppercase tracking-wider rounded-full border border-dashed border-ink/30 text-ink-soft bg-ink/[0.02]"
            title="Work in progress / draft stage"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ink-faint" />
            Draft
          </span>
        );
      case 'upcoming':
        return (
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.65rem] font-mono uppercase tracking-wider rounded-full border border-dotted border-accent/70 text-accent bg-accent/[0.04]"
            title="Scheduled exploration / upcoming note"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Upcoming
          </span>
        );
      case 'published':
        return (
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.65rem] font-mono uppercase tracking-wider rounded-full border border-solid border-emerald-700/40 text-emerald-800 bg-emerald-500/10"
            title="Published note"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Published
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="journal"
      ref={ref}
      className="scroll-mt-20 py-16 sm:py-20 lg:py-28 border-b border-ink/10"
    >
      <div className="shell">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="section-number">07</span>
            <span className="dot-leader" />
            <span className="tag">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Field Notes
            </span>
          </div>

          <div className="mt-8 mb-12 sm:mb-16 max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-[1.18]">
              Experiments, observations,
              <span className="block mt-1 sm:mt-2">
                and things worth <span className="italic text-accent font-serif font-normal">documenting</span>.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-ink-soft max-w-2xl font-sans leading-relaxed">
              A working index of architecture sketches, cloud engineering takeaways, and technical reflections logged during experiments.
            </p>
          </div>
        </motion.div>

        {/* Notebook Column Header (Desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-4 pb-3 border-b border-ink/20 eyebrow text-ink-faint">
          <div className="col-span-3">ENTRY / TRACK</div>
          <div className="col-span-6">TOPIC & SCOPE</div>
          <div className="col-span-3 text-right">DOCUMENT STATUS</div>
        </div>

        {/* Notebook Entry List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="divide-y divide-ink/15 border-t md:border-t-0 border-ink/15"
        >
          {journalEntries.map((entry, index) => {
            const entryContent = (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-start md:items-center">
                {/* Left: Monospace Entry Number & Category Tag */}
                <div className="md:col-span-3 flex items-center gap-3">
                  <span className="font-mono text-xs sm:text-sm text-ink-faint font-semibold tracking-wider">
                    #{entry.number}
                  </span>
                  <span className="tag text-[0.65rem] px-2.5 py-0.5 tracking-wider bg-paper-deep/60">
                    {entry.category}
                  </span>
                </div>

                {/* Center: Title & Short Description */}
                <div className="md:col-span-6 pr-2">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-ink group-hover:text-accent transition-colors duration-200">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-ink-soft font-sans leading-relaxed">
                    {entry.description}
                  </p>
                </div>

                {/* Right: Status Badge & Link Icon */}
                <div className="md:col-span-3 flex items-center md:justify-end gap-3 pt-2 md:pt-0">
                  {getStatusBadge(entry.status)}
                  {entry.url && (
                    <span className="inline-flex items-center text-ink-faint group-hover:text-accent transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  )}
                </div>
              </div>
            );

            return (
              <motion.div
                key={entry.number}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{
                  duration: 0.35,
                  delay: 0.1 + index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="py-5 sm:py-6 group transition-colors duration-200 hover:bg-ink/[0.015] -mx-3 px-3 sm:-mx-4 sm:px-4 rounded-lg"
              >
                {entry.url ? (
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    {entryContent}
                  </a>
                ) : (
                  <div>{entryContent}</div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.45, delay: 0.5 }}
          className="mt-10 sm:mt-12 pt-6 border-t border-dashed border-ink/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 annotation">
            <FileText className="w-3.5 h-3.5 text-ink-faint shrink-0" />
            <span>These are draft notes and upcoming topics, not published articles.</span>
          </div>

          <div className="flex items-center gap-2 annotation text-[0.65rem] uppercase tracking-wider text-ink-faint">
            <PenLine className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>Field Archive &bull; Aditya University</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Journal;
