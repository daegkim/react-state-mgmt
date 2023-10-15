import { StudentDetailContext } from '@pages/mobx/store/studentDetail';
import { observer } from 'mobx-react';
import { useContext } from 'react';

const GradesAvgComponent = observer(() => {
  const studentDetailStore = useContext(StudentDetailContext);

  return (
    <div className="flex gap-2">
      <div className="w-10 text-right">평균</div>
      <div>{Math.trunc(studentDetailStore?.gradesAvg || 0)}</div>
    </div>
  );
});

export default GradesAvgComponent;
