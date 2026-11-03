import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';
import { useReveal } from '../hooks/useReveal';

export function Contact() {
  const { ref, isInView } = useReveal();

  return (
    <section
      id="contact"
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
            <span className="section-number">08</span>
            <span className="dot-leader" />
            <span className="tag">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Let's Connect
            </span>
          </div>

          <div className="mt-8 mb-12 sm:mb-16 max-w-3xl">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.12]">
              Have an idea?
              <span className="block mt-2 sm:mt-3">
                Let's build something <span className="italic text-accent font-serif font-normal">meaningful</span>.
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-ink-soft max-w-2xl font-sans leading-relaxed">
              I am constantly eager to learn, explore new paradigms in AI and cloud infrastructure, and collaborate on ambitious software engineering problems. Whether you have an open role, an internship opportunity, a project proposal, or simply want to exchange ideas — my door is always open.
            </p>
          </div>
        </motion.div>

        {/* Three Contact Links as Large Chrome-Pill Style Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-stretch gap-4 sm:gap-6"
        >
          {/* GitHub Button */}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 inline-flex items-center justify-between gap-4 px-6 sm:px-8 py-5 rounded-full border border-ink/20 hover:border-ink bg-paper hover:bg-ink text-ink hover:text-paper transition-all duration-300 shadow-xs hover:shadow-lg"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-11 h-11 rounded-full border border-ink/15 flex items-center justify-center bg-paper-deep/70 group-hover:bg-paper/10 group-hover:border-paper/20 shrink-0 transition-colors">
                <img src="/logos/github.svg" alt="" aria-hidden="true" className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-faint group-hover:text-paper/70 block truncate">
                  Code & Projects
                </span>
                <span className="font-mono text-sm sm:text-base font-semibold tracking-wide block truncate">
                  GitHub
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-ink-faint group-hover:text-paper shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* LinkedIn Button */}
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 inline-flex items-center justify-between gap-4 px-6 sm:px-8 py-5 rounded-full border border-ink/20 hover:border-ink bg-paper hover:bg-ink text-ink hover:text-paper transition-all duration-300 shadow-xs hover:shadow-lg"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-11 h-11 rounded-full border border-ink/15 flex items-center justify-center bg-paper-deep/70 group-hover:bg-paper/10 group-hover:border-paper/20 shrink-0 transition-colors">
                <img src="/logos/linkedin.svg" alt="" aria-hidden="true" className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-faint group-hover:text-paper/70 block truncate">
                  Professional Network
                </span>
                <span className="font-mono text-sm sm:text-base font-semibold tracking-wide block truncate">
                  LinkedIn
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-ink-faint group-hover:text-paper shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Email Button */}
          <a
            href={profile.links.email}
            className="group flex-1 inline-flex items-center justify-between gap-4 px-6 sm:px-8 py-5 rounded-full border border-ink/20 hover:border-ink bg-paper hover:bg-ink text-ink hover:text-paper transition-all duration-300 shadow-xs hover:shadow-lg"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-11 h-11 rounded-full border border-ink/15 flex items-center justify-center bg-paper-deep/70 group-hover:bg-paper/10 group-hover:border-paper/20 shrink-0 transition-colors">
                <img src="/logos/gmail.svg" alt="" aria-hidden="true" className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-faint group-hover:text-paper/70 block truncate">
                  Direct Inquiries
                </span>
                <span className="font-mono text-sm sm:text-base font-semibold tracking-wide block truncate">
                  Email
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-ink-faint group-hover:text-paper shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Supporting Editorial Dispatch Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl border border-dashed border-ink/20 bg-paper-deep/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="eyebrow text-emerald-800">Status: Active & Available</span>
            </div>
            <p className="font-mono text-xs sm:text-sm text-ink-soft">
              Open to Summer 2026 internships, research collaborations, and cloud infrastructure initiatives.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-ink-faint shrink-0">
            <span>Andhra Pradesh, India</span>
            <span>&bull;</span>
            <span>IST (UTC+05:30)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
