function WhyUs() {
  const points = [
    {
      title: 'End-to-End Service',
      desc: "From brand to community, we handle the full journey so you can focus on building.",
    },
    {
      title: 'Tailored Strategies',
      desc: 'No templates. We design a growth system around your goals, niche, and stage.',
    },
    {
      title: 'Experienced Team',
      desc: 'Operators with feet in both blockchain and marketing for seamless execution.',
    },
    {
      title: 'Community-Centric',
      desc: 'We build strong, lasting communities that sustain momentum beyond launch.',
    },
  ]

  return (
    <section id="why" className="relative py-24 bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Why Choose Cyphernaut?</h2>
          <p className="mt-4 text-white/70">Battle-tested playbooks, custom execution, measurable impact.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="text-white/70 text-sm mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
