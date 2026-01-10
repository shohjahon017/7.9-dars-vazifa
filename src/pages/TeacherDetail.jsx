// import { useParams } from "react-router-dom";
// import teachers from "../data/teachers";

// export default function TeacherDetail() {
//   const { slug } = useParams();
//   const teacher = teachers.find((t) => t.slug === slug);

//   if (!teacher)
//     return (
//       <div className="text-center text-white py-24">O‘qituvchi topilmadi</div>
//     );

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-24 text-white">
//       <img
//         src={teacher.image}
//         alt={teacher.name}
//         className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-purple-500"
//       />

//       <h1 className="text-3xl font-bold text-center">{teacher.name}</h1>
//       <p className="text-center text-blue-400">{teacher.subject}</p>

//       <div className="mt-8 space-y-2 text-center text-white/80">
//         <p>🧑‍🏫 Tajriba: {teacher.experience}</p>
//         <p>🏆 Natija: {teacher.score}</p>
//         <p>{teacher.bio}</p>
//       </div>

//       <div className="mt-12 aspect-video rounded-xl overflow-hidden border border-white/20">
//         <iframe
//           src={teacher.video}
//           title={teacher.name}
//           className="w-full h-full"
//           allowFullScreen
//         />
//       </div>
//     </div>
//   );
// }
import { useParams, Link } from "react-router-dom";
import teachers from "../data/teachers";
import { motion } from "framer-motion";

export default function TeacherDetail() {
  const { slug } = useParams();
  const teacher = teachers.find((t) => t.slug === slug);

  if (!teacher) {
    return <div className="text-white text-center py-40">Topilmadi</div>;
  }

  return (
    <div className="text-white max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10"
      >
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-400"
          />

          <div>
            <h1 className="text-4xl font-extrabold mb-2">{teacher.name}</h1>
            <p className="text-blue-400 text-xl">{teacher.subject}</p>
            <p className="text-white/70 mt-4">{teacher.desc}</p>
            <p className="mt-2">🧠 Tajriba: {teacher.experience}</p>

            <Link
              to="/contact"
              className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition"
            >
              Darsga yozilish
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
