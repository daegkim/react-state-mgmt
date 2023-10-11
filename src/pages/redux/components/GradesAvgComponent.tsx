import { useAppSelector } from '@pages/redux/store';
import { selectStudentGradesAvg } from '@pages/redux/store/student';

interface GradesAvgComponentProps {
  uid: string;
}

const GradesAvgComponent = ({ uid }: GradesAvgComponentProps) => {
  const avg = useAppSelector(selectStudentGradesAvg(uid));

  return (
    <div className="flex gap-2">
      <div className="w-10 text-right">평균</div>
      <div>{Math.trunc(avg)}</div>
    </div>
  );
};

export default GradesAvgComponent;
