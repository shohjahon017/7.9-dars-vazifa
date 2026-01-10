// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, Pagination } from "swiper/modules";

// // import "swiper/css";
// // import "swiper/css/pagination";

// // export default function CoursesSlider() {
// //   const courses = [
// //     {
// //       title: "IT (Frontend / Backend)",
// //       desc: "React, Node.js, real loyihalar",
// //       icon: "💻",
// //     },
// //     {
// //       title: "Ingliz tili",
// //       desc: "General English, Speaking",
// //       icon: "🇬🇧",
// //     },
// //     {
// //       title: "IELTS",
// //       desc: "7+ ball uchun tayyorgarlik",
// //       icon: "🎯",
// //     },
// //     {
// //       title: "Matematika",
// //       desc: "Maktab va abituriyentlar",
// //       icon: "📐",
// //     },
// //     {
// //       title: "Robototexnika",
// //       desc: "Bolalar uchun STEAM",
// //       icon: "🤖",
// //     },
// //   ];

// //   return (
// //     <section className="max-w-7xl mx-auto px-6 py-24">
// //       <h2 className="text-4xl font-bold text-center mb-14">
// //         Bizning <span className="text-blue-400">kurslar</span>
// //       </h2>

// //       <Swiper
// //         modules={[Autoplay, Pagination]}
// //         spaceBetween={30}
// //         slidesPerView={1}
// //         pagination={{ clickable: true }}
// //         autoplay={{ delay: 3000 }}
// //         breakpoints={{
// //           768: { slidesPerView: 2 },
// //           1024: { slidesPerView: 3 },
// //         }}
// //         className="pb-14"
// //       >
// //         {courses.map((c, i) => (
// //           <SwiperSlide key={i}>
// //             <div
// //               className="
// //                 h-full bg-white/10 backdrop-blur-xl
// //                 border border-white/20 rounded-2xl
// //                 p-8 text-center
// //                 hover:scale-105 transition
// //                 shadow-lg shadow-purple-500/10
// //               "
// //             >
// //               <div className="text-6xl mb-6">{c.icon}</div>
// //               <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
// //               <p className="text-white/70 mb-6">{c.desc}</p>

// //               <button
// //                 className="
// //                   px-6 py-2 rounded-full
// //                   bg-gradient-to-r from-blue-500 to-purple-600
// //                   hover:scale-110 transition
// //                 "
// //               >
// //                 Batafsil
// //               </button>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </section>
// //   );
// // }
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Link } from "react-router-dom";

// import "swiper/css";
// import "swiper/css/pagination";

// export default function CoursesSlider() {
//   const courses = [
//     {
//       slug: "ielts",
//       title: "IELTS",
//       desc: "7+ ball uchun professional tayyorgarlik",
//       icon: "🎯",
//     },
//     {
//       slug: "matematika",
//       title: "Matematika",
//       desc: "Maktab va abituriyentlar uchun chuqur tayyorlov",
//       icon: "📐",
//     },
//     {
//       slug: "ona-tili",
//       title: "Ona tili",
//       desc: "Grammatika, testlar va yozma savodxonlik",
//       icon: "📘",
//     },
//     {
//       slug: "kimyo",
//       title: "Kimyo",
//       desc: "Nazariya + masalalar + imtihon tayyorlov",
//       icon: "🧪",
//     },
//     {
//       slug: "arab-tili",
//       title: "Arab tili",
//       desc: "Boshlang‘ichdan mukammalgacha",
//       icon: "🕌",
//     },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-24">
//       <h2 className="text-4xl font-bold text-center mb-14">
//         Bizning <span className="text-blue-400">kurslar</span>
//       </h2>
//       {/* <Link
//         to={`/courses/${c.title.toLowerCase().replace(" ", "-")}`}
//         className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition"
//       >
//         Batafsil
//       </Link> */}

//       <Swiper
//         modules={[Autoplay, Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         breakpoints={{
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="pb-14"
//       >
//         {courses.map((c, i) => (
//           <SwiperSlide key={i}>
//             <div
//               className="
//                 h-full bg-white/10 backdrop-blur-xl
//                 border border-white/20 rounded-2xl
//                 p-8 text-center
//                 hover:scale-105 transition
//                 shadow-lg shadow-purple-500/10
//               "
//             >
//               <div className="text-6xl mb-6">{c.icon}</div>
//               <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
//               <p className="text-white/70 mb-6">{c.desc}</p>

//               <Link to={`/courses/${c.slug}`}>Batafsil</Link>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const courses = [
  {
    slug: "ielts",
    title: "IELTS",
    desc: "7+ ball uchun professional tayyorgarlik",
    icon: "🎯",
    color: "from-blue-500 to-purple-500",
  },
  {
    slug: "matematika",
    title: "Matematika",
    desc: "Maktab va abituriyentlar uchun",
    icon: "📐",
    color: "from-purple-500 to-pink-500",
  },
  {
    slug: "ona-tili",
    title: "Ona tili",
    desc: "Savodxonlik va testlar",
    icon: "📘",
    color: "from-indigo-500 to-blue-500",
  },
  {
    slug: "kimyo",
    title: "Kimyo",
    desc: "Nazariya + masalalar",
    icon: "🧪",
    color: "from-green-500 to-emerald-500",
  },
  {
    slug: "arab-tili",
    title: "Arab tili",
    desc: "Boshlang‘ichdan mukammalgacha",
    icon: "🕌",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function CoursesSlider() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-14">
        Bizning <span className="text-blue-400">kurslar</span>
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-14"
      >
        {courses.map((c, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                relative h-full
                bg-white/10 backdrop-blur-xl
                border border-white/20 rounded-3xl
                p-8 text-center
                hover:scale-105 transition
                shadow-xl shadow-purple-500/10
                overflow-hidden
              "
            >
              {/* GRADIENT DECOR */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r ${c.color} opacity-20 blur-2xl`}
              />

              <div className="relative z-10">
                <div className="text-6xl mb-6">{c.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                <p className="text-white/70 mb-6">{c.desc}</p>

                <Link
                  to={`/courses/${c.slug}`}
                  className="inline-block px-6 py-2 rounded-full
                    bg-gradient-to-r from-blue-500 to-purple-600
                    hover:scale-110 transition"
                >
                  Batafsil
                </Link>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
