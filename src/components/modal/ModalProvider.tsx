import Modal from '@components/modal';
import {
  Children,
  createContext,
  isValidElement,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from 'react';

interface Modal {
  uid: string;
  modal: JSX.Element;
}

export const ModalContext = createContext<Modal[]>([]);

export const ModalControllerContext = createContext<{
  openModal: ({
    uid,
    title,
    modalChildren,
  }: {
    uid: string;
    title?: string;
    modalChildren: ReactNode;
  }) => void;
  closeModal: (uid: string) => void;
}>({ openModal: () => {}, closeModal: () => {} });

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modals, setModals] = useState<Modal[]>([]);
  const modalController = useMemo(
    () => ({
      openModal: ({
        uid,
        title,
        modalChildren,
      }: {
        uid: string;
        title?: string;
        modalChildren: ReactNode;
      }) => {
        setModals((prev) => {
          const newModals = [...prev];
          newModals.push({
            uid,
            modal: (
              <Modal uid={uid} title={title}>
                {modalChildren}
              </Modal>
            ),
          });
          return newModals;
        });
      },
      closeModal: (uid: string) => {
        setModals((prev) => {
          const newModals = [...prev];
          const targetModalIndex = newModals.findIndex(
            (value) => value.uid === uid
          );

          if (targetModalIndex < 0) {
            return prev;
          }

          newModals.splice(targetModalIndex, 1);
          return newModals;
        });
      },
    }),
    []
  );

  useEffect(() => {
    if (
      !Children.toArray(children).some(
        (child) =>
          isValidElement(child) && (child.type as any).name === 'ModalContainer'
      )
    ) {
      throw new Error('ModalContainer is required');
    }
  }, [children]);

  return (
    <ModalContext.Provider value={modals}>
      <ModalControllerContext.Provider value={modalController}>
        {children}
      </ModalControllerContext.Provider>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
