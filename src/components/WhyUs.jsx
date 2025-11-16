import { ShieldCheck, Rocket, Globe, CheckCircle2, Users, Clock } from 'lucide-react'

const brand = {
  blue: '#3DA5D9',
  lightBlue: '#7CC6F2',
  green: '#A1C35A',
  darkGreen: '#4C8F2F',
  charcoal: '#303030'
}

const points = [
  { icon: ShieldCheck, text: 'Compliance always guaranteed' },
  { icon: Globe, text: 'Large international network' },
  { icon: Clock, text: 'Fast hiring turnaround' },
  { icon: Users, text: 'Dedicated project teams' },
  { icon: Rocket, text: 'Proven track record' },
  { icon: CheckCircle2, text: 'Flexible hiring & outsourcing models' },
]

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: brand.charcoal }}>Why Choose Us</h2>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {points.map(({ icon: Icon, text }) => (
            <div key={text} className="p-6 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${brand.blue}22, ${brand.green}22)` }}>
                <Icon size={20} color={brand.charcoal} />
              </div>
              <div className="font-medium text-slate-700">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
