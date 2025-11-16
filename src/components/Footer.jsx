const brand = {
  blue: '#3DA5D9',
  lightBlue: '#7CC6F2',
  green: '#A1C35A',
  darkGreen: '#4C8F2F',
  charcoal: '#303030'
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-xl font-bold">Staff Arabia</div>
          <p className="mt-2 text-sm text-slate-400">Recruitment • HR Outsourcing • Payroll • Overseas Hiring • Staffing Solutions</p>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {['Home','About','Services','Industries','Jobs','Contact'].map(i => <li key={i}>{i}</li>)}
          </ul>
        </div>
        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {['Recruitment','HR Outsourcing','Staffing','International'].map(i => <li key={i}>{i}</li>)}
          </ul>
        </div>
        <div>
          <div className="font-semibold">Follow</div>
          <div className="mt-3 flex gap-3 text-sm text-slate-300">
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
            <a href="#">X</a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Staff Arabia. All rights reserved.</div>
    </footer>
  )
}
