import { useAppSelector } from '@pages/redux/store';
import { selectStudentGrades } from '@pages/redux/store/student';

interface GradeComponentProps {
  uid: string;
}

const GradesComponent = ({ uid }: GradeComponentProps) => {
  const grades = useAppSelector(selectStudentGrades(uid));

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
