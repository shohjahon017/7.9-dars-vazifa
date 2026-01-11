import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative text-white min-h-screen overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e3a8a,_#020617)]" />
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-30 animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-6 py-28 space-y-24">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Biz <span className="text-blue-400">kim</span>miz?
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Biz — bilimni koinotdek keng ochib beradigan, natijaga ishlaydigan
            zamonaviy o‘quv markazmiz.
          </p>
        </motion.div>

        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">🎯 Bizning missiyamiz</h2>
            <p className="text-white/70 leading-relaxed">
              Har bir o‘quvchining salohiyatini ochish, uni mustaqil
              fikrlaydigan, yuqori natijalarga erisha oladigan shaxs sifatida
              tarbiyalash.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
            <ul className="space-y-4 text-lg">
              <li>🚀 Kuchli mentorlar</li>
              <li>📚 Sifatli dasturlar</li>
              <li>🎓 Natijaga yo‘naltirilgan ta’lim</li>
              <li>🌌 Ilhomlantiruvchi muhit</li>
            </ul>
          </div>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-4 gap-8 text-center"
        >
          {[
            { title: "500+", text: "O‘quvchilar" },
            { title: "5+", text: "Yillik tajriba" },
            { title: "10+", text: "Mentorlar" },
            { title: "90%", text: "Yuqori natija" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8"
            >
              <h3 className="text-4xl font-extrabold text-blue-400">
                {item.title}
              </h3>
              <p className="text-white/70 mt-2">{item.text}</p>
            </div>
          ))}
        </motion.div>

        {/* FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">🌠 Bilim — cheksiz koinot</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Biz bilan bilim olish — bu majburiyat emas, balki ilhom.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
