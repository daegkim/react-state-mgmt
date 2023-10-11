import InputNumber from '@components/input/number';
import {
  studentDetailAgeAtom,
  studentDetailUpdateAtom,
} from '@pages/jotai/store';
import { useAtom, useSetAtom } from 'jotai';
import { ChangeEvent } from 'react';

const AgeComponent = () => {
  const [age] = useAtom(studentDetailAgeAtom);
  const updateStudentDetail = useSetAtom(studentDetailUpdateAtom);

  const handleChangeAge = (
    _: ChangeEvent<HTMLInputElement>,
    value: number | null
  ) => {
    updateStudentDetail({
      key: 'age',
      value,
    });
  };

  return (
    <div className="flex gap-2">
      <p>나이</p>
      <InputNumber value={age} onChange={handleChangeAge} />
    </div>
  );
};

export default AgeComponent;
