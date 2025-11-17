import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Why Cyphernaut', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-400 shadow-lg" />
            <span className="text-white font-semibold tracking-tight text-lg">Cyphernaut</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-xl bg-white text-slate-900 font-semibold px-4 py-2 shadow hover:shadow-lg transition">
              Get Started
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm">
          <div className="absolute right-4 top-4">
            <button onClick={() => setOpen(false)} className="text-white p-2 rounded-lg border border-white/10 bg-white/10" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-24 mx-6 rounded-2xl border border-white/10 bg-slate-900/80 p-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/90 text-base py-2">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-4 py-3 shadow">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
