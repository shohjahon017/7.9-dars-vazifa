// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { fadeLeft, fadeRight, fadeUp } from "../animations";

// /* COUNTER */
// function Counter({ to }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const interval = setInterval(() => {
//       start += Math.ceil(to / 50);
//       if (start >= to) {
//         start = to;
//         clearInterval(interval);
//       }
//       setCount(start);
//     }, 30);

//     return () => clearInterval(interval);
//   }, [to]);

//   return <span>{count}+</span>;
// }

// /* TELEGRAM SEND */
// async function sendToTelegram(name, phone, course) {
//   const TOKEN = "BOT_TOKENINGNI_BU_YERGA_QO‘Y";
//   const CHAT_ID = "CHAT_ID_BU_YERGA";
//   const text = `
// 📩 Yangi ariza:
// 👤 Ism: ${name}
// 📞 Telefon: ${phone}
// 📚 Kurs: ${course}
//   `;

//   await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       chat_id: CHAT_ID,
//       text,
//     }),
//   });
// }

// export default function Home() {
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   return (
//     <div className="text-white">
//       {/* HERO */}
//       <section className="min-h-[90vh] flex items-center justify-center text-center px-4">
//         <div className="max-w-4xl space-y-6">
//           <h1 className="text-5xl md:text-6xl font-extrabold">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Universe
//             </span>{" "}
//             bilan kelajagingni qur
//           </h1>
//           <p className="text-white/80 text-lg">
//             Zamonaviy ta’lim · Kuchli natija · Professional mentorlar
//           </p>
//         </div>
//       </section>
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           Nega aynan <span className="text-blue-400">Universe</span>?
//         </h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {[
//             {
//               icon: "🚀",
//               title: "Amaliy ta’lim",
//               text: "Faqat nazariya emas, real mashg‘ulotlar va misollar",
//             },
//             {
//               icon: "🧠",
//               title: "Mantiqiy fikrlash",
//               text: "Bola mustaqil o‘ylashni va yechim topishni o‘rganadi",
//             },
//             {
//               icon: "🎯",
//               title: "Aniq natija",
//               text: "Imtihonlar, IELTS va kelajak kasbi uchun tayyorgarlik",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center hover:scale-105 transition"
//             >
//               <div className="text-5xl mb-4">{item.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-white/70">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="py-24 bg-white/5">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-16">
//             Ta’lim jarayoni qanday?
//           </h2>

//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             {[
//               "Bepul sinov dars",
//               "Darajani aniqlash",
//               "Shaxsiy reja",
//               "Natija va rivojlanish",
//             ].map((step, i) => (
//               <div key={i}>
//                 <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center font-bold text-xl mb-4">
//                   {i + 1}
//                 </div>
//                 <p className="text-white/80">{step}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="max-w-6xl mx-auto px-6 py-24">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           Ota-onalar fikri
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {[1, 2, 3].map((i) => (
//             <div
//               key={i}
//               className="bg-white/10 border border-white/20 rounded-2xl p-6"
//             >
//               <p className="text-white/80 mb-4">
//                 “Farzandim o‘qishga qiziqa boshladi. Natijalar juda yaxshi.”
//               </p>
//               <p className="font-semibold">— Ota-ona</p>
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="py-24 text-center">
//         <h2 className="text-4xl font-bold mb-6">Bilim — eng katta sarmoya</h2>
//         <p className="text-white/70 mb-8">
//           Bugun boshlang, ertaga natijasini ko‘ring
//         </p>

//         <a
//           href="#form"
//           className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-110 transition"
//         >
//           Bepul darsga yozilish
//         </a>
//       </section>

//       {/* STATS */}
//       <section className="py-20 bg-white/5">
//         <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           <div>
//             <h3 className="text-4xl font-bold text-blue-400">
//               <Counter to={500} />
//             </h3>
//             <p className="text-white/70">O‘quvchi</p>
//           </div>
//           <div>
//             <h3 className="text-4xl font-bold text-purple-400">
//               <Counter to={15} />
//             </h3>
//             <p className="text-white/70">Mentor</p>
//           </div>
//           <div>
//             <h3 className="text-4xl font-bold text-blue-400">
//               <Counter to={10} />
//             </h3>
//             <p className="text-white/70">Kurs</p>
//           </div>
//           <div>
//             <h3 className="text-4xl font-bold text-purple-400">
//               <Counter to={95} />
//             </h3>
//             <p className="text-white/70">Natija %</p>
//           </div>
//         </div>
//       </section>

//       {/* FORM */}
//       <section className="py-20">
//         <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
//           <h2 className="text-3xl font-bold mb-4">Bepul konsultatsiya</h2>

//           <form
//             onSubmit={async (e) => {
//               e.preventDefault();
//               setLoading(true);
//               setSuccess(false);

//               const name = e.target.name.value;
//               const phone = e.target.phone.value;
//               const course = e.target.course.value;

//               await sendToTelegram(name, phone, course);

//               setLoading(false);
//               setSuccess(true);
//               e.target.reset();
//             }}
//             className="space-y-4"
//           >
//             <input
//               name="name"
//               placeholder="Ismingiz"
//               required
//               className="w-full px-4 py-3 rounded bg-white/20 outline-none"
//             />

//             <input
//               name="phone"
//               placeholder="Telefon raqam"
//               required
//               className="w-full px-4 py-3 rounded bg-white/20 outline-none"
//             />

//             <select
//               name="course"
//               required
//               className="w-full px-4 py-3 rounded bg-gray-800 text-white outline-none"
//             >
//               <option value="">Kursni tanlang</option>
//               <option value="IT">IT</option>
//               <option value="Ingliz tili">Ingliz tili</option>
//               <option value="Matematika">Matematika</option>
//               <option value="IELTS">IELTS</option>
//             </select>

//             <button
//               disabled={loading}
//               className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition"
//             >
//               {loading ? "Yuborilmoqda..." : "Yuborish"}
//             </button>

//             {success && (
//               <p className="text-green-400 text-sm">
//                 ✅ Ariza yuborildi, tez orada bog‘lanamiz
//               </p>
//             )}
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CoursesSlider from "../components/CoursesSlider";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

/* ================= COUNTER ================= */
function Counter({ to }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += Math.ceil(to / 50);
      if (start >= to) {
        start = to;
        clearInterval(interval);
      }
      setCount(start);
    }, 30);

    return () => clearInterval(interval);
  }, [to]);

  return <span>{count}+</span>;
}

