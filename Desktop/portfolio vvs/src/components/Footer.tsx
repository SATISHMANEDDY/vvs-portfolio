import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-ink/15 py-12 sm:py-16 lg:py-20 bg-paper">
      <div className="shell">
        {/* Top Editorial Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 sm:pb-10 border-b border-ink/10">
          {/* Brand: SM Monogram + SATISH MANEDDY Name */}
          <div className="flex items-center gap-3.5">
            {/* SM monogram (same style as navbar) */}
            <div className="relative w-8 h-8 rounded-lg bg-ink text-paper flex items-center justify-center font-mono font-bold text-xs tracking-wider shadow-xs">
              <span>{profile.monogram}</span>
              <span className="absolute inset-0 rounded-lg border border-paper/10 pointer-events-none" />
            </div>

            <div>
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-ink block">
                SATISH MANEDDY
              </span>
              <span className="font-mono text-[0.68rem] text-ink-soft tracking-wider block">
                {profile.title}
              </span>
            </div>
          </div>

          {/* Volume & Edition Identifiers */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs text-ink-soft">
            <span className="tracking-wider">FIELD NOTES / VOL. 01</span>
            <span className="text-ink-faint">&bull;</span>
            <span className="tag text-[0.65rem] px-2.5 py-0.5 bg-paper-deep/50">
              PORTFOLIO 2026
            </span>
          </div>

          {/* Back to Top */}
          <div>
            <a
              href="#top"
              onClick={scrollToTop}
              className="chrome-pill group inline-flex items-center gap-2"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Links Navigation Row */}
        <div className="py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ink/10">
          <div className="font-mono text-xs text-ink-faint uppercase tracking-wider">
            Index & Inquiries
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            {/* GitHub */}
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs text-ink-soft hover:text-ink transition-colors"
            >
              <img src="/logos/github.svg" alt="" aria-hidden="true" className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs text-ink-soft hover:text-ink transition-colors"
            >
              <img src="/logos/linkedin.svg" alt="" aria-hidden="true" className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
              <span>LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href={profile.links.email}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs text-ink-soft hover:text-ink transition-colors"
            >
              <img src="/logos/gmail.svg" alt="" aria-hidden="true" className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
              <span>{profile.links.emailDisplay}</span>
            </a>
          </div>
        </div>

        {/* Bottom Colophon Row */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-ink-soft">
          <p className="eyebrow text-ink-soft text-[0.68rem] tracking-wider">
            &copy; 2026 SATISH MANEDDY. ALL RIGHTS RESERVED.
          </p>

          <p className="annotation text-[0.68rem]">
            Built with React, TypeScript &amp; Tailwind CSS &bull; Aditya University
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
