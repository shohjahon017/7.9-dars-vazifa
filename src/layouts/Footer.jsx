import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-black/50 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* YULDUZLAR */}
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 text-white">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Universe
          </h3>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            Zamonaviy bilimlar markazi. Farzandingiz kelajagi uchun eng to‘g‘ri
            tanlov.
          </p>
        </motion.div>

        {/* LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="font-semibold mb-4">Bo‘limlar</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses/it" className="hover:text-white">
                Kurslar
              </Link>
            </li>
            <li>
              <Link to="/teachers" className="hover:text-white">
                O‘qituvchilar
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Aloqa
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="font-semibold mb-4">Aloqa</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li>📍 Farg‘ona viloyati</li>
            <li>
              📞{" "}
              <a href="tel:+998901234567" className="hover:text-white">
                +998 90 123 45 67
              </a>
            </li>
            <li>
              💬{" "}
              <a
                href="https://t.me/USERNAME"
                target="_blank"
                className="hover:text-white"
              >
                Telegram
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative text-center text-white/40 text-sm py-4 border-t border-white/10">
        © {new Date().getFullYear()} Universe. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