/* ================= TELEGRAM ================= */
async function sendToTelegram(name, phone, course) {
  const TOKEN = "8589345013:AAFQsCZvQcg76WCzhVPAJh1y0h5ftg1NoaA";
  const CHAT_ID = "5149152346";

  const text = `
📩 Yangi ariza:
👤 Ism: ${name}
📞 Telefon: ${phone}
📚 Kurs: ${course}
`;

  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text }),
  });
}

/* ================= HOME ================= */
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className="text-white">
      {/* ================= HERO ================= */}
      <section className="min-h-[90vh] flex items-center justify-center text-center px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Universe
            </span>{" "}
            bilan kelajagingni qur
          </h1>
          <p className="text-white/80 text-lg">
            Zamonaviy ta’lim · Kuchli natija · Professional mentorlar
          </p>
        </motion.div>
      </section>

      {/* ================= NEGA UNIVERSE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Nega aynan <span className="text-blue-400">Universe</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: "🚀",
              title: "Amaliy ta’lim",
              text: "Faqat nazariya emas, real mashg‘ulotlar va misollar",
            },
            {
              icon: "🧠",
              title: "Mantiqiy fikrlash",
              text: "Bola mustaqil o‘ylashni va yechim topishni o‘rganadi",
            },
            {
              icon: "🎯",
              title: "Aniq natija",
              text: "Imtihonlar, IELTS va kelajak kasbi uchun tayyorgarlik",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.2 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/70">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <CoursesSlider />

      {/* ================= TA’LIM JARAYONI ================= */}
      <section className="py-24 bg-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Ta’lim jarayoni qanday?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Bepul sinov dars",
              "Darajani aniqlash",
              "Shaxsiy reja",
              "Natija va rivojlanish",
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center font-bold text-xl mb-4">
                  {i + 1}
                </div>
                <p className="text-white/80">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OTA-ONALAR FIKRI ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Ota-onalar fikri
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="bg-white/10 border border-white/20 rounded-2xl p-6"
            >
              <p className="text-white/80 mb-4">
                “Farzandim o‘qishga qiziqa boshladi. Natijalar juda yaxshi.”
              </p>
              <p className="font-semibold">— Ota-ona</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["O‘quvchi", 500],
            ["Mentor", 15],
            ["Kurs", 10],
            ["Natija %", 95],
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-4xl font-bold text-blue-400">
                <Counter to={item[1]} />
              </h3>
              <p className="text-white/70">{item[0]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white/5">
        <h2 className="text-4xl font-bold text-center mb-10">Bizning manzil</h2>

        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-white/20">
          <motion.div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1406.4451476884299!2d71.13093478973241!3d39.95741117988986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1767979179838!5m2!1sru!2s"
              className="w-full h-[420px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />{" "}
          </motion.div>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Bepul konsultatsiya</h2>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              setSuccess(false);

              await sendToTelegram(
                e.target.name.value,
                e.target.phone.value,
                e.target.course.value
              );

              setLoading(false);
              setSuccess(true);
              e.target.reset();
            }}
            className="space-y-4"
          >
            <input
              name="name"
              placeholder="Ismingiz"
              required
              className="w-full px-4 py-3 rounded bg-white/20 outline-none"
            />
            <input
              name="phone"
              placeholder="Telefon raqam"
              required
              className="w-full px-4 py-3 rounded bg-white/20 outline-none"
            />
            <select
              name="course"
              required
              className="w-full px-4 py-3 rounded bg-gray-900 outline-none"
            >
              <option value="">Kursni tanlang</option>
              <option value="IT">IT</option>
              <option value="Ingliz tili">Ingliz tili</option>
              <option value="Matematika">Matematika</option>
              <option value="IELTS">IELTS</option>
            </select>

            <button
              disabled={loading}
              className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            >
              {loading ? "Yuborilmoqda..." : "Yuborish"}
            </button>

            {success && (
              <p className="text-green-400 text-sm">
                ✅ Ariza yuborildi, tez orada bog‘lanamiz
              </p>
            )}
          </form>
        </motion.div>
      </section>
    </div>
  );
}
