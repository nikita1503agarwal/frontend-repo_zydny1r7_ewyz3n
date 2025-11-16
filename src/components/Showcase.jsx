import { motion } from 'framer-motion'
import { Command, FileText, BookOpen, Search } from 'lucide-react'

export default function Showcase() {
  return (
    <section id="demo" className="relative py-8 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Faux desktop with overlay animation */}
          <div className="relative order-2 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/50 shadow-xl lg:order-1">
            {/* desktop content */}
            <div className="grid h-[360px] w-full grid-cols-6">
              <div className="col-span-1 border-r border-blue-100/70 bg-white/60 p-3">
                <div className="mb-3 h-3 w-20 rounded bg-blue-100" />
                <div className="space-y-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-2.5 w-24 rounded bg-blue-50" />
                  ))}
                </div>
              </div>
              <div className="col-span-5 bg-white/80 p-5">
                <div className="mb-4 h-6 w-44 rounded bg-blue-100" />
                <div className="space-y-2">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div key={i} className="h-2.5 w-full rounded bg-blue-50" />
                  ))}
                </div>
              </div>
            </div>

            {/* overlay */}
            <motion.div
              initial={{ y: -320, opacity: 0 }}
              whileInView={{ y: -20, opacity: 1 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ type: 'spring', stiffness: 90, damping: 16, delay: 0.2 }}
              className="absolute left-1/2 top-0 w-[92%] -translate-x-1/2 overflow-hidden rounded-xl border border-blue-200/70 bg-white/90 shadow-2xl backdrop-blur-lg"
            >
              <div className="flex items-center gap-3 border-b border-blue-100/80 px-4 py-3">
                <Command className="h-4 w-4 text-blue-700" />
                <input
                  className="h-8 w-full bg-transparent text-sm outline-none placeholder:text-blue-400"
                  placeholder="ask your library… ‘pricing for enterprise?’, ‘compare plan limits’, ‘latest SOC-2 scope’"
                />
              </div>
              <div className="grid grid-cols-3 gap-3 p-4">
                <div className="group rounded-lg border border-blue-100 bg-white/70 p-3 transition hover:border-blue-200 hover:bg-white">
                  <div className="flex items-center gap-2 text-blue-800"><FileText className="h-4 w-4" /> documents</div>
                  <p className="mt-1 text-xs text-gray-500">slides, PDFs, notes</p>
                </div>
                <div className="group rounded-lg border border-blue-100 bg-white/70 p-3 transition hover:border-blue-200 hover:bg-white">
                  <div className="flex items-center gap-2 text-blue-800"><BookOpen className="h-4 w-4" /> playbooks</div>
                  <p className="mt-1 text-xs text-gray-500">discovery → close</p>
                </div>
                <div className="group rounded-lg border border-blue-100 bg-white/70 p-3 transition hover:border-blue-200 hover:bg-white">
                  <div className="flex items-center gap-2 text-blue-800"><Search className="h-4 w-4" /> snippets</div>
                  <p className="mt-1 text-xs text-gray-500">answers you saved</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Copy with romantic tone */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl leading-tight text-gray-900 sm:text-4xl">The pause becomes a performance</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              You tap a key. A quiet window arrives like a stagehand, handing you the right line. No tab juggling, no whispered Slack. Just poise.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500"/> Trained on your company library with retrieval—precise, citeable, current.</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500"/> Works over any screen share. Stays subtle; never upstages your call.</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500"/> Keyboard-first. Designed for momentum, not mouse miles.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
