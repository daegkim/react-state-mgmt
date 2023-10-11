import { studentDetailGradesAvgAtom } from '@pages/jotai/store';
import { useAtom } from 'jotai';

const GradesAvgComponent = () => {
  const [avg] = useAtom(studentDetailGradesAvgAtom);

  return (
    <div className="flex gap-2">
      <div className="w-10 text-right">평균</div>
      <div>{Math.trunc(avg)}</div>
    </div>
  );
};

export default GradesAvgComponent;
