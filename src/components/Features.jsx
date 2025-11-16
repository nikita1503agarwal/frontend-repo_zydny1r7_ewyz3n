import { motion } from 'framer-motion'
import { ShieldCheck, Clock, Quote } from 'lucide-react'

const Feature = ({ title, children }) => (
  <div className="rounded-2xl border border-blue-100/80 bg-white/70 p-6 shadow-sm backdrop-blur">
    <h3 className="font-serif text-xl text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600">{children}</p>
  </div>
)

export default function Features() {
  return (
    <section id="features" className="relative py-8 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl text-gray-900 sm:text-4xl"
          >
            Built for the moment that wins the deal
          </motion.h2>
          <p className="mt-3 text-gray-600">Not a dashboard. Not a feed. A precision instrument for live conversations.</p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Feature title="Citations you can paste">
            Every answer carries its sources. Click to copy a citation block with links into the chat.
          </Feature>
          <Feature title="Private by design">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-700"/> SOC 2 patterns, redaction, and org boundaries.</span>
          </Feature>
          <Feature title="Faster than a thought">
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-blue-700"/> Cold-start optimized—answers land before the silence feels long.</span>
          </Feature>
          <Feature title="Whisper mode">
            Slim typography, low-contrast UI, tuned for screenshare modesty.
          </Feature>
          <Feature title="Remembered answers">
            Save golden replies as snippets; recall with a mnemonic tag.
          </Feature>
          <Feature title="Salesroom etiquette">
            Auto-mutes keyboard clack, dims notifications, and keeps your face lit.
          </Feature>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-12 max-w-3xl rounded-xl border border-blue-100 bg-white/70 p-6 text-gray-700 shadow-sm"
        >
          <div className="flex items-start gap-3">
            <Quote className="mt-1 h-5 w-5 text-blue-600" />
            <p className="text-balance">The first time I used answer bolt on a call, the demo just… breathed. No break in the thread, no alt-tab panic. We closed a week later.</p>
          </div>
          <div className="mt-3 text-right text-sm text-gray-500">— A.E., enterprise AE</div>
        </motion.blockquote>
      </div>
    </section>
  )
}
