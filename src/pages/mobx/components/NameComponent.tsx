import Input from '@components/input';
import { StudentDetailContext } from '@pages/mobx/store/studentDetail';
import { observer } from 'mobx-react';
import { useContext, type ChangeEvent } from 'react';

const NameComponent = observer(() => {
  const studentDetailStore = useContext(StudentDetailContext);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    studentDetailStore && studentDetailStore.setStudentName(e.target.value);
  };

  return (
    <div className="flex gap-2">
      <p>이름</p>
      <Input
        value={studentDetailStore?.name || ''}
        onChange={handleChangeName}
      />
    </div>
  );
});

export default NameComponent;
