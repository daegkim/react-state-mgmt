import { studentApi } from '@mocks/student';
import { Student, StudentDetail } from '@models/student';
import { RootState } from '@pages/redux/store';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface StudentState {
  students: Student[];
  studentDetails: Record<string, StudentDetail>;
}

export const fetchStudents = createAsyncThunk(
  'student/fetchStudents',
  async () => {
    const response = await studentApi.fetchStudents();
    return response;
  }
);

export const fetchStudentDetail = createAsyncThunk(
  'student/fetchStudentDetail',
  async ({ uid, id }: { uid: string; id: number }) => {
    const response = await studentApi.fetchStudentDetail(id);
    return {
      uid,
      studentDetail: response,
    };
  }
);

const initialState: StudentState = {
  students: [],
  studentDetails: {},
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    removeStudentDetail: (state, action: PayloadAction<string>) => {
      delete state.studentDetails[action.payload];
    },
    setStudentAge: (
      state,
      action: PayloadAction<{ uid: string; age: number | null }>
    ) => {
      state.studentDetails[action.payload.uid].age = action.payload.age
        ? Number(action.payload.age)
        : null;
    },
    setStudentName: (
      state,
      action: PayloadAction<{ uid: string; name: string }>
    ) => {
      state.studentDetails[action.payload.uid].name = action.payload.name;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    });
    builder.addCase(fetchStudentDetail.fulfilled, (state, action) => {
      state.studentDetails[action.payload.uid] = action.payload.studentDetail;
    });
  },
});

export const { removeStudentDetail, setStudentAge, setStudentName } =
  studentSlice.actions;

export const selectStudent = (uid: string) => (state: RootState) =>
  state.student.studentDetails[uid];

export const selectStudentAge = (uid: string) => (state: RootState) =>
  state.student.studentDetails[uid]?.age;

export const selectStudentName = (uid: string) => (state: RootState) =>
  state.student.studentDetails[uid]?.name;

export const selectStudentGrades = (uid: string) => (state: RootState) =>
  state.student.studentDetails[uid]?.grades || [];

export const selectStudentGradesAvg = (uid: string) => (state: RootState) => {
  const studentDetail = state.student.studentDetails[uid];
  if (!studentDetail) {
    return 0;
  }

  const sum = studentDetail.grades.reduce((accu, curr) => {
    return accu + curr.score;
  }, 0);

  return sum / studentDetail.grades.length;
};

export default studentSlice;
