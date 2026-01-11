// // // import { Link, useLocation } from "react-router-dom";
// // // import { useState, useEffect } from "react";

// // // function MainLayout({ children }) {
// // //   const { pathname } = useLocation();
// // //   const [open, setOpen] = useState(false);
// // //   const [dark, setDark] = useState(false);
// // //   const [dropdown, setDropdown] = useState(false);

// // //   useEffect(() => {
// // //     if (dark) {
// // //       document.documentElement.classList.add("dark");
// // //     } else {
// // //       document.documentElement.classList.remove("dark");
// // //     }
// // //   }, [dark]);

// // //   const linkClass = (path) =>
// // //     pathname === path ? "text-blue-600 font-semibold" : "hover:text-blue-600";

// // //   return (
// // //     <>
// // //       <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
// // //         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
// // //           <Link to="/" className="text-2xl font-bold text-blue-600">
// // //             O‘quv Markaz
// // //           </Link>

// // //           <nav className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200">
// // //             <Link to="/" className={linkClass("/")}>
// // //               Home
// // //             </Link>

// // //             <div className="relative">
// // //               <button
// // //                 onClick={() => setDropdown(!dropdown)}
// // //                 className="hover:text-blue-600"
// // //               >
// // //                 Kurslar ▾
// // //               </button>
// // //               {dropdown && (
// // //                 <div className="absolute top-8 left-0 bg-white dark:bg-gray-800 shadow rounded w-40">
// // //                   <Link
// // //                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
// // //                     to="/courses/it"
// // //                   >
// // //                     IT
// // //                   </Link>
// // //                   <Link
// // //                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
// // //                     to="/courses/english"
// // //                   >
// // //                     Ingliz tili
// // //                   </Link>
// // //                   <Link
// // //                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
// // //                     to="/courses/math"
// // //                   >
// // //                     Matematika
// // //                   </Link>
// // //                 </div>
// // //               )}
// // //             </div>

// // //             <Link to="/teachers" className={linkClass("/teachers")}>
// // //               O‘qituvchilar
// // //             </Link>
// // //             <Link to="/contact" className={linkClass("/contact")}>
// // //               Aloqa
// // //             </Link>

// // //             <a
// // //               href="tel:+998901234567"
// // //               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // //             >
// // //               📞 Qo‘ng‘iroq
// // //             </a>

// // //             <button onClick={() => setDark(!dark)} className="text-xl">
// // //               {dark ? "☀️" : "🌙"}
// // //             </button>
// // //           </nav>

// // //           <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
// // //             ☰
// // //           </button>
// // //         </div>

// // //         {open && (
// // //           <div className="md:hidden bg-white dark:bg-gray-900 shadow">
// // //             <nav className="flex flex-col gap-4 p-4 text-gray-700 dark:text-gray-200">
// // //               <Link onClick={() => setOpen(false)} to="/">
// // //                 Home
// // //               </Link>
// // //               <Link onClick={() => setOpen(false)} to="/courses/it">
// // //                 Kurslar
// // //               </Link>
// // //               <Link onClick={() => setOpen(false)} to="/teachers">
// // //                 O‘qituvchilar
// // //               </Link>
// // //               <Link onClick={() => setOpen(false)} to="/contact">
// // //                 Aloqa
// // //               </Link>
// // //             </nav>
// // //           </div>
// // //         )}
// // //       </header>

// // //       <main className="pt-16 bg-gray-50 dark:bg-gray-950 min-h-screen">
// // //         {children}
// // //       </main>
// // //     </>
// // //   );
// // // }

// // // export default MainLayout;
// // {
// //   /*
// //               {dropdown && (
// //                 <div className="absolute top-8 left-0 w-44 rounded-xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden">
// //                   {[
// //                     "IELTS",
// //                     "Ona tili",
// //                     "Arab tili",
// //                     "Kimyo",
// //                     "Ingliz tili",
// //                     "Matematika",
// //                   ].map((item, i) => (
// //                     <Link
// //                       key={i}
// //                       to={`/courses/${item.toLowerCase().replace(" ", "")}`}
// //                       className="block px-4 py-3 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
// //                     >
// //                       {item}
// //                     </Link>
// //                   ))}
// //                 </div>
// //               )} */
// // }
// // import { Link, useLocation, Outlet } from "react-router-dom";
// // import { useState, useEffect } from "react";

// // import Footer from "./Footer";
// // import ScrollToTop from "../components/ScrollToTop";
// // import StarsBackground from "../components/StarsBackground";

// // function MainLayout({}) {
// //   const { pathname } = useLocation();
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [dark, setDark] = useState(false);
// //   const [dropdown, setDropdown] = useState(false);
// //   const menuCourses = [
// //     { title: "IELTS", slug: "ielts" },
// //     { title: "Ona tili", slug: "ona-tili" },
// //     { title: "Arab tili", slug: "arab-tili" },
// //     { title: "Kimyo", slug: "kimyo" },
// //     { title: "Ingliz tili", slug: "ingliz-tili" },
// //     { title: "Matematika", slug: "matematika" },
// //   ];

