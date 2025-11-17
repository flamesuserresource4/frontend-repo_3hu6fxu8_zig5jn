import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900" />
        <div className="mx-auto max-w-7xl px-6 pt-36 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/90 text-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Web3 Growth Studio</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Cyphernaut: Your Gateway to Crypto Success
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl">
              We launch, market, and grow crypto & Web3 projects with data-driven strategy, community-first execution, and stunning content that resonates.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 shadow hover:shadow-lg transition">
                Explore Services
              </a>
              <a href="#contact" className="inline-flex items-center rounded-xl border border-white/20 text-white px-5 py-3 hover:bg-white/10 transition">
                Get a Proposal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
