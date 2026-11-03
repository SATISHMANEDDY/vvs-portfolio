import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Menu, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'

const navLinks = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Achievements', href: '#achievements', id: 'achievements' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Stack', href: '#stack', id: 'stack' },
  { name: 'Journal', href: '#journal', id: 'journal' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFactModalOpen, setIsFactModalOpen] = useState(false)
  const [currentFactIndex, setCurrentFactIndex] = useState(0)

  // IntersectionObserver to detect which section is in view
  useEffect(() => {
    const sectionIds = ['top', 'about', 'projects', 'achievements', 'experience', 'stack', 'journal', 'contact']
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFactModalOpen(false)
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when mobile menu or modal is open
  useEffect(() => {
    if (isMobileMenuOpen || isFactModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen, isFactModalOpen])

  const openRandomFact = () => {
    const total = profile.randomFacts.length
    if (total > 0) {
      const next = Math.floor(Math.random() * total)
      setCurrentFactIndex(next)
    }
    setIsFactModalOpen(true)
  }

  const cycleNextFact = () => {
    const total = profile.randomFacts.length
    if (total <= 1) return
    let next = Math.floor(Math.random() * total)
    while (next === currentFactIndex) {
      next = Math.floor(Math.random() * total)
    }
    setCurrentFactIndex(next)
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/85 backdrop-blur-md transition-colors">
        <div className="shell flex items-center justify-between h-16 sm:h-20">
          {/* Left: SM Monogram + Title */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="#top"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Back to top"
            >
              {/* SM monogram (dark bg, paper text, 8x8 grid size, rounded-lg) */}
              <div className="relative w-8 h-8 rounded-lg bg-ink text-paper flex items-center justify-center font-mono font-bold text-xs tracking-wider shadow-sm transition-transform duration-200 group-hover:scale-105">
                <span>{profile.monogram}</span>
                <span className="absolute inset-0 rounded-lg border border-paper/10 pointer-events-none" />
              </div>

              <div className="flex flex-col">
                <span className="eyebrow text-ink font-semibold tracking-[0.14em]">
                  FIELD NOTES <span className="text-ink-soft">/</span> VOL. 01
                </span>
                <span className="text-[0.62rem] font-mono text-ink-soft tracking-wider hidden md:inline">
                  {profile.edition}
                </span>
              </div>
            </a>

            {/* Open to opportunities sticker with small green dot */}
            <div className="hidden lg:flex items-center pl-2">
              <span className="sticker" title="Available for internships & collaborations">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open to opportunities</span>
              </span>
            </div>
          </div>

          {/* Right side desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <nav className="flex items-center gap-5 lg:gap-7" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative py-1 font-mono text-xs uppercase tracking-wider transition-colors duration-200 ${
                      isActive ? 'text-accent font-semibold' : 'text-ink-soft hover:text-ink'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                )
              })}
            </nav>

            {/* Random fact button */}
            <button
              type="button"
              onClick={openRandomFact}
              className="chrome-pill group flex items-center gap-2 hover:border-accent hover:text-accent"
              aria-label="Open random fact"
            >
              <Sparkles size={13} className="text-accent group-hover:rotate-12 transition-transform duration-300" />
              <span>Random Fact</span>
            </button>
          </div>

          {/* Mobile Right Controls: Random Fact pill + Index button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={openRandomFact}
              className="chrome-pill px-2.5 py-1.5 text-[0.65rem]"
              aria-label="Open random fact"
            >
              <Sparkles size={12} className="text-accent" />
              <span className="sr-only">Random Fact</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="chrome-pill flex items-center gap-1.5"
              aria-label="Open directory index"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu size={13} />
              <span>Index</span>
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Slide-in Menu Overlay ─── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-ink/50 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Slide-in Drawer from Right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-paper border-l border-ink/15 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
            >
              <div>
                {/* Header in drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-ink/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-ink text-paper flex items-center justify-center font-mono font-bold text-[0.65rem]">
                      {profile.monogram}
                    </div>
                    <div>
                      <div className="eyebrow text-ink font-semibold">DIRECTORY // INDEX</div>
                      <div className="text-[0.6rem] font-mono text-ink-soft">{profile.edition}</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-full border border-ink/15 text-ink hover:bg-ink hover:text-paper transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Status indicator in mobile drawer */}
                <div className="py-4">
                  <span className="sticker inline-flex">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open to opportunities</span>
                  </span>
                </div>

                {/* Navigation Links with section numbers */}
                <nav className="flex flex-col space-y-1 pt-2" aria-label="Mobile Navigation">
                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.id
                    return (
                      <a
                        key={link.id}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-3 px-3 rounded-md font-mono text-xs uppercase tracking-wider transition-colors ${
                          isActive
                            ? 'bg-ink text-paper font-semibold'
                            : 'text-ink-soft hover:bg-paper-deep hover:text-ink'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className={`text-[0.65rem] ${isActive ? 'text-paper/70' : 'text-accent'}`}>
                            0{idx + 1}.
                          </span>
                          <span>{link.name}</span>
                        </span>
                        <ArrowUpRight size={14} className="opacity-50" />
                      </a>
                    )
                  })}
                </nav>
              </div>

              {/* Drawer Footer */}
              <div className="pt-6 border-t border-ink/15 space-y-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    openRandomFact()
                  }}
                  className="w-full chrome-pill justify-center py-2.5 text-xs gap-2"
                >
                  <Sparkles size={14} className="text-accent" />
                  <span>Read Random Fact</span>
                </button>

                <div className="text-center">
                  <p className="annotation text-[0.65rem]">
                    {profile.portfolioTitle} · {profile.name}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─── Random Fact Modal / Dialog ─── */}
      <AnimatePresence>
        {isFactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsFactModalOpen(false)}
              className="absolute inset-0 bg-ink/50 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Modal Dialog Card */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="fact-dialog-title"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-paper border border-ink/20 shadow-2xl rounded-sm p-6 sm:p-8 z-10 overflow-hidden"
            >
              {/* Tape decoration */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#d9cfbe]/80 border border-ink/15 -rotate-1 pointer-events-none shadow-xs" />

              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-ink/15">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-accent" />
                  <span id="fact-dialog-title" className="eyebrow text-ink font-semibold tracking-wider">
                    ARCHIVAL NOTE // FACT #{String(currentFactIndex + 1).padStart(2, '0')}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsFactModalOpen(false)}
                  className="p-1 rounded-full text-ink-soft hover:text-ink hover:bg-paper-deep transition-colors"
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Fact Content Body */}
              <div className="py-6 sm:py-8">
                <div className="text-[0.65rem] font-mono text-accent uppercase tracking-widest mb-3">
                  FIELD OBSERVATION // ENTRY {String(currentFactIndex + 1).padStart(2, '0')} OF {String(profile.randomFacts.length).padStart(2, '0')}
                </div>
                <blockquote className="font-display text-xl sm:text-2xl text-ink leading-relaxed italic border-l-2 border-accent pl-4 py-1">
                  &ldquo;{profile.randomFacts[currentFactIndex]}&rdquo;
                </blockquote>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-ink/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="annotation text-[0.65rem]">
                  From the personal engineering journal of {profile.firstName}
                </span>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={cycleNextFact}
                    className="chrome-pill flex-1 sm:flex-initial justify-center gap-1.5 hover:border-accent hover:text-accent"
                  >
                    <Sparkles size={12} className="text-accent" />
                    <span>Next Fact</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFactModalOpen(false)}
                    className="chrome-pill flex-1 sm:flex-initial justify-center bg-ink text-paper border-ink hover:bg-ink-soft hover:text-paper"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
