import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    updateStudent: (state, action) => {
      state.students = state.students.map((value) => {
        if (value.id == action.payload.id) {
          value = action.payload;
        }
        return value;
      });
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },

    clearAllStudents: (state) => {
      state.students = [];
    },
    getStudentById: (state, action) => {
      return state.students.find((student) => student.id === action.payload);
    },
    updateStudentAge: (state, action) => {
      const student = state.students.find(
        (student) => student.id === action.payload.id
      );
      if (student) {
        student.age = action.payload.age;
      }
    },
    updateStudentName: (state, action) => {
      const student = state.students.find(
        (student) => student.id === action.payload.id
      );
      if (student) {
        student.name = action.payload.name;
      }
    },
  },
});

export const {
  addStudent,
  updateStudent,
  deleteStudent,
  clearAllStudents,
  getStudentById,
  updateStudentAge,
  updateStudentName,
} = studentsSlice.actions;

export default studentsSlice.reducer;
