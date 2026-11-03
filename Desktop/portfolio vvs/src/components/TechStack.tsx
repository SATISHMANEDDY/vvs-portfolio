import { useReducedMotion, motion, type Variants } from 'framer-motion';
import { Sparkles, Wrench } from 'lucide-react';
import { technologies } from '../data/technologies';
import { useReveal } from '../hooks/useReveal';

const logoSlugs: Record<string, string> = {
  Java: 'java',
  Python: 'python',
  JavaScript: 'javascript',
  HTML: 'html5',
  CSS: 'css3',
  React: 'react',
  'Node.js': 'nodedotjs',
  'Express.js': 'express',
  'Next.js': 'nextdotjs',
  FastAPI: 'fastapi',
  AWS: 'amazonaws',
  EC2: 'amazonec2',
  S3: 'amazons3',
  IAM: 'amazoniam',
  VPC: 'amazonvpc',
  Lambda: 'awslambda',
  SQS: 'amazonsqs',
  Terraform: 'terraform',
  Linux: 'linux',
  Ubuntu: 'ubuntu',
  Apache: 'apache',
  MongoDB: 'mongodb',
  PostgreSQL: 'postgresql',
  Git: 'git',
  GitHub: 'github',
  'VS Code': 'visualstudiocode',
  'IntelliJ IDEA': 'intellijidea',
};

const localLogoPaths: Record<string, string> = {
  AWS: '/logos/aws.svg',
  EC2: '/logos/ec2.svg',
  S3: '/logos/s3.svg',
  IAM: '/logos/iam.svg',
  VPC: '/logos/vpc.svg',
};

export function TechStack() {
  const { ref, isInView } = useReveal();
  const shouldReduceMotion = useReducedMotion();

  // Compute total tools across all bench categories
  const totalTools = technologies.reduce((acc, cat) => acc + cat.items.length, 0);
  const projectCount = technologies.reduce(
    (acc, cat) => acc + cat.items.filter((i) => i.type === 'project').length,
    0,
  );
  const exploringCount = totalTools - projectCount;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.025,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="stack" className="scroll-mt-20 py-16 sm:py-20 lg:py-28 relative">
      <div className="shell">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 flex-1">
            <span className="section-number">06</span>
            <span className="dot-leader" />
            <span className="tag">
              <Sparkles className="w-3 h-3 text-accent" />
              The Bench
            </span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft border border-border rounded-full px-3 py-1 bg-paper-deep/40">
            <Wrench className="w-3 h-3 text-accent" />
            <span>{totalTools} tools in the bench</span>
          </div>
        </div>

        {/* Section Title & Subtitle */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-ink leading-[1.15]">
            Tools I work with<br />
            and continue to <span className="italic text-accent">explore</span>.
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-ink-soft text-sm sm:text-base font-sans">
            <p className="max-w-xl">
              An itemized inventory of languages, frameworks, cloud services, and developer tooling applied in active repositories or currently being researched.
            </p>
            <div className="sm:hidden inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-soft border border-border rounded-full px-3 py-1 bg-paper-deep/40">
              <Wrench className="w-3 h-3 text-accent" />
              <span>{totalTools} tools in the bench</span>
            </div>
          </div>
        </div>

        {/* Inventory Ledger Summary & Legend */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3.5 px-4 sm:px-5 rounded-lg border border-border bg-paper-deep/30 mb-10 text-xs font-mono">
          <div className="flex items-center gap-2 text-ink font-medium">
            <Wrench className="w-3.5 h-3.5 text-accent" />
            <span className="uppercase tracking-wider">
              {totalTools} tools in the bench
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-ink-soft">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-xs border border-border bg-paper shadow-2xs" />
              <span>Solid: In Projects ({projectCount})</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-xs border border-dashed border-accent bg-accent/10" />
              <span>Dashed: Exploring ({exploringCount})</span>
            </div>
          </div>
        </div>

        {/* Numbered Inventory Categories */}
        <div ref={ref} className="space-y-10 lg:space-y-12">
          {technologies.map((category, catIdx) => (
            <div key={category.name} className="space-y-4">
              {/* Category Eyebrow Header */}
              <div className="flex items-baseline justify-between border-b border-border/80 pb-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-accent font-medium">
                    [{String(catIdx + 1).padStart(2, '0')}]
                  </span>
                  <h3 className="eyebrow text-ink font-semibold tracking-[0.14em]">
                    {category.name}
                  </h3>
                </div>
                <span className="annotation text-xs font-mono">
                  {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
                </span>
              </div>

              {/* Grid of Interactive Tech Tags */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
              >
                {category.items.map((item, itemIdx) => {
                  const isExploring = item.type === 'exploring';
                  return (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.025, y: -2 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                      className={`group relative flex flex-col justify-between p-3.5 rounded-lg transition-all duration-200 cursor-default select-none ${
                        isExploring
                          ? 'border border-dashed border-accent/50 bg-accent/[0.04] hover:border-accent hover:bg-accent/[0.08]'
                          : 'border border-border bg-paper hover:border-accent hover:bg-paper-deep/40 shadow-2xs'
                      }`}
                    >
                      {/* Top Row: Item Number & Type Indicator */}
                      <div className="flex items-center justify-between gap-1 mb-2.5">
                        <span className="font-mono text-[0.65rem] text-ink-faint group-hover:text-accent transition-colors font-medium">
                          {String(itemIdx + 1).padStart(2, '0')}
                        </span>
                        {isExploring ? (
                          <span className="font-mono text-[0.6rem] uppercase tracking-wider px-1.5 py-0.5 rounded bg-accent/15 text-accent font-semibold border border-accent/30">
                            exploring
                          </span>
                        ) : (
                          <span
                            className="inline-block w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent transition-colors"
                            title="Applied in project"
                          />
                        )}
                      </div>

                      {/* Bottom Row: Name */}
                      <div className="flex items-center gap-2.5 min-w-0">
                        {(localLogoPaths[item.name] || logoSlugs[item.name]) && (
                          <img
                            src={
                              localLogoPaths[item.name] ||
                              `https://cdn.simpleicons.org/${logoSlugs[item.name]}`
                            }
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className="w-5 h-5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                        )}
                        <span className="font-mono text-xs sm:text-sm font-medium text-ink group-hover:text-accent transition-colors truncate">
                        {item.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
