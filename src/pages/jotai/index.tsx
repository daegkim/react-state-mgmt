import Button from '@components/button';
import useModal from '@components/modal/useModal';
import { Student } from '@models/student';
import StudentComponent from '@pages/jotai/components/StudentComponent';
import { studentsAtom } from '@pages/jotai/store';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const JotaiPage = () => {
  const { openModal } = useModal();
  const [students, setStudents] = useAtom(studentsAtom);

  const handleClickOpenModalBtn = (student: Student) => async () => {
    openModal({
      title: student.name,
      children: <StudentComponent id={student.id} />,
    });
  };

  const init = () => {
    setStudents();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl">jotai</p>
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

export default JotaiPage;
