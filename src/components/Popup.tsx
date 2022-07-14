import { Button, Modal } from "react-bootstrap";
import { initialTrackpoint, useAppContext } from "./Context";

import { FC } from "react";
import { IPopupProps } from "../interfaces/props/IPopupProps";

const Popup: FC<IPopupProps> = (props) => {
  const { show, setShow } = props;

  const { updateTrackpoints } = useAppContext();

  const handleClose = () => setShow(false);

  const clearData = () => {
    updateTrackpoints([initialTrackpoint]);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>UWAGA!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Czy na pewno chcesz usunąć wszystkie dane?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Powrót
        </Button>
        <Button variant="danger" onClick={clearData}>
          Tak, usuń dane
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
