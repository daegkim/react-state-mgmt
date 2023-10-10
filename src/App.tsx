import Layout from '@components/layout';
import ModalContainer from '@components/modal/ModalContainer';
import ModalProvider from '@components/modal/ModalProvider';
import { store } from '@pages/redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <Layout />
        <ModalContainer />
      </ModalProvider>
    </Provider>
  );
}

export default App;
