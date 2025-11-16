import { motion } from 'framer-motion'

const brand = {
  blue: '#3DA5D9',
  lightBlue: '#7CC6F2',
  green: '#A1C35A',
  darkGreen: '#4C8F2F',
  charcoal: '#303030'
}

export default function Hero({ onHire, onFindJob }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(1200px 600px at 10% 10%, ${brand.lightBlue}22, transparent 60%), radial-gradient(1000px 500px at 90% 30%, ${brand.green}22, transparent 60%), linear-gradient(135deg, ${brand.lightBlue}11, #ffffff)`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-sm text-slate-600 bg-white/70 rounded-full px-3 py-1 ring-1 ring-slate-200">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: brand.green }} />
            Trusted HR Partner • 20+ Years
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight" style={{ color: brand.charcoal }}>
            Connecting Talent With Opportunity Across the Middle East & Beyond
          </h1>
          <p className="mt-5 text-lg text-slate-700 leading-7">
            Staff Arabia delivers recruitment, HR outsourcing, payroll, and staffing solutions with speed, scale, and compliance across the region and worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={onHire} className="px-5 py-3 rounded-lg text-white font-semibold shadow-sm hover:shadow-md transition"
              style={{ background: `linear-gradient(135deg, ${brand.blue}, ${brand.lightBlue})` }}>
              Hire Talent
            </button>
            <button onClick={onFindJob} className="px-5 py-3 rounded-lg font-semibold ring-1 ring-slate-200 bg-white text-slate-800 hover:bg-slate-50 transition">
              Find a Job
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-white/60 backdrop-blur-md rounded-3xl" />
          <div className="relative rounded-3xl p-6 ring-1 ring-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 gap-4">
              {['Oil & Gas','Construction','Healthcare','Hospitality','Retail','Logistics'].map((tag) => (
                <div key={tag} className="text-center px-3 py-4 rounded-xl bg-slate-50 ring-1 ring-slate-200">
                  <div className="text-sm font-semibold" style={{ color: brand.charcoal }}>{tag}</div>
                  <div className="mt-1 text-xs text-slate-500">Industry</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl" style={{ background: `linear-gradient(135deg, ${brand.lightBlue}1A, ${brand.green}1A)` }}>
              <p className="text-slate-700 text-sm">Global network • Dedicated project teams • Compliance-first mobilization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
