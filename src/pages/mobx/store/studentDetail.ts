import { studentApi } from '@mocks/student';
import { makeAutoObservable, runInAction } from 'mobx';
import { createContext } from 'react';

class StudentDetailStore {
  id: number | null = null;
  name: string = '';
  age: number | null = null;
  grades: {
    subject: 'kor' | 'eng' | 'sci';
    score: number;
  }[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get gradesAvg() {
    const sum = this.grades.reduce((accu, curr) => {
      return accu + curr.score;
    }, 0);

    return sum / this.grades.length;
  }

  setStudentAge(age: number | null) {
    this.age = age;
  }

  setStudentName(name: string) {
    this.name = name;
  }

  fetchStudentDetail = async (id: number) => {
    try {
      const response = await studentApi.fetchStudentDetail(id);
      runInAction(() => {
        this.id = response.id;
        this.name = response.name;
        this.age = response.age;
        this.grades = response.grades;
      });
    } catch (e) {
      runInAction(() => {
        this.id = null;
        this.name = '';
        this.age = null;
        this.grades = [];
      });
    }
  };
}

export const StudentDetailContext = createContext<StudentDetailStore | null>(
  null
);

export default StudentDetailStore;
