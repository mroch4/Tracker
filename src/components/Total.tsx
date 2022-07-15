import { Button, Container } from "react-bootstrap";

import Label from "./partials/_Label";
import Popup from "./Popup";
import { msInHour } from "../common/settings";
import { useAppContext } from "./Context";
import { useState } from "react";

const Total = () => {
  const { trackpoints, intl, labels } = useAppContext();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const firstItem = trackpoints[0];
  const lastItem = trackpoints[trackpoints.length - 1];

  // const totalDistance = trackpoints
  // .map((item) => item.distance)
  // .reduce((previousValue, currentValue) => {
  //   return previousValue + currentValue;
  // });

  const totalDistance = lastItem.distance;
  const totalDistanceFormatted = new Intl.NumberFormat(intl, {
    minimumFractionDigits: 1,
    style: "unit",
    unit: "kilometer",
    unitDisplay: "short",
  }).format(totalDistance);

  const totalTime = (Date.parse(lastItem.timeStamp).valueOf() - Date.parse(firstItem.timeStamp).valueOf()) / msInHour;
  const totalTimeFormatted = new Intl.NumberFormat(intl, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalTime);

  const totalAvgSpeed = totalDistance / totalTime;
  const totalAvgSpeedFormatted = new Intl.NumberFormat(intl, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    style: "unit",
    unit: "kilometer-per-hour",
  }).format(totalAvgSpeed);

  return (
    <>
      <Container>
        <Label label={labels.TOTAL_DISTANCE} value={totalDistanceFormatted} />
        <Label label={labels.TOTAL_TIME} value={totalTimeFormatted} />
        <Label label={labels.TOTAL_AVGSPEED} value={totalAvgSpeedFormatted} />
        <div className="button">
          <Button variant="danger my-3" onClick={handleShow}>
            {labels.BUTTON_CLEAR}
          </Button>
        </div>
      </Container>
      <Popup show={show} setShow={setShow} />
    </>
  );
};

export default Total;
