import { motion } from "framer-motion";

export default function TeacherModal({ teacher, onClose }) {
  if (!teacher) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-900 max-w-lg w-full rounded-3xl p-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ✖
        </button>

        <img
          src={teacher.image}
          className="w-36 h-36 rounded-full mx-auto mb-4 border-4 border-purple-500"
        />

        <h2 className="text-2xl font-bold text-center">{teacher.name}</h2>
        <p className="text-center text-blue-400">{teacher.subject}</p>

        <div className="mt-6 space-y-2 text-white/80 text-sm">
          <p>🧑‍🏫 Tajriba: {teacher.experience}</p>
          <p>🏆 Natija: {teacher.score}</p>
          <p className="mt-3">{teacher.bio}</p>
        </div>
      </motion.div>
    </div>
  );
}
