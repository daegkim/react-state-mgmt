import { Student } from '@models/student';
import { store } from '@pages/redux/store';
import _ from 'lodash';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

export const fetchStudent = (name: string): Promise<Student> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name,
        age: _.random(17, 19),
      });
    }, 1000);
  });
};

function ReduxWrapper({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxWrapper;
