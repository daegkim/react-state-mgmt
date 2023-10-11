import { useAtom } from 'jotai';
import { studentDetailGradesAtom } from '@pages/jotai/store';

const GradesComponent = () => {
  const [grades] = useAtom(studentDetailGradesAtom);

  return (
    <div className="h-20">
      {grades.map((grade) => (
        <div className="flex gap-2">
          <div className="w-10 text-right">{grade.subject}</div>
          <div>{grade.score}</div>
        </div>
      ))}
    </div>
  );
};

export default GradesComponent;
