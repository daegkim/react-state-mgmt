import Button from '@components/button';
import useModal from '@components/modal/useModal';
import { Student } from '@models/student';
import StudentComponent from '@pages/redux/components/StudentComponent';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store';
import { fetchStudents } from './store/student';

const ReduxPage = () => {
  const { openModal } = useModal();
  const students = useAppSelector((state) => state.student.students);
  const dispatch = useAppDispatch();

  const init = () => {
    dispatch(fetchStudents());
  };

  const handleClickOpenModalBtn = (student: Student) => async () => {
    openModal({
      title: student.name,
      children: <StudentComponent id={student.id} />,
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl">redux</p>
      <div className="flex flex-col gap-2">
        {students.map((student) => (
          <div key={student.id} className="flex justify-between w-48">
            <p>{student.name}</p>
            <Button onClick={handleClickOpenModalBtn(student)}>open</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReduxPage;
