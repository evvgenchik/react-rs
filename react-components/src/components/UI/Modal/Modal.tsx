import { FC } from 'react';

const Modal: FC<{
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setModalActive }) => {
  return <div>Modal</div>;
};

export default Modal;
