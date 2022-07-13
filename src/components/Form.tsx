import { useEffect, useState } from "react";

import { Button } from "react-bootstrap";
import { useAppContext } from "./Context";
import { v4 as uuid } from "uuid";

const Form = () => {
  const { trackpoints, updateTrackpoints } = useAppContext();

  const [inputVal, setInputVal] = useState<string>("");
  const handleOnChange = (value: string) => {
    setInputVal(value);
  };

  const [parsedVal, setParsedVal] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(true);
  useEffect(() => {
    const distance = parseFloat(inputVal) / 10;
    isNaN(distance) ? setDisabled(true) : setDisabled(false);
    setParsedVal(distance);
  }, [inputVal]);

  const handleOnClick = () => {
    setInputVal("");
    updateTrackpoints([...trackpoints, { id: uuid(), timeStamp: new Date(), distance: parsedVal }]);
  };

  return (
    <>
      <div className="form-floating">
        <input type="number" id="floatingInput" className="form-control" value={inputVal} onChange={(e) => handleOnChange(e.currentTarget.value)} />
        <label htmlFor="floatingInput">Distance [hectometres]</label>
      </div>
      <Button variant="primary my-3" onClick={handleOnClick} disabled={disabled}>
        Add record
      </Button>
    </>
  );
};

export default Form;
