import InputNumber from '@components/input/number';
import { StudentDetailContext } from '@pages/mobx/store/studentDetail';
import { observer } from 'mobx-react';
import { ChangeEvent, useContext } from 'react';

const AgeComponent = observer(() => {
  const studentDetailStore = useContext(StudentDetailContext);

  const handleChangeAge = (
    _: ChangeEvent<HTMLInputElement>,
    value: number | null
  ) => {
    studentDetailStore && studentDetailStore.setStudentAge(value);
  };

  return (
    <div className="flex gap-2">
      <p>나이</p>
      <InputNumber
        value={studentDetailStore?.age || null}
        onChange={handleChangeAge}
      />
    </div>
  );
});

export default AgeComponent;
