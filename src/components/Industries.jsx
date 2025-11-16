const brand = {
  blue: '#3DA5D9',
  lightBlue: '#7CC6F2',
  green: '#A1C35A',
  darkGreen: '#4C8F2F',
  charcoal: '#303030'
}

const industries = [
  'Oil & Gas', 'Construction', 'Hospitality', 'Retail', 'FMCG', 'Healthcare', 'Logistics', 'Manufacturing'
]

export default function Industries() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: brand.charcoal }}>Industries We Serve</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <div key={ind} className="p-6 rounded-2xl bg-slate-50 ring-1 ring-slate-200 text-center hover:shadow-md transition">
              <div className="text-sm font-semibold" style={{ color: brand.charcoal }}>{ind}</div>
              <div className="text-xs text-slate-500 mt-1">Expert hiring solutions</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
