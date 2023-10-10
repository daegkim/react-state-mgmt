import { Student } from '@models/student';
import { RootState } from '@pages/redux/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StudentState {
  students: Record<string, Student>;
}

const initialState: StudentState = {
  students: {},
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent: (
      state,
      action: PayloadAction<{ uid: string; student: Student }>
    ) => {
      state.students[action.payload.uid] = action.payload.student;
    },
    removeStudent: (state, action: PayloadAction<string>) => {
      delete state.students[action.payload];
    },
    setStudentAge: (
      state,
      action: PayloadAction<{ uid: string; age: number | null }>
    ) => {
      state.students[action.payload.uid].age = action.payload.age
        ? Number(action.payload.age)
        : null;
    },
    setStudentName: (
      state,
      action: PayloadAction<{ uid: string; name: string }>
    ) => {
      state.students[action.payload.uid].name = action.payload.name;
    },
  },
});

export const { addStudent, setStudentAge, setStudentName, removeStudent } =
  studentSlice.actions;

export const selectStudent = (uid: string) => (state: RootState) =>
  state.student.students[uid];

export const selectStudentAge = (uid: string) => (state: RootState) =>
  state.student.students[uid]?.age;

export const selectStudentName = (uid: string) => (state: RootState) =>
  state.student.students[uid]?.name;

export default studentSlice;
