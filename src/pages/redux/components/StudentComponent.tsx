import AgeComponent from '@pages/redux/components/AgeComponent';
import GradesAvgComponent from '@pages/redux/components/GradesAvgComponent';
import GradesComponent from '@pages/redux/components/GradesComponent';
import NameComponent from '@pages/redux/components/NameComponent';
import { useAppDispatch } from '@pages/redux/store';
import {
  fetchStudentDetail,
  removeStudentDetail,
} from '@pages/redux/store/student';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface StudentComponentProps {
  id: number;
}

const StudentComponent = ({ id }: StudentComponentProps) => {
  const [uid] = useState(uuidv4());
  const dispatch = useAppDispatch();

  const init = () => {
    dispatch(fetchStudentDetail({ uid, id }));
  };

  useEffect(() => {
    init();
  }, [id]);

  useEffect(() => {
    return () => {
      dispatch(removeStudentDetail(uid));
    };
  }, []);

  return (
    <div className={classNames('flex flex-col gap-2', 'w-72 p-2 bg-red-200')}>
      <AgeComponent uid={uid} />
      <NameComponent uid={uid} />
      <GradesComponent uid={uid} />
      <GradesAvgComponent uid={uid} />
    </div>
  );
};

export default StudentComponent;
