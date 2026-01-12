// // import { Routes, Route } from "react-router-dom";
// // import MainLayout from "./layouts/MainLayout";
// // import Home from "./pages/Home";
// // import Teachers from "./pages/Teachers";
// // import TeacherDetail from "./pages/TeacherDetail";
// // import CourseDetail from "./pages/CourseDetail";

// // function App() {
// //   return (
// //     <div className="min-h-screen">
// //       <Routes>
// //         <Route element={<MainLayout />}>
// //           <Route path="/" element={<Home />} />

// //           {/* COURSES */}
// //           <Route path="/courses/:slug" element={<CourseDetail />} />

// //           {/* TEACHERS */}
// //           <Route path="/teachers" element={<Teachers />} />
// //           <Route path="/teachers/:slug" element={<TeacherDetail />} />

// //           {/* CONTACT */}
// //           <Route path="/contact" element={<h1>Aloqa</h1>} />
// //         </Route>
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;
// import { Routes, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import Home from "./pages/Home";
// import Teachers from "./pages/Teachers";
// import TeacherDetail from "./pages/TeacherDetail";
// import CourseDetail from "./pages/CourseDetail";

// function App() {
//   return (
//     <div className="min-h-screen">
//       <Routes>
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Home />} />

//           {/* COURSES */}
//           <Route path="/courses/:slug" element={<CourseDetail />} />

//           {/* TEACHERS */}
//           <Route path="/teachers" element={<Teachers />} />
//           <Route path="/teachers/:slug" element={<TeacherDetail />} />

//           {/* CONTACT */}
//           <Route path="/contact" element={<h1>Aloqa</h1>} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import TeacherDetail from "./pages/TeacherDetail";
import CourseDetail from "./pages/CourseDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Courses from "./pages/Courses";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/courses" element={<Courses />} />
        {/* TEACHERS */}
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:slug" element={<TeacherDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
