import { Student, StudentDetail } from '@models/student';

class StudentApi {
  private students: Student[] = [
    {
      id: 1,
      name: '민준',
      age: 17,
    },
    {
      id: 2,
      name: '서준',
      age: 18,
    },
    {
      id: 3,
      name: '도윤',
      age: 19,
    },
    {
      id: 4,
      name: '예준',
      age: 17,
    },
    {
      id: 5,
      name: '시우',
      age: 18,
    },
  ];

  private studentsGrades: StudentDetail[] = [
    {
      id: 1,
      name: '민준',
      age: 17,
      grades: [
        { subject: 'kor', score: 100 },
        { subject: 'eng', score: 100 },
        { subject: 'sci', score: 100 },
      ],
    },
    {
      id: 2,
      name: '서준',
      age: 18,
      grades: [
        { subject: 'kor', score: 20 },
        { subject: 'eng', score: 30 },
        { subject: 'sci', score: 40 },
      ],
    },
    {
      id: 3,
      name: '도윤',
      age: 19,
      grades: [
        { subject: 'kor', score: 30 },
        { subject: 'eng', score: 90 },
        { subject: 'sci', score: 80 },
      ],
    },
    {
      id: 4,
      name: '예준',
      age: 17,
      grades: [
        { subject: 'kor', score: 100 },
        { subject: 'eng', score: 0 },
        { subject: 'sci', score: 100 },
      ],
    },
    {
      id: 5,
      name: '시우',
      age: 18,
      grades: [
        { subject: 'kor', score: 50 },
        { subject: 'eng', score: 50 },
        { subject: 'sci', score: 50 },
      ],
    },
  ];

  fetchStudents = () => {
    return new Promise<Student[]>((resolve) => {
      setTimeout(() => {
        resolve([...this.students]);
      }, 1000);
    });
  };

  fetchStudentDetail = (id: number) => {
    return new Promise<StudentDetail>((resolve, reject) => {
      const student = this.studentsGrades.find((student) => student.id === id);

      if (!student) {
        reject('not exist student');
        return;
      }

      setTimeout(() => {
        resolve({ ...student });
      }, 1000);
    });
  };
}

export const studentApi = new StudentApi();
