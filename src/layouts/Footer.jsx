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
              <Link to="/courses" className="hover:text-white">
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
            <li>
              {" "}
              <a
                href="https://maps.app.goo.gl/87AMmQUGfa4LA5qN8"
                className="flex gap-2 items-center"
              >
                <img className="w-5 h-5" src="/location.png" alt="" />
                Farg`ona viloyati So`x tumani Soy bo`yida Mo`ljal: Sohil
                To`yxonasi{" "}
              </a>
            </li>
            <li>
              <a
                href="tel:+998901234567"
                className="hover:text-white flex gap-2 items-center"
              >
                <img src="/phone.png" alt="" />
                +998 90 123 45 67
              </a>
            </li>
            <li className=" ">
              <a
                href="https://t.me/USERNAME"
                target="_blank"
                className="hover:text-white flex gap-1 items-center"
              >
                {" "}
                <img className="w-5 h-5" src="/telegram.svg" alt="" />
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