// //   useEffect(() => {
// //     document.documentElement.classList.toggle("dark", dark);
// //   }, [dark]);

// //   const linkClass = (path) =>
// //     pathname === path
// //       ? "text-blue-500 font-semibold"
// //       : "text-gray-700 dark:text-gray-300 hover:text-blue-500 transition";

// //   return (
// //     <>
// //       <StarsBackground />

// //       <header className="fixed top-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-white/20">
// //         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
// //           {/* LOGO */}
// //           <Link
// //             to="/"
// //             className=" flex items-center gap-2 text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
// //           >
// //             <img className="w-6 h-6" src="/universe.png" alt="" />
// //             Universe
// //           </Link>

// //           {/* DESKTOP MENU */}
// //           <nav className="hidden md:flex items-center gap-8">
// //             <Link to="/" className={linkClass("/")}>
// //               Home
// //             </Link>

// //             {/* DROPDOWN */}
// //             <div
// //               className="relative"
// //               onMouseEnter={() => setDropdown(true)}
// //               onMouseLeave={() => setDropdown(false)}
// //             >
// //               <button className="flex items-center gap-1 hover:text-blue-500 min-h-[48px] text-base">
// //                 Kurslar
// //                 <span className="text-sm">▾</span>
// //               </button>

// //               {dropdown && (
// //                 <div className="absolute top-10 -left-6 w-34 rounded-xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden">
// //                   {menuCourses.map((item, i) => (
// //                     <Link
// //                       key={i}
// //                       to={`/courses/${item.slug}`}
// //                       className="block px-4 py-3 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
// //                     >
// //                       {item.title}
// //                     </Link>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //             <Link to="/about">About</Link>

// //             <Link to="/teachers" className={linkClass("/teachers")}>
// //               O‘qituvchilar
// //             </Link>

// //             <Link to="/contact" className={linkClass("/contact")}>
// //               Aloqa
// //             </Link>

// //             {/* CTA */}
// //             <a
// //               href="tel:+998901234567"
// //               className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow hover:scale-105 transition"
// //             >
// //               Bepul dars
// //             </a>

// //             {/* DARK MODE
// //             <button
// //               onClick={() => setDark(!dark)}
// //               className="text-xl hover:scale-110 transition"
// //             >
// //               {dark ? "☀️" : "🌙"}
// //             </button> */}
// //           </nav>

// //           <button
// //             className="md:hidden text-2xl "
// //             onClick={() => setMenuOpen(!menuOpen)}
// //           >
// //             ☰
// //           </button>
// //         </div>

// //         {/* MOBILE MENU */}
// //         {menuOpen && (
// //           <div className="md:hidden bg-white dark:bg-gray-900 shadow-xl">
// //             <nav className="flex flex-col gap-4 p-6">
// //               {["/", "/courses/it", "/teachers", "/contact"].map((path, i) => (
// //                 <Link
// //                   key={i}
// //                   to={path}
// //                   onClick={() => setMenuOpen(false)}
// //                   className="text-lg hover:text-blue-500 transition"
// //                 >
// //                   {path === "/" ? "Home" : path.split("/")[1]}
// //                 </Link>
// //               ))}
// //             </nav>
// //           </div>
// //         )}
// //       </header>

// //       <main className="pt-20 min-h-screen ">
// //         <Outlet />
// //         <Footer />
// //         <StarsBackground />
// //         <ScrollToTop />
// //       </main>
// //     </>
// //   );
// // }

// // export default MainLayout;
// import { Link, useLocation, Outlet } from "react-router-dom";
// import { useState, useEffect } from "react";

// import Footer from "./Footer";
// import ScrollToTop from "../components/ScrollToTop";
// import StarsBackground from "../components/StarsBackground";

// function MainLayout() {
//   const { pathname } = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dark, setDark] = useState(true);
//   const [dropdown, setDropdown] = useState(false);

//   const menuCourses = [
//     { title: "IELTS", slug: "ielts" },
//     { title: "Ona tili", slug: "ona-tili" },
//     { title: "Arab tili", slug: "arab-tili" },
//     { title: "Kimyo", slug: "kimyo" },
//     { title: "Ingliz tili", slug: "ingliz-tili" },
//     { title: "Matematika", slug: "matematika" },
//   ];

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", dark);
//   }, [dark]);

//   const linkClass = (path) =>
//     pathname === path
//       ? "text-blue-400 font-semibold"
//       : "text-white/80 hover:text-blue-400 transition";

//   return (
//     <div className="relative min-h-screen text-white overflow-hidden">
//       {/* BACKGROUND */}
//       <StarsBackground />

//       {/* HEADER */}
//       <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
//           {/* LOGO */}
//           <Link
//             to="/"
//             className="flex items-center gap-2 text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
//           >
//             <img className="w-6 h-6" src="/universe.png" alt="" />
//             Universe
//           </Link>

//           {/* DESKTOP MENU */}
//           <nav className="hidden md:flex items-center gap-8">
//             <Link to="/" className={linkClass("/")}>
//               Home
//             </Link>

