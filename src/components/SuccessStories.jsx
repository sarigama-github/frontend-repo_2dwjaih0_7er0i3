const brand = {
  blue: '#3DA5D9',
  lightBlue: '#7CC6F2',
  green: '#A1C35A',
  darkGreen: '#4C8F2F',
  charcoal: '#303030'
}

const stories = [
  { title: 'Oil & Gas Mega Project', result: '1200 candidates mobilized in 60 days', client: 'Confidential – KSA' },
  { title: 'Hospitality Chain Expansion', result: '450 hires across 3 countries', client: 'UAE' },
  { title: 'Retail Workforce Ramp-up', result: '800 seasonal staff in 30 days', client: 'GCC' },
]

export default function SuccessStories() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: brand.charcoal }}>Success Stories</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {stories.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm">
              <div className="text-lg font-semibold" style={{ color: brand.charcoal }}>{s.title}</div>
              <div className="text-sm text-slate-600 mt-2">{s.client}</div>
              <div className="mt-4 p-4 rounded-xl text-sm font-medium" style={{ background: `linear-gradient(135deg, ${brand.lightBlue}1A, ${brand.green}1A)` }}>
                {s.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
