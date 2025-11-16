import { Briefcase, Users, Globe2, FileText } from 'lucide-react'

const brand = {
  blue: '#3DA5D9',
  lightBlue: '#7CC6F2',
  green: '#A1C35A',
  darkGreen: '#4C8F2F',
  charcoal: '#303030'
}

const services = [
  {
    title: 'Recruitment Services',
    points: ['Local & overseas hiring', 'Executive search', 'Mass recruitment campaigns', 'End-to-end talent acquisition'],
    icon: Briefcase,
  },
  {
    title: 'HR Outsourcing',
    points: ['Workforce management', 'HR operations', 'Payroll outsourcing', 'Compliance & documentation'],
    icon: FileText,
  },
  {
    title: 'Staffing Solutions',
    points: ['Temporary staffing', 'Long-term manpower supply', 'Project-based staffing'],
    icon: Users,
  },
  {
    title: 'International Recruitment',
    points: ['Overseas talent mobilization', 'Visa processing & documentation', 'Large-scale workforce deployment'],
    icon: Globe2,
  },
]

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: brand.charcoal }}>Our Services</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ title, points, icon: Icon }) => (
            <div key={title} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${brand.blue}22, ${brand.green}22)` }}>
                  <Icon size={20} color={brand.charcoal} />
                </div>
                <h3 className="font-semibold" style={{ color: brand.charcoal }}>{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {points.map(p => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brand.green }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
