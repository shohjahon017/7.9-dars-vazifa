import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import { motion } from "framer-motion";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return <div className="text-center text-white">Kurs topilmadi</div>;
  }

  return (
    <div className="text-white max-w-6xl mx-auto px-6 py-24">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="text-6xl mb-4">{course.icon}</div>
        <h1 className="text-5xl font-extrabold mb-4">{course.title}</h1>
        <p className="text-white/70 text-lg">{course.desc}</p>
      </motion.div>

      {/* INFO */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Kurs haqida</h3>
          <ul className="space-y-3 text-white/80">
            <li>📅 Davomiyligi: {course.duration}</li>
            <li>📚 Darslar: {course.lessons}</li>
            <li>🎓 Natija: {course.result}</li>
            <li>👥 Kimlar uchun: {course.forWho}</li>
          </ul>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Nimalarni o‘rganasiz</h3>
          <ul className="space-y-3">
            {course.features.map((f, i) => (
              <li key={i} className="text-white/80">
                ✅ {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link
          to="/#form"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-110 transition"
        >
          Bepul darsga yozilish
        </Link>
      </div>
    </div>
  );
}
