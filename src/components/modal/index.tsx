import Button from '@components/button';
import useModal from '@components/modal/useModal';
import { useRef, type PropsWithChildren } from 'react';
import Draggable from 'react-draggable';

interface ModalProps {
  uid: string;
  title?: string;
}

const Modal = ({ children, uid, title }: PropsWithChildren<ModalProps>) => {
  const { closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickCloseBtn = () => {
    closeModal(uid);
  };

  return (
    <Draggable
      nodeRef={modalRef}
      positionOffset={{ x: '-50%', y: '-50%' }}
      handle="#draggable-area"
    >
      <div
        ref={modalRef}
        className="absolute top-1/2 left-1/2 w-80 h-80 shadow-md bg-white"
      >
        <div
          id="draggable-area"
          className="cursor-move flex justify-between bg-orange-300 p-2"
        >
          <p>{title}</p>
          <Button color="orange" onClick={handleClickCloseBtn}>
            닫기
          </Button>
        </div>
        <div className="p-2">{children}</div>
      </div>
    </Draggable>
  );
};

export default Modal;
