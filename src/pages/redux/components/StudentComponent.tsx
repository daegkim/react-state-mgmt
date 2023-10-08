import AgeComponent from '@pages/redux/components/AgeComponent';
import NameComponent from '@pages/redux/components/NameComponent';
import classNames from 'classnames';

interface StudentComponentProps {
  uid: string;
}

const StudentComponent = ({ uid }: StudentComponentProps) => {
  return (
    <div className={classNames('flex flex-col gap-2', 'w-72 p-2 bg-red-200')}>
      <AgeComponent uid={uid} />
      <NameComponent uid={uid} />
    </div>
  );
};

export default StudentComponent;
