import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05070f]">
      <img src="/universe.png" alt="" />{" "}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="w-14 h-14 rounded-full border-2 border-blue-500/30 border-t-blue-500"
      />
      {/* <p className="absolute bottom-16 text-white/60 text-sm tracking-wide">
        Loading...
      </p> */}
    </div>
  );
}
