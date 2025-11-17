import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Message sent! We will reach out shortly.')
      e.target.reset()
    } catch (err) {
      setStatus('Failed to send. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Ready to Launch?</h2>
          <p className="mt-4 text-white/70">Tell us about your project and goals. We’ll craft a plan to get you there.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" required placeholder="Name" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" />
              <input type="email" name="email" required placeholder="Email" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" />
              <textarea name="message" required placeholder="Tell us about your project" rows="5" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" />
              <button type="submit" className="inline-flex items-center rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 shadow hover:shadow-lg transition">
                Send Message
              </button>
              {status && <p className="text-white/80 text-sm">{status}</p>}
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-white/80">
            <ul className="space-y-3 text-sm">
              <li>End-to-End Service: branding, launch, growth</li>
              <li>Tokenomics, DAO setup, and community ops</li>
              <li>Influencer and partnership orchestration</li>
              <li>Performance reporting and continuous iteration</li>
            </ul>
            <p className="mt-4 text-white/60 text-xs">We typically reply within 24 hours.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
