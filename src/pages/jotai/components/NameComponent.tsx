import Input from '@components/input';
import {
  studentDetailNameAtom,
  studentDetailUpdateAtom,
} from '@pages/jotai/store';
import { useAtom, useSetAtom } from 'jotai';
import { type ChangeEvent } from 'react';

const NameComponent = () => {
  const [name] = useAtom(studentDetailNameAtom);
  const updateStudentDetail = useSetAtom(studentDetailUpdateAtom);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    updateStudentDetail({
      key: 'name',
      value: e.target.value,
    });
  };

  return (
    <div className="flex gap-2">
      <p>이름</p>
      <Input value={name} onChange={handleChangeName} />
    </div>
  );
};

export default NameComponent;
