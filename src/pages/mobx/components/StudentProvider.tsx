import StudentDetail, {
  StudentDetailContext,
} from '@pages/mobx/store/studentDetail';
import { PropsWithChildren } from 'react';

const StudentProvider = ({ children }: PropsWithChildren) => {
  return (
    <StudentDetailContext.Provider value={new StudentDetail()}>
      {children}
    </StudentDetailContext.Provider>
  );
};

export default StudentProvider;
