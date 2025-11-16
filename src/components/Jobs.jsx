import { useEffect, useState } from 'react'

const brand = {
  blue: '#3DA5D9',
  lightBlue: '#7CC6F2',
  green: '#A1C35A',
  darkGreen: '#4C8F2F',
  charcoal: '#303030'
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export default function Jobs() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ category: '', location: '', type: '' })

  const fetchJobs = async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (filters.category) params.append('category', filters.category)
    if (filters.location) params.append('location', filters.location)
    if (filters.type) params.append('type', filters.type)
    const res = await fetch(`${BACKEND_URL}/api/jobs?${params.toString()}`)
    const data = await res.json()
    setJobs(data.items || [])
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: brand.charcoal }}>Featured Jobs</h2>
          <div className="flex flex-wrap gap-2">
            <input placeholder="Category" value={filters.category} onChange={e=>setFilters({ ...filters, category: e.target.value })} className="px-3 py-2 rounded-lg ring-1 ring-slate-300 text-sm" />
            <input placeholder="Location" value={filters.location} onChange={e=>setFilters({ ...filters, location: e.target.value })} className="px-3 py-2 rounded-lg ring-1 ring-slate-300 text-sm" />
            <select value={filters.type} onChange={e=>setFilters({ ...filters, type: e.target.value })} className="px-3 py-2 rounded-lg ring-1 ring-slate-300 text-sm">
              <option value="">Type</option>
              {['Full-time','Part-time','Contract','Temporary'].map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <button onClick={fetchJobs} className="px-4 py-2 rounded-lg text-white font-medium" style={{ background: `linear-gradient(135deg, ${brand.blue}, ${brand.lightBlue})` }}>Filter</button>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {loading ? (
            <div className="text-slate-500">Loading jobs...</div>
          ) : jobs.length === 0 ? (
            <div className="text-slate-500">No jobs found. Try adjusting filters.</div>
          ) : (
            jobs.map(job => (
              <div key={job._id} className="p-6 rounded-2xl bg-slate-50 ring-1 ring-slate-200 flex flex-col gap-2">
                <div className="text-sm text-slate-500">{job.company} • {job.location}</div>
                <div className="text-xl font-semibold" style={{ color: brand.charcoal }}>{job.title}</div>
                <div className="text-sm text-slate-600">{job.category} • {job.type}</div>
                <div className="mt-3 flex gap-3">
                  <a href={job.apply_url || '#'} className="px-4 py-2 rounded-lg text-white text-sm font-medium" style={{ background: `linear-gradient(135deg, ${brand.green}, ${brand.darkGreen})` }}>Apply Now</a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
