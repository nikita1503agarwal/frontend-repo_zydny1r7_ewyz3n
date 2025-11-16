import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Subtle top nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-blue-100/60">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <div className="font-serif text-xl lowercase">answer bolt</div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#demo" className="hover:text-blue-700">demo</a>
            <a href="#features" className="hover:text-blue-700">features</a>
            <a href="#contact" className="hover:text-blue-700">contact</a>
          </nav>
          <a href="#waitlist" className="rounded-full bg-blue-600 px-4 py-2 text-white text-sm font-semibold shadow-sm hover:bg-blue-700">join waitlist</a>
        </div>
      </header>

      <main>
        <Hero />
        <Showcase />

        {/* Renaissance divider with animated stars */}
        <section className="relative py-8">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.8 }}
              className="relative h-24"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
              </div>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 3.5, delay: i * 0.3 }}
                  className="absolute h-1 w-1 rounded-full bg-blue-400"
                  style={{ left: `${8 + i * 12}%`, top: `${40 + (i % 3) * 8}%` }}
                />
              ))}
            </motion.div>
          </div>
        </section>

        <Features />

        {/* Contact / Waitlist */}
        <section id="contact" className="relative py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-2xl border border-blue-100 bg-white/70 p-8 shadow-sm backdrop-blur">
              <h3 className="font-serif text-2xl">Invite-only beta</h3>
              <p className="mt-2 text-gray-600">We’re onboarding teams who live on calls. Tell us about your workflow and we’ll reach out.</p>
              <form className="mt-6 grid gap-3 sm:grid-cols-3">
                <input className="rounded-md border border-blue-100 bg-white/70 px-3 py-2 outline-none placeholder:text-blue-300 focus:border-blue-300 sm:col-span-2" placeholder="work email" />
                <button className="rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700">join waitlist</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
