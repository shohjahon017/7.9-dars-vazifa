import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="
            fixed bottom-6 right-6 z-50
            w-14 h-14 rounded-full
            bg-gradient-to-r from-blue-500 to-purple-600
            flex items-center justify-center
            shadow-lg shadow-purple-500/40
            hover:scale-110 transition
          "
        >
          ⬆️
        </motion.button>
      )}
    </AnimatePresence>
  );
}
