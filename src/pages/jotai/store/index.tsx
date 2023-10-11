import { studentApi } from '@mocks/student';
import { Student, StudentDetail } from '@models/student';
import { atom } from 'jotai';

const studentsCoreAtom = atom<Student[]>([]);

export const studentsAtom = atom(
  (get) => get(studentsCoreAtom),
  async (_, set) => {
    const response = await studentApi.fetchStudents();
    set(studentsCoreAtom, response);
  }
);

export const studentDetailCoreAtom = atom<StudentDetail | null>(null);

export const studentDetailAgeAtom = atom(
  (get) => get(studentDetailCoreAtom)?.age || null
);

export const studentDetailNameAtom = atom(
  (get) => get(studentDetailCoreAtom)?.name || ''
);

export const studentDetailGradesAtom = atom(
  (get) => get(studentDetailCoreAtom)?.grades || []
);

export const studentDetailGradesAvgAtom = atom((get) => {
  const studentDetail = get(studentDetailCoreAtom);
  if (!studentDetail) {
    return 0;
  }

  const sum = studentDetail.grades.reduce((accu, curr) => {
    return accu + curr.score;
  }, 0);

  return sum / studentDetail.grades.length;
});

export const studentDetailSetAtom = atom(null, async (_, set, id: number) => {
  const response = await studentApi.fetchStudentDetail(id);
  set(studentDetailCoreAtom, response);
});

export const studentDetailUpdateAtom = atom(
  null,
  (_, set, { key, value }: { key: keyof StudentDetail; value: any }) => {
    set(studentDetailCoreAtom, (prev) => {
      const newData = { ...prev };
      newData[key] = value;
      return newData as StudentDetail;
    });
  }
);
