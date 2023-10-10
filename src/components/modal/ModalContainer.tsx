import { ModalContext } from '@components/modal/ModalProvider';
import { Fragment, useContext } from 'react';

const ModalContainer = () => {
  const modals = useContext(ModalContext);

  return (
    <div id="modal-root">
      {modals.map((value) => (
        <Fragment key={value.uid}>{value.modal}</Fragment>
      ))}
    </div>
  );
};

export default ModalContainer;
