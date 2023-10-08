import Button from '@components/button';
import Input from '@components/input';
import { fetchStudent } from '@pages/redux//components/ReduxWrapper';
import StudentComponent from '@pages/redux/components/StudentComponent';
import { useAppDispatch, useAppSelector } from '@pages/redux/store';
import { addStudent } from '@pages/redux/store/student';
import { FormEvent, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ReduxComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const students = useAppSelector(
    (state) => state.student.students,
    (prev, next) => {
      console.log(prev);
      console.log(next);
      const prevKeys = Object.keys(prev);
      const nextKeys = Object.keys(next);
      if (prevKeys.length !== nextKeys.length) {
        return false;
      }

      let flag = true;
      prevKeys.forEach((key) => {
        if (!Object.keys(next).includes(key)) {
          flag = false;
        }
      });
      console.log(flag);
      return flag;
    }
  );
  const dispatch = useAppDispatch();

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      return;
    }

    const response = await fetchStudent(inputRef.current.value);

    dispatch(
      addStudent({
        uid: uuidv4(),
        student: response,
      })
    );

    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl">redux</p>
      <form className="flex gap-2" onSubmit={handleSubmitForm}>
        <Input ref={inputRef} />
        <Button>추가</Button>
      </form>
      <div>
        {Object.keys(students).map((key) => (
          <StudentComponent key={key} uid={key} />
        ))}
      </div>
    </div>
  );
};

export default ReduxComponent;
