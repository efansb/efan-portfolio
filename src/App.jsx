import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sun, Moon, Star } from "lucide-react"

export default function App() {
  const [dark, setDark] = useState(true)
  const [form, setForm] = useState({name:"", email:"", message:""})

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  const handleWA = (e) => {
    e.preventDefault()
    const noWA = "6287829524664" // <-- GANTI DENGAN NO WA KAMU. Format 62 tanpa +
    const text = `Halo Efan, ada pesan baru:%0A%0A*Nama*: ${form.name}%0A*Email*: ${form.email}%0A*Pesan*: ${form.message}`
    window.open(`https://wa.me/${noWA}?text=${text}`, "_blank")
    // submit juga ke email via formspree
    e.target.submit()
  }

  const testimonials = [
    {nama:"Budi Santoso", job:"CEO Toko ABC", testi:"Hasil webnya keren banget, cepat dan rapi. Rekomendasi!"},
    {nama:"Sari", job:"Owner UMKM Kuliner", testi:"Efan bener2 ngerti maunya klien. Komunikasi lancar."},
    {nama:"Andi", job:"Freelancer", testi:"Desain modern + loading cepat. Worth it banget."},
  ]

  return (
    <div className={`${dark? 'bg-[#0f0f11] text-white' : 'bg-white text-black'} min-h-screen transition`}>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 sticky top-0 backdrop-blur z-50 bg-opacity-70">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">EfanSB</h1>
        <div className="flex gap-6 items-center">
          <ul className="hidden md:flex gap-6">
            {["Home","Portfolio","Testimoni","About","Contact"].map(i=><a key={i} href={`#${i.toLowerCase()}`} className="hover:text-purple-400">{i}</a>)}
          </ul>
          <button onClick={()=>setDark(!dark)} className="p-2 rounded-full border">
            {dark? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="text-center py-32 px-8">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-5xl font-bold mb-4">Halo, Saya Efan S. Bachtiar</motion.h1>
        <p className="text-gray-500 max-w-xl mx-auto">Web Developer dari Tangerang. Bikin website yang cepat & estetik.</p>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-8">
        <h2 className="text-3xl text-center mb-10">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1,2,3].map(i=>(
            <div key={i} className="bg-gray-200 dark:bg-[#1a1a22] p-5 rounded-xl hover:scale-105 transition">
              <img src={`https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Project+${i}`} className="rounded-lg mb-3"/>
              <h3 className="font-bold">Project {i}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimoni BARU */}
      <section id="testimoni" className="py-20 px-8 bg-gray-100 dark:bg-[#111]">
        <h2 className="text-3xl text-center mb-10">Apa Kata Klien</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map(t=>(
            <div key={t.nama} className="bg-white dark:bg-[#1a1a22] p-6 rounded-xl shadow">
              <div className="flex gap-1 text-yellow-400 mb-3">{[...Array(5)].map((_,i)=><Star key={i} size={16} fill="currentColor"/>)}</div>
              <p className="italic mb-4">"{t.testi}"</p>
              <p className="font-bold">{t.nama}</p>
              <p className="text-sm text-gray-500">{t.job}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form ke Email + WA */}
      <section id="contact" className="py-20 px-8">
        <h2 className="text-3xl text-center mb-10">Contact</h2>
        <form
          action="https://formspree.io/f/mrpzevyp" // <-- GANTI DENGAN ID FORMSPREE KAMU
          method="POST"
          onSubmit={handleWA}
          className="max-w-md mx-auto flex-col gap-4">
          <input name="name" onChange={e=>setForm({...form, name:e.target.value})} className="p-3 rounded bg-gray-200 dark:bg-[#222]" placeholder="Nama" required/>
          <input name="email" type="email" onChange={e=>setForm({...form, email:e.target.value})} className="p-3 rounded bg-gray-200 dark:bg-[#222]" placeholder="Email" required/>
          <textarea name="message" rows="4" onChange={e=>setForm({...form, message:e.target.value})} className="p-3 rounded bg-gray-200 dark:bg-[#222]" placeholder="Pesan" required/>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold">Kirim ke Email & WA</button>
        </form>
        <p className="text-center text-sm mt-3 text-gray-500">*Pesan akan masuk ke email + notifikasi WA kamu</p>
      </section>

      <footer className="text-center py-8 text-gray-500">© 2026 Efan S. Bachtiar</footer>
    </div>
  )
}