import Button from '@components/button';
import useModal from '@components/modal/useModal';
import { Student } from '@models/student';
import StudentComponent from '@pages/mobx/components/StudentComponent';
import StudentsStore from '@pages/mobx/store/students';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

const studentsStore = new StudentsStore();

const MobxPage = observer(() => {
  const { openModal } = useModal();
  const students = studentsStore.students;

  const handleClickOpenModalBtn = (student: Student) => async () => {
    openModal({
      title: student.name,
      children: <StudentComponent id={student.id} />,
    });
  };

  const init = async () => {
    studentsStore.fetchStudents();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl">mobx</p>
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
});

export default MobxPage;
