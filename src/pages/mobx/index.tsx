import Button from '@components/button';
import useModal from '@components/modal/useModal';
import { Student } from '@models/student';

const MobxPage = () => {
  const { openModal } = useModal();

  const handleClickOpenModalBtn = (student: Student) => async () => {
    // openModal({
    //   title: student.name,
    //   children: < id={student.id} />,
    // });
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl">mobx</p>
      <div className="flex flex-col gap-2">
        {/* {students.map((student) => (
          <div key={student.id} className="flex justify-between w-48">
            <p>{student.name}</p>
            <Button onClick={handleClickOpenModalBtn(student)}>open</Button>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default MobxPage;
