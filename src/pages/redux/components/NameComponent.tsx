import Input from '@components/input';
import { useAppDispatch, useAppSelector } from '@pages/redux/store';
import { selectStudentName, setStudentName } from '@pages/redux/store/student';
import { type ChangeEvent } from 'react';

interface NameComponentProps {
  uid: string;
}

const NameComponent = ({ uid }: NameComponentProps) => {
  const name = useAppSelector(selectStudentName(uid));
  const dispatch = useAppDispatch();

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setStudentName({ uid, name: e.target.value }));
  };

  return (
    <div className="flex gap-2">
      <p>이름</p>
      <Input value={name} onChange={handleChangeName} />
    </div>
  );
};

export default NameComponent;