//             {/* DROPDOWN */}
//             <div
//               className="relative"
//               onMouseEnter={() => setDropdown(true)}
//               onMouseLeave={() => setDropdown(false)}
//             >
//               <button className="flex items-center gap-1 text-white/80 hover:text-blue-400 min-h-[48px]">
//                 Kurslar <span className="text-sm">▾</span>
//               </button>

//               {dropdown && (
//                 <div className="absolute top-11 -left-6 w-40 rounded-xl bg-black/80 backdrop-blur border border-white/10 shadow-xl overflow-hidden">
//                   {menuCourses.map((item, i) => (
//                     <Link
//                       key={i}
//                       to={`/courses/${item.slug}`}
//                       className="block px-4 py-3 text-white/80 hover:bg-white/10 hover:text-blue-400 transition"
//                     >
//                       {item.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link to="/about" className={linkClass("/about")}>
//               About
//             </Link>
//             <Link to="/teachers" className={linkClass("/teachers")}>
//               O‘qituvchilar
//             </Link>
//             <Link to="/contact" className={linkClass("/contact")}>
//               Aloqa
//             </Link>

//             {/* CTA */}
//             <a
//               href="tel:+998901234567"
//               className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow hover:scale-105 transition"
//             >
//               Bepul dars
//             </a>
//           </nav>

//           {/* MOBILE BTN */}
//           <button
//             className="md:hidden text-2xl text-white"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             ☰
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         {/* MOBILE MENU */}
//         {menuOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-900 shadow-xl">
//             <nav className="flex flex-col gap-4 p-6">
//               {[
//                 { label: "Home", path: "/" },
//                 { label: "Kurslar", path: "/courses/ielts" },
//                 { label: "About", path: "/about" },
//                 { label: "O‘qituvchilar", path: "/teachers" },
//                 { label: "Aloqa", path: "/contact" },
//               ].map((item, i) => (
//                 <Link
//                   key={i}
//                   to={item.path}
//                   onClick={() => setMenuOpen(false)}
//                   className="text-lg font-semibold hover:text-blue-500 transition"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* CONTENT */}
//       <main className="relative pt-20 min-h-screen">
//         <Outlet />
//         <Footer />
//         <ScrollToTop />
//       </main>
//     </div>
//   );
// }

// export default MainLayout;
import { Link, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";
import StarsBackground from "../components/StarsBackground";

function MainLayout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const menuCourses = [
    { title: "IELTS", slug: "ielts" },
    { title: "Ona tili", slug: "ona-tili" },
    { title: "Arab tili", slug: "arab-tili" },
    { title: "Kimyo", slug: "kimyo" },
    { title: "Matematika", slug: "matematika" },
  ];

  const linkClass = (path) =>
    pathname === path
      ? "text-blue-400 font-semibold"
      : "text-white/80 hover:text-blue-400 transition";

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* 🌌 STAR BACKGROUND – FAQAT BIR MARTA */}
      <StarsBackground />

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            <img className="w-6 h-6" src="/universe.png" alt="" />
            Universe
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>

            {/* DROPDOWN */}
            {/* DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-base hover:text-blue-500 min-h-[48px]"
              >
                Kurslar
                <span className="text-sm">▾</span>
              </button>

              {dropdown && (
                <div
                  className="
        absolute top-full left-0 mt-2
        w-44 rounded-xl
        bg-white dark:bg-gray-800
        shadow-2xl
        border border-white/20
        z-[9999]
      "
                >
                  {menuCourses.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/courses/${item.slug}`}
                      className="
            block px-4 py-3
            text-gray-800 dark:text-white
            hover:bg-blue-50 dark:hover:bg-gray-700
            transition
          "
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link to="/teachers" className={linkClass("/teachers")}>
              O‘qituvchilar
            </Link>
            <Link to="/contact" className={linkClass("/contact")}>
              Aloqa
            </Link>

            <a
              href="tel:+998901234567"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow hover:scale-105 transition"
            >
              Bepul dars
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur border-t border-white/10">
            <nav className="flex flex-col p-6 text-white">
              {/* HOME */}
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-xl font-semibold py-3"
              >
                Home
              </Link>

              {/* KURSLAR (DESKTOP KABI) */}
              <div className="py-3">
                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center justify-between w-full text-xl font-semibold"
                >
                  Kurslar
                  <span>{dropdown ? "▴" : "▾"}</span>
                </button>

                {dropdown && (
                  <div className="mt-3 ml-4 flex flex-col gap-2 text-lg text-white/80">
                    {menuCourses.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/courses/${c.slug}`}
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdown(false);
                        }}
                        className="hover:text-blue-400 transition"
                      >
                        {c.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* PASTROQDA */}
              <Link
                to="/teachers"
                onClick={() => setMenuOpen(false)}
                className="text-xl font-semibold py-3 mt-4 border-t border-white/10"
              >
                O‘qituvchilar
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-xl font-semibold py-3"
              >
                Aloqa
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* CONTENT */}
      <main className="pt-20 relative z-10">
        <Outlet />
        <Footer />
      </main>

      <ScrollToTop />
    </div>
  );
}

export default MainLayout;
