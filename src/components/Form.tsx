import { Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import { useAppContext } from "./Context";
import { v4 as uuid } from "uuid";

const Form = () => {
  const { trackpoints, updateTrackpoints, labels } = useAppContext();

  const [inputVal, setInputVal] = useState<string>("");
  const [parsedVal, setParsedVal] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(true);

  const handleOnChange = (value: string) => {
    setInputVal(value);
  };

  const addRecord = () => {
    setInputVal("");
    updateTrackpoints([...trackpoints, { id: uuid(), timeStamp: new Date().toJSON(), distance: parsedVal }]);
  };

  useEffect(() => {
    const distance = parseFloat(inputVal) / 10;
    isNaN(distance) ? setDisabled(true) : setDisabled(false);
    setParsedVal(distance);
  }, [inputVal]);

  return (
    <Container>
      <div className="form-floating">
        <input type="number" id="floatingInput" className="form-control" value={inputVal} onChange={(e) => handleOnChange(e.currentTarget.value)} />
        <label htmlFor="floatingInput">{labels.INPUT_LABEL}</label>
      </div>
      <div className="button">
        <Button variant="success my-3" onClick={addRecord} disabled={disabled}>
          {labels.BUTTON_ADD}
        </Button>
      </div>
    </Container>
  );
};

export default Form;
