import { StudentDetailContext } from '@pages/mobx/store/studentDetail';
import { observer } from 'mobx-react';
import { PropsWithChildren, useContext, useEffect } from 'react';

const StudentFetcher = observer(
  ({ id, children }: PropsWithChildren<{ id: number }>) => {
    const studentDetailStore = useContext(StudentDetailContext);

    const init = () => {
      studentDetailStore?.fetchStudentDetail(id);
    };

    useEffect(() => {
      init();
    }, [id]);

    return <>{children}</>;
  }
);

export default StudentFetcher;
