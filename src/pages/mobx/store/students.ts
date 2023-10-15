import { studentApi } from '@mocks/student';
import { Student } from '@models/student';
import { makeAutoObservable, runInAction } from 'mobx';

class StudentsStore {
  students: Student[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchStudents = async () => {
    try {
      const response = await studentApi.fetchStudents();
      runInAction(() => {
        this.students = response;
      });
    } catch (e) {
      runInAction(() => {
        this.students = [];
      });
    }
  };
}

export default StudentsStore;
