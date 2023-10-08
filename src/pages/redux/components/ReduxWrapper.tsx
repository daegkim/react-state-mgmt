import { store } from '@pages/redux/store';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

function ReduxWrapper({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxWrapper;
