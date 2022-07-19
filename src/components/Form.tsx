import { Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import { useAppContext } from "../contexts/Context";
import { v4 as uuid } from "uuid";

const Form = () => {
  const { trackpoints, updateTrackpoints, labels } = useAppContext();

  const [inputValue, setInputValue] = useState<string>("");
  const [parsedValue, setParsedValue] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(true);

  const handleOnChange = (value: string) => {
    setInputValue(value);
  };

  const addRecord = () => {
    setInputValue("");
    updateTrackpoints([...trackpoints, { id: uuid(), timeStamp: new Date().toJSON(), distance: parsedValue }]);
  };

  const previousDistance = trackpoints[trackpoints.length - 1].distance;
  const previousInputValue = previousDistance * 10;

  useEffect(() => {
    const currentDistance = parseFloat(inputValue) / 10;
    const isValid = !isNaN(currentDistance) && currentDistance >= previousDistance;
    if (isValid) {
      setDisabled(false);
      setParsedValue(currentDistance);
    } else {
      setDisabled(true);
    }
  }, [inputValue, previousDistance]);

  return (
    <Container>
      <div className="form-floating">
        <input
          type="number"
          id="floatingInput"
          className="form-control"
          list="records"
          value={inputValue}
          onChange={(e) => handleOnChange(e.currentTarget.value)}
        />
        <label htmlFor="floatingInput">{labels.INPUT_LABEL}</label>
        <datalist id="records">
          <option value={previousInputValue}></option>
        </datalist>
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
