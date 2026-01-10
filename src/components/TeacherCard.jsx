import { motion } from "framer-motion";

export default function TeacherCard({ teacher, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="cursor-pointer bg-white/10 backdrop-blur-xl
      border border-white/20 rounded-2xl p-6 text-center"
    >
      <img
        src={teacher.image}
        alt={teacher.name}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-purple-500"
      />

      <h3 className="text-xl font-semibold">{teacher.name}</h3>
      <p className="text-blue-400">{teacher.subject}</p>

      <p className="text-white/70 text-sm mt-2">
        Tajriba: {teacher.experience}
      </p>
    </motion.div>
  );
}
