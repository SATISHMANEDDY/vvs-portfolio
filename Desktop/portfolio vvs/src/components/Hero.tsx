import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  ArrowDown,
  Sparkles,
  Asterisk,
} from 'lucide-react'
import portrait from '../assets/images/portrait.png'
import { profile } from '../data/profile'

export function Hero() {
  return (
    <>
      <section id="top" className="relative pt-6 sm:pt-8 lg:pt-12">
        <div className="shell">
          {/* Top Bar: 'Field notes / Vol. 01' left, 'Portfolio 2026' right, with border-b */}
          <div className="border-b border-ink/15 pb-3 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-ink-soft">
            <div className="flex items-center gap-2">
              <span className="text-accent font-medium">SYS //</span>
              <span>Field notes / Vol. 01</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-ink-faint text-[0.65rem]">INDEX 2026</span>
              <span className="w-1 h-1 rounded-full bg-ink/20 hidden sm:inline" />
              <span>Portfolio 2026</span>
            </div>
          </div>

          {/* Main Hero Grid Layout: lg:grid-cols-12 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-12 lg:py-16">
            {/* LEFT: lg:col-span-7 */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 relative">
              {/* Spinning stamp SVG: absolute positioned, circular text around crosshair */}
              <div
                className="absolute -top-6 right-0 sm:right-6 lg:-top-10 lg:right-2 select-none pointer-events-none z-10"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 160 160"
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-accent stamp-spin"
                >
                  <defs>
                    <path
                      id="heroStampCircle"
                      d="M 80, 80 m -52, 0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
                    />
                  </defs>

                  {/* Outer and inner concentric rings */}
                  <circle
                    cx="80"
                    cy="80"
                    r="72"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.35"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="63"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    opacity="0.5"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="41"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    opacity="0.35"
                  />

                  {/* Circular text around crosshair */}
                  <text className="font-mono text-[8.8px] uppercase tracking-[0.21em] fill-current">
                    <textPath href="#heroStampCircle" startOffset="0%">
                      SATISH MANEDDY · ENGINEER · FIELD NOTES ·&#160;
                    </textPath>
                  </text>

                  {/* Crosshair in the center */}
                  <g stroke="currentColor" strokeWidth="1.2" opacity="0.85">
                    <circle cx="80" cy="80" r="5" fill="none" />
                    <line x1="80" y1="67" x2="80" y2="93" />
                    <line x1="67" y1="80" x2="93" y2="80" />
                  </g>
                </svg>
              </div>

              {/* Tags: 'AI & Machine Learning' tag-pastel + 'Open to opportunities' sticker */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-wrap items-center gap-3 pt-1"
              >
                <span className="tag tag-pastel">
                  <Sparkles size={12} className="text-accent" />
                  <span>AI & Machine Learning</span>
                </span>

                <span className="sticker">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open to opportunities</span>
                </span>
              </motion.div>

              {/* Hero Name h1: 'SATISH' line 1, 'MANEDDY.' line 2 (with accent dot) */}
              <h1 className="hero-name text-ink tracking-tight font-display font-bold">
                <motion.span
                  className="hero-line block"
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                >
                  SATISH
                </motion.span>
                <motion.span
                  className="hero-line block text-ink"
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.24, ease: [0.215, 0.61, 0.355, 1] }}
                >
                  MANEDDY<span className="text-accent">.</span>
                </motion.span>
              </h1>

              {/* Description Paragraph from profile.heroDescription */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.4, ease: 'easeOut' }}
                className="text-base sm:text-lg lg:text-xl text-ink-soft leading-relaxed max-w-2xl font-sans whitespace-pre-line"
              >
                {profile.heroDescription}
              </motion.p>

              {/* Three identity label tags from profile.identityLabels */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.55, ease: 'easeOut' }}
                className="flex flex-wrap gap-2 pt-1"
              >
                {profile.identityLabels.map((label, index) => (
                  <span
                    key={label}
                    className="tag bg-paper-deep/70 border-ink/15 text-ink hover:border-accent"
                  >
                    <span className="text-accent font-mono text-[0.65rem]">0{index + 1}</span>
                    <span>{label}</span>
                  </span>
                ))}
              </motion.div>

              {/* Social links: GitHub, LinkedIn, Email using chrome-pill class with SVG icons & ArrowUpRight */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.7, ease: 'easeOut' }}
                className="flex flex-wrap items-center gap-3 pt-2 sm:pt-4"
              >
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chrome-pill"
                  aria-label="Satish Maneddy on GitHub"
                >
                  <img src="/logos/github.svg" alt="" aria-hidden="true" className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} className="opacity-60" />
                </a>

                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chrome-pill"
                  aria-label="Satish Maneddy on LinkedIn"
                >
                  <img src="/logos/linkedin.svg" alt="" aria-hidden="true" className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} className="opacity-60" />
                </a>

                <a
                  href={profile.links.email}
                  className="chrome-pill"
                  aria-label="Send email to Satish Maneddy"
                >
                  <img src="/logos/gmail.svg" alt="" aria-hidden="true" className="w-3.5 h-3.5" />
                  <span>Email</span>
                  <ArrowUpRight size={12} className="opacity-60" />
                </a>
              </motion.div>
            </div>

            {/* RIGHT: lg:col-span-4 lg:col-start-9 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 lg:col-start-9 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm">
                {/* Tape decorations: absolute spans with rotate */}
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#d9cfbe]/85 border border-ink/10 -rotate-2 z-20 pointer-events-none shadow-xs backdrop-blur-[1px]"
                  aria-hidden="true"
                />
                <span
                  className="absolute -bottom-3 right-6 w-24 h-6 bg-[#d9cfbe]/80 border border-ink/10 rotate-3 z-20 pointer-events-none shadow-xs backdrop-blur-[1px]"
                  aria-hidden="true"
                />

                {/* Photo frame with border, bg-paper-deep, p-2, shadow */}
                <div className="relative border border-ink/15 bg-paper-deep p-2 shadow-xl rounded-sm">
                  {/* crop-marks div with 4:5 aspect ratio */}
                  <div className="crop-marks aspect-[4/5] relative overflow-hidden bg-paper border border-ink/10">
                    <img
                      src={portrait}
                      alt={`Portrait of ${profile.name}`}
                      className="w-full h-full object-cover object-top image-warm"
                      loading="eager"
                    />

                    {/* 'Plate 01' badge overlay */}
                    <div className="absolute top-3 right-3 z-10 bg-paper/90 backdrop-blur-xs border border-ink/20 px-2.5 py-0.5 text-[0.62rem] font-mono tracking-widest uppercase text-ink shadow-xs">
                      Plate 01
                    </div>

                    {/* Subtle archival tag */}
                    <div className="absolute bottom-2 left-2 z-10 bg-ink/80 text-paper px-2 py-0.5 text-[0.55rem] font-mono tracking-widest uppercase">
                      {profile.education.location}
                    </div>
                  </div>

                  {/* Image caption: 'FIG. 01 — THE ENGINEER BEHIND THE BUILDS' */}
                  <div className="mt-2.5 pt-2 pb-1 text-center border-t border-ink/10">
                    <p className="annotation text-[0.65rem] uppercase tracking-wider font-mono">
                      FIG. 01 — THE ENGINEER BEHIND THE BUILDS
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar: 'A portfolio, not a résumé.' left, 'Read on' link with ArrowDown icon right */}
          <div className="border-t border-ink/15 py-4 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-ink-soft">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>A portfolio, not a résumé.</span>
            </div>

            <a
              href="#about"
              className="group inline-flex items-center gap-2 text-ink hover:text-accent transition-colors"
            >
              <span>Read on</span>
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE section after hero: ticker with ticker-track, duplicated content for seamless loop */}
      <section
        className="border-y border-ink/15 bg-paper-deep/50 py-3.5 overflow-hidden ticker"
        aria-label="Disciplines ticker"
      >
        <div className="ticker-track flex items-center">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex items-center gap-8 px-4 shrink-0"
              aria-hidden={copyIndex === 1}
            >
              {profile.marqueeItems.map((item, itemIndex) => (
                <span
                  key={`${copyIndex}-${itemIndex}`}
                  className="inline-flex items-center gap-8 font-mono text-xs uppercase tracking-[0.22em] text-ink-soft font-medium select-none"
                >
                  <span>{item}</span>
                  <Asterisk size={13} className="text-accent shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
