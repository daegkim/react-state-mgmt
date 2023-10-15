import { StudentDetailContext } from '@pages/mobx/store/studentDetail';
import { observer } from 'mobx-react';
import { useContext } from 'react';

const GradesComponent = observer(() => {
  const studentDetailStore = useContext(StudentDetailContext);

  return (
    <div className="h-20">
      {studentDetailStore?.grades.map((grade) => (
        <div key={grade.subject} className="flex gap-2">
          <div className="w-10 text-right">{grade.subject}</div>
          <div>{grade.score}</div>
        </div>
      ))}
    </div>
  );
});

export default GradesComponent;
