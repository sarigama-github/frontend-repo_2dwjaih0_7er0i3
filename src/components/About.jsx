const brand = {
  blue: '#3DA5D9',
  lightBlue: '#7CC6F2',
  green: '#A1C35A',
  darkGreen: '#4C8F2F',
  charcoal: '#303030'
}

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: brand.charcoal }}>About Staff Arabia</h2>
            <p className="mt-4 text-slate-700 leading-7">
              Staff Arabia is a leading regional recruitment, HR outsourcing, and staffing agency supporting businesses across the Middle East, Gulf Region, Europe, and Africa. We specialize in connecting employers with highly qualified talent, delivering large-scale overseas recruitment projects, and providing full HR & payroll outsourcing solutions.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
              {[
                '20+ years industry experience',
                'Regional and international reach',
                'Specialists in mass hiring & overseas recruitment',
                'Trusted by major companies and government entities'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full" style={{ backgroundColor: brand.green }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["GCC", "MENA", "Europe", "Africa"].map((region) => (
              <div key={region} className="p-6 rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                <div className="text-2xl font-extrabold" style={{ color: brand.blue }}>{region}</div>
                <div className="text-sm text-slate-500 mt-1">Coverage</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
