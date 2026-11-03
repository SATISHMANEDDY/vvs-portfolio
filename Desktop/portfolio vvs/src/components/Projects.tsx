import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import { projects, archiveProjects, type Project } from '../data/projects';
import { useReveal } from '../hooks/useReveal';

const statusColorStyles: Record<string, string> = {
  blue: 'border-accent/30 bg-accent/10 text-accent',
  orange: 'border-accent-warm/30 bg-accent-warm/10 text-accent-warm',
  green: 'border-emerald-700/30 bg-emerald-700/10 text-emerald-800',
};

const statusDotStyles: Record<string, string> = {
  blue: 'bg-accent',
  orange: 'bg-accent-warm',
  green: 'bg-emerald-700',
};

function ProjectRowItem({ project }: { project: Project }) {
  const { ref, isInView } = useReveal();
  const shouldReduceMotion = useReducedMotion();
  const renderLinkedText = (item: string | { text: string; href: string }) =>
    typeof item === 'string' ? (
      item
    ) : (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
      >
        {item.text}
      </a>
    );

  return (
    <motion.article
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1 }
          : isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 24 }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
      }
      className="project-row border-t border-ink/15 py-12 lg:py-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Side: Metadata, Title, Description, Note, Tech Tags */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-accent-warm">
              [ {project.number} ]
            </span>
            <span className="eyebrow text-ink-soft">
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink leading-snug">
            {project.title}
          </h3>

          <p className="text-base text-ink-soft leading-relaxed">
            {project.description}
          </p>

          {project.brief && (
            <div className="space-y-7 pt-3 text-sm text-ink-soft leading-relaxed">
              <div>
                <span className="eyebrow text-ink-faint block mb-2">DOMAIN</span>
                <p>{project.brief.domain}</p>
              </div>

              <div>
                <span className="eyebrow text-ink-faint block mb-2">OVERVIEW</span>
                <div className="space-y-3">
                  {project.brief.overview.map((paragraph, index) => (
                    <p key={index}>{renderLinkedText(paragraph)}</p>
                  ))}
                </div>
              </div>

              <div>
                <span className="eyebrow text-ink-faint block mb-2">KEY CONTRIBUTIONS</span>
                <ul className="list-disc space-y-1.5 pl-5 marker:text-accent">
                  {project.brief.contributions.map((contribution, index) => (
                    <li key={index}>{renderLinkedText(contribution)}</li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="eyebrow text-ink-faint block mb-3">TECHNOLOGY STACK</span>
                <div className="space-y-3">
                  {project.brief.technologyStack.map((group) => (
                    <div key={group.label}>
                      <span className="font-mono text-[0.68rem] uppercase tracking-wider text-ink">
                        {group.label}
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1.5">
                        {group.items.map((item, index) => (
                          <span key={index} className="tag text-[0.65rem] bg-paper-deep/30">
                            {renderLinkedText(item)}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="eyebrow text-ink-faint block mb-2">TESTING</span>
                <ul className="list-disc space-y-1.5 pl-5 marker:text-accent">
                  {project.brief.testing.map((test) => <li key={test}>{test}</li>)}
                </ul>
              </div>

              <div className="border-l-2 border-accent/30 pl-4 space-y-3">
                <div>
                  <span className="eyebrow text-ink-faint block mb-1">PROJECT OBJECTIVE</span>
                  <p>{project.brief.objective}</p>
                </div>
                <div>
                  <span className="eyebrow text-ink-faint block mb-1">PROJECT FOCUS</span>
                  <p>{project.brief.focus}</p>
                </div>
              </div>

              <div>
                <span className="eyebrow text-ink-faint block mb-2">TECHNICAL REFERENCES</span>
                <ol className="list-decimal space-y-1.5 pl-5 marker:text-accent">
                  {project.brief.references.map((reference) => (
                    <li key={reference.href}>
                      <a
                        href={reference.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
                      >
                        {reference.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {project.note && (
            <p className="annotation text-accent-warm mt-4 italic bg-accent-warm/5 p-3.5 rounded-xs border-l-2 border-accent-warm">
              * {project.note}
            </p>
          )}

          <div className="pt-3">
            <span className="eyebrow text-ink-faint block mb-2">TECHNOLOGIES & TOOLING</span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag text-[0.68rem] bg-paper-deep/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Status Badge, Architecture Flow, Team, Links */}
        <div className="lg:col-span-5 space-y-4">
          {/* Status Badge */}
          <div className="flex items-center justify-start lg:justify-end">
            <span
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[0.68rem] font-mono uppercase tracking-wider border font-medium ${
                statusColorStyles[project.statusColor] || 'border-ink/20 text-ink bg-paper'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  statusDotStyles[project.statusColor] || 'bg-ink'
                }`}
              />
              {project.status}
            </span>
          </div>

          {/* Architecture Flow Diagram (e.g. for Project 01) */}
          {project.archFlow && (
            <div className="mt-5 p-4 sm:p-5 rounded-xs border border-ink/15 bg-paper-deep/30">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-ink/10">
                <span className="eyebrow text-ink-faint">EVENT-DRIVEN ARCHITECTURE</span>
                <span className="font-mono text-[0.65rem] text-accent font-medium">AWS HPC PIPELINE</span>
              </div>
              <div className="arch-flow">
                {project.archFlow.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="arch-node">{step}</span>
                    {idx < project.archFlow!.length - 1 && (
                      <span className="arch-arrow" aria-hidden="true">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {project.gallery && (
            <div className="mt-5 p-4 sm:p-5 rounded-xs border border-ink/15 bg-paper-deep/20">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-ink/10">
                <span className="eyebrow text-ink-faint">PROJECT FIELD PLATES</span>
                <span className="font-mono text-[0.65rem] text-accent font-medium">
                  {project.gallery.length} VISUALS
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {project.gallery.map((image, index) => (
                  <figure key={image.src} className="group/frame">
                    <div className="relative bg-paper p-1.5 border border-ink/20 shadow-[3px_3px_0_0_rgba(26,23,20,0.12)] transition-transform duration-300 group-hover/frame:-translate-y-0.5">
                      <div className="overflow-hidden border border-ink/10 bg-paper-deep/40 crop-marks">
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover image-warm transition-transform duration-500 group-hover/frame:scale-[1.03]"
                        />
                      </div>
                    </div>
                    <figcaption className="mt-2 font-mono text-[0.58rem] leading-tight text-ink-faint">
                      PLATE {String(index + 1).padStart(2, '0')} / {image.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* Team Members (e.g. for Project 04) */}
          {project.team && project.team.length > 0 && (
            <div className="mt-5 p-4 sm:p-5 rounded-xs border border-ink/15 bg-paper-deep/20">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-ink/10">
                <span className="eyebrow text-ink-faint">ENGINEERING TEAM</span>
                <span className="font-mono text-[0.65rem] text-ink-faint">
                  {project.team.length} CONTRIBUTORS
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.team.map((member) => {
                  const isSelf = member.toLowerCase().includes('satish');
                  return (
                    <span
                      key={member}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-xs border transition-colors ${
                        isSelf
                          ? 'border-accent/40 bg-accent/10 text-accent font-semibold'
                          : 'border-ink/15 text-ink-soft bg-paper'
                      }`}
                    >
                      {isSelf && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                      {member}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* External Links if available */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-3 pt-3 justify-start lg:justify-end">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chrome-pill"
                >
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chrome-pill"
                >
                  <span>Live Interface</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ArchiveSection() {
  const { ref, isInView } = useReveal();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1 }
          : isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 24 }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
      }
      className="mt-16 sm:mt-24 pt-12 border-t-2 border-ink/20"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 mb-8">
        <div>
          <span className="eyebrow text-ink-faint block mb-1">
            APPENDIX / RESEARCH & IDEATION
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-medium text-ink tracking-tight">
            EXPERIMENTAL ARCHIVE
          </h3>
        </div>
        <p className="annotation text-ink-soft max-w-sm sm:text-right">
          Early conceptual explorations, architecture studies, and exploratory prototypes.
        </p>
      </div>

      <div className="divide-y divide-ink/10 border-y border-ink/15">
        {archiveProjects.map((item, index) => (
          <div
            key={item.title}
            className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-paper-deep/30 px-3 -mx-3 transition-colors rounded-xs"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-ink-faint shrink-0">
                ARCH-{(index + 1).toString().padStart(2, '0')}
              </span>
              <h4 className="font-display text-lg sm:text-xl text-ink font-medium">
                {item.title}
              </h4>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 self-start sm:self-auto shrink-0">
              <span className="eyebrow text-ink-soft text-[0.65rem]">
                {item.category}
              </span>
              <span className="font-mono text-[0.68rem] text-ink-faint px-3 py-1 border border-ink/15 rounded-full bg-paper">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { ref, isInView } = useReveal();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-20 lg:py-28 relative">
      <div className="shell">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="section-number">02</span>
            <div className="dot-leader" />
            <span className="tag">
              <Sparkles className="w-3 h-3 text-accent" />
              Selected Builds
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16 pb-8 border-b border-ink/10">
            <div>
              <span className="eyebrow text-ink-faint block mb-2">CATALOG OF IMPLEMENTATIONS</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink leading-[1.15]">
                Projects are where ideas
                <br />
                meet <span className="italic text-accent">implementation</span>.
              </h2>
            </div>
            <p className="annotation lg:text-right max-w-sm text-ink-soft">
              SECTION 02 / SELECTED BUILDS & PROTOTYPES
              <br />
              <span className="text-ink-faint">
                Cloud Infrastructure • Backend Systems • AI Research
              </span>
            </p>
          </div>
        </motion.div>

        {/* Project Editorial Rows */}
        <div className="space-y-0">
          {projects.map((project) => (
            <ProjectRowItem key={project.id} project={project} />
          ))}
        </div>

        {/* Archive Section */}
        <ArchiveSection />
      </div>
    </section>
  );
}
