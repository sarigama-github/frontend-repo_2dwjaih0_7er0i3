import { useState } from 'react'

const brand = {
  blue: '#3DA5D9',
  lightBlue: '#7CC6F2',
  green: '#A1C35A',
  darkGreen: '#4C8F2F',
  charcoal: '#303030'
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) setStatus('Message sent. We will get back to you shortly.')
      else setStatus(data.detail || 'Something went wrong')
    } catch (e) {
      setStatus('Network error')
    }
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: brand.charcoal }}>Contact Us</h2>
          <p className="mt-3 text-slate-700">Have a project or hiring need? Send us a quick message.</p>
          <div className="mt-6 space-y-2 text-slate-700">
            <div><strong>Email:</strong> info@staffarabia.com</div>
            <div><strong>Phone:</strong> +20 100 000 0000</div>
            <div><strong>Address:</strong> Cairo, Egypt</div>
            <a href="https://wa.me/201000000000" className="inline-block mt-3 px-4 py-2 rounded-lg text-white" style={{ background: `linear-gradient(135deg, ${brand.green}, ${brand.darkGreen})` }}>WhatsApp Us</a>
          </div>
        </div>
        <form onSubmit={submit} className="bg-slate-50 ring-1 ring-slate-200 rounded-2xl p-6">
          <div className="grid grid-cols-2 gap-3">
            <input required placeholder="Name" className="px-3 py-2 rounded-lg ring-1 ring-slate-300" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} />
            <input required type="email" placeholder="Email" className="px-3 py-2 rounded-lg ring-1 ring-slate-300" value={form.email} onChange={e=>setForm({ ...form, email: e.target.value })} />
          </div>
          <input placeholder="Phone / WhatsApp" className="mt-3 w-full px-3 py-2 rounded-lg ring-1 ring-slate-300" value={form.phone} onChange={e=>setForm({ ...form, phone: e.target.value })} />
          <textarea required placeholder="Message" rows={4} className="mt-3 w-full px-3 py-2 rounded-lg ring-1 ring-slate-300" value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} />
          <button type="submit" className="mt-4 w-full px-4 py-3 rounded-lg text-white font-semibold" style={{ background: `linear-gradient(135deg, ${brand.blue}, ${brand.lightBlue})` }}>Send</button>
          {status && <div className="mt-3 text-sm text-slate-600">{status}</div>}
        </form>
      </div>
    </section>
  )
}
