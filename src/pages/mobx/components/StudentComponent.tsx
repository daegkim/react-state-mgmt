import NameComponent from '@pages/mobx/components//NameComponent';
import AgeComponent from '@pages/mobx/components/AgeComponent';
import GradesAvgComponent from '@pages/mobx/components/GradesAvgComponent';
import GradesComponent from '@pages/mobx/components/GradesComponent';
import StudentFetcher from '@pages/mobx/components/StudentFetcher';
import StudentProvider from '@pages/mobx/components/StudentProvider';
import classNames from 'classnames';

interface StudentComponentProps {
  id: number;
}

const StudentComponent = ({ id }: StudentComponentProps) => {
  return (
    <StudentProvider>
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
    </StudentProvider>
  );
};

export default StudentComponent;
