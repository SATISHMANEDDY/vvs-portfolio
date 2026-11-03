import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Sparkles, GraduationCap, Building2, Calendar, MapPin, Compass } from 'lucide-react';
import { profile } from '../data/profile';
import { useReveal } from '../hooks/useReveal';
import awsEvent from '../assets/images/aws-event.jpg';

export function About() {
  const { ref, isInView } = useReveal();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-20 lg:py-28 relative">
      <div className="shell">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-6">
            <span className="section-number">01</span>
            <div className="dot-leader" />
            <span className="tag">
              <Sparkles className="w-3 h-3 text-accent" />
              The Person
            </span>
          </div>

          {/* Large Title & Subtitle */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16 pb-8 border-b border-ink/10">
            <div>
              <span className="eyebrow text-ink-faint block mb-2">CURRICULAR NOTES & IDENTITY</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink leading-[1.15]">
                Learning by building.
                <br />
                Growing by <span className="italic text-accent">experimenting</span>.
              </h2>
            </div>
            <p className="annotation lg:text-right max-w-sm text-ink-soft">
              SECTION 01 / BACKGROUND & FORMATION
              <br />
              <span className="text-ink-faint">
                Aditya University • AIML Dept. • Andhra Pradesh
              </span>
            </p>
          </div>

          {/* Grid Layout: Left Biography & Info, Right Editorial Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: Narrative & Info Area */}
            <div className="lg:col-span-6 space-y-8">
              {/* Paragraphs */}
              <div className="space-y-5">
                {profile.aboutDescription.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`leading-relaxed text-base sm:text-lg ${
                      index === 0
                        ? 'text-ink font-normal'
                        : index === profile.aboutDescription.length - 1
                        ? 'text-ink font-semibold'
                        : 'text-ink-soft'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Info Area below with border-t */}
              <div className="pt-8 border-t border-ink/15 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-ink-faint">ACADEMIC & LOCATIONAL PROFILE</span>
                  <span className="font-mono text-[0.68rem] text-accent font-medium">SPEC. 01–05</span>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                  <div className="space-y-1">
                    <dt className="eyebrow text-ink-faint flex items-center gap-1.5">
                      <GraduationCap className="w-3 h-3 text-accent" />
                      01 / Education
                    </dt>
                    <dd className="font-mono text-sm text-ink font-medium leading-snug">
                      {profile.education.degree}
                    </dd>
                  </div>

                  <div className="space-y-1">
                    <dt className="eyebrow text-ink-faint flex items-center gap-1.5">
                      <Building2 className="w-3 h-3 text-accent" />
                      02 / Institution
                    </dt>
                    <dd className="font-mono text-sm text-ink font-medium leading-snug">
                      {profile.education.institution}
                    </dd>
                  </div>

                  <div className="space-y-1">
                    <dt className="eyebrow text-ink-faint flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-accent" />
                      03 / Year
                    </dt>
                    <dd className="font-mono text-sm text-ink font-medium leading-snug">
                      {profile.education.year}
                    </dd>
                  </div>

                  <div className="space-y-1">
                    <dt className="eyebrow text-ink-faint flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-accent" />
                      04 / Location
                    </dt>
                    <dd className="font-mono text-sm text-ink font-medium leading-snug">
                      {profile.education.location}
                    </dd>
                  </div>
                </dl>

                {/* Interests with numbered tags */}
                <div className="pt-5 border-t border-ink/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Compass className="w-3 h-3 text-accent" />
                    <span className="eyebrow text-ink-faint">05 / Core Engineering Interests</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, idx) => (
                      <span key={interest} className="tag tag-pastel">
                        <span className="text-[0.65rem] text-accent/80 font-mono font-semibold">
                          {(idx + 1).toString().padStart(2, '0')}
                        </span>
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: AWS Event Photo in Editorial Frame */}
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="relative group">
                {/* Washi Masking Tape Decoration - Notebook artifact aesthetic */}
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#e3dcce]/95 border border-[#c2b79e]/60 rotate-[-1.5deg] shadow-xs z-30 pointer-events-none backdrop-blur-[0.5px]"
                  aria-hidden="true"
                />

                {/* Editorial Notebook Frame */}
                <div className="relative bg-paper border border-ink/15 p-4 sm:p-5 shadow-[4px_4px_0_0_rgba(26,23,20,0.08)] transition-transform duration-300">
                  {/* Top Frame Bar: Plate Badge & Metadata */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-ink/10">
                    <span className="sticker text-[0.65rem] font-mono tracking-wider">
                      Plate 02
                    </span>
                    <span className="annotation text-[0.65rem] text-ink-faint">
                      FIELD ARCHIVE / 2026
                    </span>
                  </div>

                  {/* Image with crop-marks container */}
                  <div className="relative overflow-hidden border border-ink/15 bg-paper-deep/40 crop-marks">
                    <img
                      src={awsEvent}
                      alt="Satish Maneddy at an AWS Community Event"
                      loading="lazy"
                      className="w-full h-auto object-cover max-h-[500px] sm:max-h-[560px] image-warm transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                    />
                  </div>

                  {/* Caption & Field Note */}
                  <div className="mt-4 pt-3 border-t border-ink/10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <p className="annotation font-mono text-[0.72rem] text-ink font-medium tracking-wide">
                      FIG. II — AN AWS STALL STORIES
                    </p>
                    <span className="annotation text-[0.65rem] text-ink-faint font-mono">
                      [ DOTT ADITYA UNIVERSITY ]
                    </span>
                  </div>

                  {/* Corner aesthetic registration detail */}
                  <div className="mt-2 text-[0.62rem] font-mono text-ink-faint/70 flex justify-between items-center">
                    <span>INDEX: REF-AWS-COMM-02</span>
                    <span>300 DPI // 1:1 CROP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
