import { motion } from 'framer-motion'
import { Zap, Keyboard, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background: soft parchment + celestial grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(147,197,253,0.15),transparent_45%),linear-gradient(to_bottom,white,white,rgba(219,234,254,0.5))]" />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/70 px-4 py-1 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-medium tracking-wide text-blue-700">a desktop overlay for sales calls</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight text-gray-900">
            <span className="block lowercase">answer bolt</span>
            <span className="mt-2 block text-2xl font-normal text-blue-700/90 sm:text-3xl">summon truth with a keystroke</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-gray-600">
            Bring a quiet, elegant command palette over your screen. Ask from your company’s living library—docs, decks, and notes—and answer fast without breaking eye contact.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#demo" className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
              <Zap className="h-4 w-4 transition group-hover:rotate-6" />
              <span className="text-sm font-semibold">See the overlay</span>
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/50 px-5 py-3 text-blue-800 backdrop-blur transition hover:bg-white">
              <Keyboard className="h-4 w-4" />
              <span className="text-sm font-semibold">⌘ + K ritual</span>
            </a>
          </div>
        </motion.div>

        {/* Renaissance marginalia ornament */}
        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mx-auto mt-14 h-16 w-64 text-blue-200"
          viewBox="0 0 400 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 50 C 80 10, 120 10, 200 50 C 280 90, 320 90, 390 50" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="200" cy="50" r="3" fill="currentColor" />
        </motion.svg>
      </div>
    </section>
  )
}
