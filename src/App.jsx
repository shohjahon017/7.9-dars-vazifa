// import { useDispatch, useSelector } from "react-redux";
// import {
//   addStudent,
//   updateStudent,
//   deleteStudent,
//   clearAllStudents,
//   updateStudentAge,
//   updateStudentName,
// } from "./redux/studentsSlice";

// function App() {
//   const dispatch = useDispatch();
//   const students = useSelector((state) => state.students.students);

//   const handleAddStudent = () => {
//     const name = prompt("Talabaning ismini kiriting:");
//     const age = +prompt("Talabaning yoshini kiriting:");

//     if (name && age) {
//       const newStudent = {
//         id: Date.now(),
//         name: name,
//         age: age,
//       };
//       dispatch(addStudent(newStudent));
//     } else {
//       alert("Iltimos, barcha ma'lumotlarni to'ldiring.");
//     }
//   };
//   function handleUpdateStudent(student) {
//     let name = prompt("Enter name", student.name);
//     let age = +prompt("Enter age", student.age);
//     const person = {
//       id: student.id,
//       name: name,
//       age: age,
//     };
//     dispatch(updateStudent(person));
//   }

//   function handleUpdateAge(student) {
//     let age = +prompt("Yoshini kiriting", student.age);
//     const studentAge = {
//       id: student.id,
//       age: age,
//     };
//     dispatch(updateStudentName(studentAge));
//   }
//   function handleUpdateName(student) {
//     let name = +prompt("Ismini kiriting", student.name);
//     const studentName = {
//       id: student.id,
//       name: name,
//     };
//     dispatch(updateStudentAge(studentName));
//   }

//   function handleDeleteStudent(id) {
//     dispatch(deleteStudent(id));
//   }

//   function handleClearAllStudents() {
//     dispatch(clearAllStudents());
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4 flex justify-center">Students</h1>
//       <ul className="bg-white shadow-md rounded-lg p-4 ">
//         {students.map((student) => (
//           <li
//             key={student.id}
//             className="py-2 border-b last:border-b-0 flex justify-between items-center"
//           >
//             <span>
//               {student.name} - {student.age} age
//             </span>
//             <div>
//               <button
//                 onClick={() => handleUpdateStudent(student)}
//                 className="bg-yellow-500 text-white py-1 px-2 rounded mr-2 hover:bg-yellow-600 transition"
//               >
//                 Update
//               </button>{" "}
//               <button
//                 onClick={() => handleUpdateAge(student)}
//                 className="bg-yellow-500 text-white py-1 px-2 rounded mr-2 hover:bg-yellow-600 transition"
//               >
//                 Update Age
//               </button>{" "}
//               <button
//                 onClick={() => handleUpdateName(student)}
//                 className="bg-yellow-500 text-white py-1 px-2 rounded mr-2 hover:bg-yellow-600 transition"
//               >
//                 Update Name
//               </button>
//               <button
//                 onClick={() => handleDeleteStudent(student.id)}
//                 className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition"
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <div className="mt-4">
//         <button
//           onClick={handleAddStudent}
//           className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600 transition"
//         >
//           Add New Student
//         </button>
//         <button
//           onClick={handleClearAllStudents}
//           className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
//         >
//           Delete All
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <div className="min-h-screen ">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/teachers" element={<h1>O‘qituvchilar</h1>} />
          <Route path="/contact" element={<h1>Aloqa</h1>} />
          <Route path="/courses/:type" element={<h1>Kurs sahifasi</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
