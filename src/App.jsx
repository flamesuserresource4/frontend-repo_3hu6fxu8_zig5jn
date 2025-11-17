import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Contact />
      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Cyphernaut. All rights reserved.</p>
          <a href="/test" className="text-white/50 hover:text-white/80 text-sm">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
