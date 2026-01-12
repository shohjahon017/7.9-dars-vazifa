import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "IELTS",
    slug: "ielts",
    desc: "Ingliz tili va xalqaro imtihonga tayyorlov",
    icon: "🌍",
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Matematika",
    slug: "matematika",
    desc: "Mantiq, DTM va maktab dasturi",
    icon: "📐",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Ona tili",
    slug: "ona-tili",
    desc: "Imlo, grammatika va DTM tayyorlov",
    icon: "📘",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Arab tili",
    slug: "arab-tili",
    desc: "Noldan boshlab mukammal darajagacha",
    icon: "🕌",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Kimyo",
    slug: "kimyo",
    desc: "Nazariya + masalalar + DTM",
    icon: "⚗️",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Tarix",
    slug: "tarix",
    desc: "O‘zbekiston va Jahon tarixi, DTM tayyorlov",
    icon: "🏛️",
    color: "from-amber-500 to-yellow-600",
  },
  {
    title: "Huquq",
    slug: "huquq",
    desc: "Konstitutsiya, huquq asoslari va testlar",
    icon: "⚖️",
    color: "from-indigo-500 to-purple-700",
  },
];

export default function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-white">
      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-center mb-6"
      >
        Bizning <span className="text-blue-400">kurslar</span>
      </motion.h1>

      <p className="text-center text-white/70 max-w-2xl mx-auto mb-16">
        Har bir kurs zamonaviy metodika, kuchli mentorlar va aniq natijaga
        yo‘naltirilgan
      </p>

      {/* COURSES GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, i) => (
          <motion.div
            key={course.slug}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="
              group relative overflow-hidden
              bg-white/10 backdrop-blur-xl
              border border-white/20
              rounded-3xl p-8
              hover:scale-[1.03] transition
            "
          >
            {/* GRADIENT GLOW */}
            <div
              className={`
                absolute inset-0 opacity-0 group-hover:opacity-20 transition
                bg-gradient-to-br ${course.color}
              `}
            />

            {/* ICON */}
            <div className="relative z-10 text-5xl mb-6">{course.icon}</div>

            {/* CONTENT */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <p className="text-white/70 mb-6">{course.desc}</p>

              <Link
                to={`/courses/${course.slug}`}
                className={`
                  inline-flex items-center gap-2
                  px-6 py-3 rounded-full font-semibold
                  bg-gradient-to-r ${course.color}
                  hover:scale-110 transition
                `}
              >
                Batafsil
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
