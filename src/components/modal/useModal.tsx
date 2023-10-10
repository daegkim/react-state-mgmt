import { ModalControllerContext } from '@components/modal/ModalProvider';
import { useContext, type ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useModal = () => {
  const modalController = useContext(ModalControllerContext);

  const openModal = ({
    title,
    children,
  }: {
    title?: string;
    children: ReactNode;
  }) => {
    modalController.openModal({
      uid: uuidv4(),
      title,
      modalChildren: children,
    });
  };

  const closeModal = (uid: string) => {
    modalController.closeModal(uid);
  };

  return { openModal, closeModal };
};

export default useModal;
