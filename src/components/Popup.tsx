import { Button, Modal } from "react-bootstrap";
import { initialTrackpoint, useAppContext } from "./Context";

import { FC } from "react";
import { IPopupProps } from "../interfaces/props/IPopupProps";

const Popup: FC<IPopupProps> = (props) => {
  const { show, setShow } = props;

  const { updateTrackpoints, labels } = useAppContext();

  const handleClose = () => setShow(false);

  const clearData = () => {
    updateTrackpoints([initialTrackpoint]);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{labels.MODAL_CAUTION}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{labels.MODAL_WARNING}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {labels.BUTTON_BACK}
        </Button>
        <Button variant="danger" onClick={clearData}>
          {labels.BUTTON_CONFIRM}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
