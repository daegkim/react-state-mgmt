import InputNumber from '@components/input/number';
import { useAppDispatch, useAppSelector } from '@pages/redux/store';
import { selectStudentAge, setStudentAge } from '@pages/redux/store/student';
import { ChangeEvent } from 'react';

interface AgeComponentProps {
  uid: string;
}

const AgeComponent = ({ uid }: AgeComponentProps) => {
  const age = useAppSelector(selectStudentAge(uid));
  const dispatch = useAppDispatch();

  const handleChangeAge = (
    _: ChangeEvent<HTMLInputElement>,
    value: number | null
  ) => {
    dispatch(setStudentAge({ uid, age: value }));
  };

  return (
    <div className="flex gap-2">
      <p>나이</p>
      <InputNumber value={age} onChange={handleChangeAge} />
    </div>
  );
};

export default AgeComponent;
