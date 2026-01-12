// import { useParams, Link } from "react-router-dom";
// import courses from "../data/courses";
// import { motion } from "framer-motion";

// export default function CourseDetail() {
//   const { slug } = useParams();
//   const course = courses.find((c) => c.slug === slug);

//   if (!course) {
//     return <div className="text-center text-white">Kurs topilmadi</div>;
//   }

//   return (
//     <div className="text-white max-w-6xl mx-auto px-6 py-24">
//       {/* TITLE */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-16"
//       >
//         <div className="text-6xl mb-4">{course.icon}</div>
//         <motion.img
//           src={course.image}
//           alt={course.title}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="w-full max-h-[380px] object-cover rounded-3xl mb-12"
//         />

//         <h1 className="text-5xl font-extrabold mb-4">{course.title}</h1>
//         <p className="text-white/70 text-lg">{course.desc}</p>
//       </motion.div>

//       {/* INFO */}
//       <div className="grid md:grid-cols-2 gap-10">
//         <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
//           <h3 className="text-2xl font-bold mb-6">Kurs haqida</h3>
//           <ul className="space-y-3 text-white/80">
//             <li>📅 Davomiyligi: {course.duration}</li>
//             <li>📚 Darslar: {course.lessons}</li>
//             <li>🎓 Natija: {course.result}</li>
//             <li>👥 Kimlar uchun: {course.forWho}</li>
//           </ul>
//         </div>

//         <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
//           <h3 className="text-2xl font-bold mb-6">Nimalarni o‘rganasiz</h3>
//           <ul className="space-y-3">
//             {course.features?.map((f, i) => (
//               <li key={i} className="text-white/80">
//                 ✅ {f}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-16">
//         <Link
//           to={`/contact?course=${course.title}`}
//           className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-110 transition"
//         >
//           Bepul darsga yozilish
//         </Link>
//       </div>
//     </div>
//   );
// }
import { useParams, Link } from "react-router-dom";
import courses from "../data/courses";
import { motion } from "framer-motion";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Kurs topilmadi 😕
      </div>
    );
  }

  return (
    <div className="text-white max-w-7xl mx-auto px-6 py-24">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="text-7xl mb-6">{course.icon}</div>

        <h1 className="text-5xl font-extrabold mb-4">{course.title}</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">{course.desc}</p>
      </motion.div>

      {/* INFO CARDS */}
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2    ">
            <img className="w-10" src="/pin.png" alt="" /> Kurs haqida
          </h3>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-center gap-2">
              <img src="/time.png" alt="" /> Davomiyligi: {course.duration}
            </li>
            <li className="flex items-center gap-2">
              <img className="w-6" src="/books.png" alt="" /> Darslar:{" "}
              {course.lessons}
            </li>
            <li className="flex items-center gap-2">
              <img src="/graduation.png" alt="" /> Natija: {course.result}
            </li>
            <li className="flex items-center gap-3">
              <img className="w-6" src="/students.png    " alt="" /> Kimlar
              uchun: {course.forWho}
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6">✅ Nimalarni o‘rganasiz</h3>
          <ul className="space-y-3">
            {course.features.map((f, i) => (
              <li key={i} className="text-white/80">
                ✔ {f}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      {/* TIMELINE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-24"
      >
        <h2 className="text-3xl font-bold text-center mb-14">
          📈 O‘qish jarayoni
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-white/20 -translate-x-1/2"></div>

          {[
            {
              title: "Boshlang‘ich daraja",
              desc: "Asosiy tushunchalar va bilimlarni mustahkamlash",
            },
            {
              title: "Amaliy mashg‘ulotlar",
              desc: "Testlar, misollar va real topshiriqlar",
            },
            {
              title: "Nazorat va tahlil",
              desc: "Xatolar ustida ishlash va feedback",
            },
            {
              title: "Yakuniy natija",
              desc: course.result,
            },
          ].map((step, i) => (
            <div
              key={i}
              className={`relative mb-14 flex ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-5 h-5 bg-purple-500 rounded-full absolute left-1/2 -translate-x-1/2 top-2"></div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-[45%]">
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mt-20"
      >
        <Link
          to="/contact"
          className="inline-block px-12 py-4 rounded-full
          bg-gradient-to-r from-blue-500 to-purple-600
          hover:scale-110 transition font-semibold"
        >
          Bepul darsga yozilish
        </Link>
      </motion.div>
    </div>
  );
}
