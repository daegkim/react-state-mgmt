import { FormEvent, useEffect, useRef, useState } from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import { v4 as uuidv4 } from 'uuid';
import StudentComponent from './components/StudentComponent';

interface BasicStudent {
  uid: string;
  name: string;
}

const ReduxPage = () => {
  const [students, setStudents] = useState<BasicStudent[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addStudent = () => {
    setStudents((prev) => {
      if (!inputRef.current?.value) {
        return prev;
      }

      const newStudentNames = [...prev];
      newStudentNames.push({
        uid: uuidv4(),
        name: inputRef.current.value,
      });

      return newStudentNames;
    });
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addStudent();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }, [students]);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl">redux</p>
      <form className="flex gap-2" onSubmit={handleSubmitForm}>
        <Input ref={inputRef} />
        <Button>추가</Button>
      </form>
      <div>
        {students.map((student) => (
          <StudentComponent key={student.uid} name={student.name} />
        ))}
      </div>
    </div>
  );
};

export default ReduxPage;
