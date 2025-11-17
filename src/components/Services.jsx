import { Rocket, Coins, Megaphone, Users, FileText, Gift, Settings, Images, Link as LinkIcon, ShieldCheck, BarChart3, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Crypto Project Marketing & Launching',
    desc: 'From pre-launch buzz to post-launch momentum, we craft go-to-market plans that get you in front of the right audience.'
  },
  { icon: Coins, title: 'Tokenomics Strategy & Design', desc: 'Robust token models with smart distribution, liquidity, and incentives for sustainable growth.' },
  { icon: Megaphone, title: 'Web3 Marketing & Campaigns', desc: 'Targeted multi-channel campaigns across decentralized networks and social platforms.' },
  { icon: Users, title: 'Social Media Management & Handling', desc: 'Consistent voice, high-impact content, and community presence on X, Telegram, Discord, and Reddit.' },
  { icon: FileText, title: 'Content Marketing', desc: 'Memecoin avatars, infographics, tutorials, daily newsletters, and more—built to be shared.' },
  { icon: Gift, title: 'Community Engagement Campaigns', desc: 'Airdrops, giveaways, contests, and events that turn followers into advocates.' },
  { icon: Settings, title: 'DAO/Community Server Management', desc: 'Governance frameworks, proposal flows, and moderation for healthy on-chain communities.' },
  { icon: Images, title: 'NFT Promotion & Strategy', desc: 'End-to-end launch strategy with creators, influencers, and curated content.' },
  { icon: LinkIcon, title: 'Blockchain Partnerships', desc: 'Strategic alliances with L1s, DeFi platforms, and Web3 ecosystems to amplify reach.' },
  { icon: ShieldCheck, title: 'Reputation Management & PR', desc: 'Sentiment monitoring and proactive PR to protect and grow brand trust.' },
  { icon: BarChart3, title: 'Community Incubation & Growth', desc: 'Startup support with governance, incentives, and growth loops for long-term success.' },
  { icon: Sparkles, title: 'Influencer Outreach & Campaigns', desc: 'Authentic collabs with creators who can move markets and communities.' },
]

function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_10%_10%,rgba(56,189,248,0.15),transparent),radial-gradient(800px_circle_at_90%_30%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Our Services</h2>
          <p className="mt-4 text-white/70">A full-stack growth engine for crypto and Web3 projects.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 p-2 text-white shadow-lg">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                  <p className="text-white/70 text-sm mt-1">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
