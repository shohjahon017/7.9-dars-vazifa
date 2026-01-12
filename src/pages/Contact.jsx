// import { motion } from "framer-motion";

// export default function Contact() {
//   return (
//     <div className="relative min-h-screen text-white overflow-hidden">
//       {/* BACKGROUND */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e3a8a,_#020617)]" />

//       <div className="relative max-w-6xl mx-auto px-6 py-32">
//         {/* TITLE */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-20"
//         >
//           <h1 className="text-5xl font-extrabold mb-4">
//             Biz bilan <span className="text-blue-400">bog‘laning</span>
//           </h1>
//           <p className="text-white/70 text-lg">
//             Savollaringiz bormi? Bepul konsultatsiya uchun murojaat qiling
//           </p>
//         </motion.div>

//         {/* CONTENT */}
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* INFO */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="space-y-6"
//           >
//             <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
//               <h3 className="text-2xl font-bold mb-4">📍 Manzil</h3>
//               <p className="text-white/80">
//                 Farg‘ona viloyati, Universe o‘quv markazi
//               </p>
//             </div>

//             <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
//               <h3 className="text-2xl font-bold mb-4">📞 Telefon</h3>
//               <a
//                 href="tel:+998901234567"
//                 className="text-blue-400 hover:underline"
//               >
//                 +998 90 123 45 67
//               </a>
//             </div>

//             <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
//               <h3 className="text-2xl font-bold mb-4">💬 Telegram</h3>
//               <a
//                 href="https://t.me/your_username"
//                 target="_blank"
//                 className="text-blue-400 hover:underline"
//               >
//                 @
//               </a>
//             </div>
//           </motion.div>

//           {/* FORM */}
//           <motion.form
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             onSubmit={(e) => {
//               e.preventDefault();
//               alert("Ariza yuborildi ✅");
//               e.target.reset();
//             }}
//             className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 space-y-4"
//           >
//             <h3 className="text-3xl font-bold mb-4 text-center">
//               Bepul konsultatsiya
//             </h3>

//             <input
//               required
//               placeholder="Ismingiz"
//               className="w-full px-4 py-3 rounded-xl bg-white/20 outline-none text-white placeholder:text-white/60"
//             />

//             <input
//               required
//               placeholder="Telefon raqam"
//               className="w-full px-4 py-3 rounded-xl bg-white/20 outline-none text-white placeholder:text-white/60"
//             />

//             <textarea
//               rows="4"
//               placeholder="Xabaringiz"
//               className="w-full px-4 py-3 rounded-xl bg-white/20 outline-none text-white placeholder:text-white/60"
//             />

//             <button
//               className="
//                 w-full py-3 rounded-full
//                 bg-gradient-to-r from-blue-500 to-purple-600
//                 font-semibold text-lg
//                 hover:scale-105 transition
//               "
//             >
//               Yuborish
//             </button>
//           </motion.form>
//         </div>

//         {/* MAP */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="mt-20 rounded-3xl overflow-hidden border border-white/20"
//         >
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1406.4451476884299!2d71.13093478973241!3d39.95741117988986"
//             className="w-full h-[420px] border-0"
//             loading="lazy"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// }
import { motion } from "framer-motion";
import { useState } from "react";

const BOT_TOKEN = "8589345013:AAFQsCZvQcg76WCzhVPAJh1y0h5ftg1NoaA";
const CHAT_ID = "5149152346";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendToTelegram = async (name, phone, message) => {
    const text = `
📩 Yangi murojaat:
👤 Ism: ${name}
📞 Telefon: ${phone}
💬 Xabar: ${message || "—"}
`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
      }),
    });
  };

  return (
    <div className="relative min-h-screen text-white -top-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e3a8a,_#020617)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-32">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-extrabold mb-4">
            Biz bilan <span className="text-blue-400">bog‘laning</span>
          </h1>
          <p className="text-white/70">
            Bepul konsultatsiya uchun ma’lumot qoldiring
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            setSuccess(false);

            const name = e.target.name.value;
            const phone = e.target.phone.value;
            const message = e.target.message.value;

            await sendToTelegram(name, phone, message);

            setLoading(false);
            setSuccess(true);
            e.target.reset();
          }}
          className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 space-y-4"
        >
          <input
            name="name"
            required
            placeholder="Ismingiz"
            className="w-full px-4 py-3 rounded-xl bg-white/20 outline-none"
          />

          {/* 🇺🇿 UZBEK PHONE ONLY */}
          <input
            name="phone"
            required
            type="tel"
            defaultValue="+998"
            pattern="^\+998[0-9]{9}$"
            maxLength={13}
            placeholder="+998901234567"
            title="Telefon raqam +998 bilan boshlanishi va 9 ta raqam bo‘lishi kerak"
            className="w-full px-4 py-3 rounded-xl bg-white/20 outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Xabaringiz (ixtiyoriy)"
            className="w-full px-4 py-3 rounded-xl bg-white/20 outline-none"
          />

          <button
            disabled={loading}
            className="
              w-full py-3 rounded-full
              bg-gradient-to-r from-blue-500 to-purple-600
              font-semibold
              hover:scale-105 transition
              disabled:opacity-50
            "
          >
            {loading ? "Yuborilmoqda..." : "Yuborish"}
          </button>

          {success && (
            <p className="text-green-400 text-center text-sm">
              ✅ Ariza yuborildi, tez orada bog‘lanamiz
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
}
