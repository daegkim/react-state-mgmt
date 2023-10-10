import Button from '@components/button';
import useModal from '@components/modal/useModal';
import { students } from '@mocks/student';
import { Student } from '@models/student';
import StudentComponent from '@pages/redux/components/StudentComponent';

const ReduxPage = () => {
  const { openModal } = useModal();

  const handleClickOpenModalBtn = (student: Student) => async () => {
    openModal({
      title: student.name,
      children: <StudentComponent id={student.id} />,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl">redux</p>
      <div>
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
