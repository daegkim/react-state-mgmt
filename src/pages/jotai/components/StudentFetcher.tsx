import { useSetAtom } from 'jotai';
import { PropsWithChildren, useEffect } from 'react';
import { studentDetailSetAtom } from '@pages/jotai/store';

const StudentFetcher = ({
  id,
  children,
}: PropsWithChildren<{ id: number }>) => {
  const setStudentDetail = useSetAtom(studentDetailSetAtom);

  const init = () => {
    setStudentDetail(id);
  };

  useEffect(() => {
    init();
  }, [id]);

  return <>{children}</>;
};

export default StudentFetcher;
