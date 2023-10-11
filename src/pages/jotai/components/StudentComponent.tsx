import AgeComponent from '@pages/jotai/components/AgeComponent';
import GradesComponent from '@pages/jotai/components/GradesComponent';
import NameComponent from '@pages/jotai/components/NameComponent';
import StudentFetcher from '@pages/jotai/components/StudentFetcher';
import classNames from 'classnames';
import { Provider } from 'jotai';
import GradesAvgComponent from '@pages/jotai/components/GradesAvgComponent';

interface StudentComponentProps {
  id: number;
}

const StudentComponent = ({ id }: StudentComponentProps) => {
  return (
    <Provider>
      <StudentFetcher id={id}>
        <div
          className={classNames('flex flex-col gap-2', 'w-72 p-2 bg-red-200')}
        >
          <AgeComponent />
          <NameComponent />
          <GradesComponent />
          <GradesAvgComponent />
        </div>
      </StudentFetcher>
    </Provider>
  );
};

export default StudentComponent;
