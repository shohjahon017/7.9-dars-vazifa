// import { useState } from "react";
// import teachers from "../data/teachers";
// import TeacherCard from "../components/TeacherCard";
// import TeacherModal from "../components/TeacherModal";

// export default function Teachers() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-24 text-white">
//       <h1 className="text-4xl font-bold text-center mb-16">
//         Bizning mentorlar
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//         {teachers.map((t) => (
//           <TeacherCard key={t.id} teacher={t} onClick={() => setSelected(t)} />
//         ))}
//       </div>

//       <TeacherModal teacher={selected} onClose={() => setSelected(null)} />
//     </div>
//   );
// }
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import teachers from "../data/teachers";

export default function Teachers() {
  return (
    <div className="relative text-white min-h-screen overflow-hidden">
      {/* STAR BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e3a8a,_#020617)]" />
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-30 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-extrabold text-center mb-16">
          Bizning <span className="text-blue-400">mentorlar</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {teachers.map((t, i) => (
            <motion.div
              key={t.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-center hover:scale-105 transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6 border-4 border-blue-400"
              />

              <h3 className="text-2xl font-bold">{t.name}</h3>
              <p className="text-blue-400">{t.subject}</p>
              <p className="text-white/70 text-sm mt-2">
                Tajriba: {t.experience}
              </p>

              <Link
                to={`/teachers/${t.slug}`}
                className="inline-block mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition"
              >
                Batafsil
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
