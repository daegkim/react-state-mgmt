import { students } from '@mocks/student';
import { Student } from '@models/student';
import AgeComponent from '@pages/redux/components/AgeComponent';
import NameComponent from '@pages/redux/components/NameComponent';
import { useAppDispatch } from '@pages/redux/store';
import { addStudent, removeStudent } from '@pages/redux/store/student';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const fetchStudent = (id: number): Promise<Student> => {
  return new Promise((resolve, reject) => {
    const student = students.find((student) => student.id === id);

    if (!student) {
      reject('not exist student');
      return;
    }

    setTimeout(() => {
      resolve({ ...student });
    }, 1000);
  });
};

interface StudentComponentProps {
  id: number;
}

const StudentComponent = ({ id }: StudentComponentProps) => {
  const [uid] = useState(uuidv4());
  const dispatch = useAppDispatch();

  const init = async () => {
    const response = await fetchStudent(id);

    dispatch(
      addStudent({
        uid,
        student: response,
      })
    );
  };

  useEffect(() => {
    init();
  }, [id]);

  useEffect(() => {
    return () => {
      dispatch(removeStudent(uid));
    };
  }, []);

  return (
    <div className={classNames('flex flex-col gap-2', 'w-72 p-2 bg-red-200')}>
      <AgeComponent uid={uid} />
      <NameComponent uid={uid} />
    </div>
  );
};

export default StudentComponent;
