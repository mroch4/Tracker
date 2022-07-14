import { Button, Container } from "react-bootstrap";
import { INTL, msInHour } from "../common/settings";

import Label from "./partials/_Label";
import Popup from "./Popup";
import { useAppContext } from "./Context";
import { useState } from "react";

const Total = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const { trackpoints } = useAppContext();

  const firstItem = trackpoints[0];
  const lastItem = trackpoints[trackpoints.length - 1];

  const totalDistance = lastItem.distance;
  const totalDistanceFormatted = new Intl.NumberFormat(INTL, {
    minimumFractionDigits: 1,
    style: "unit",
    unit: "kilometer",
    unitDisplay: "short",
  }).format(totalDistance);

  const totalTime = (Date.parse(lastItem.timeStamp).valueOf() - Date.parse(firstItem.timeStamp).valueOf()) / msInHour;
  const totalTimeFormatted = new Intl.NumberFormat(INTL, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalTime);

  const totalAvgSpeed = totalDistance / totalTime;
  const totalAvgSpeedFormatted = new Intl.NumberFormat(INTL, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    style: "unit",
    unit: "kilometer-per-hour",
  }).format(totalAvgSpeed);

  return (
    <>
      <Container>
        <Label label="Całkowity dystans:" value={totalDistanceFormatted} />
        <Label label="Całkowity czas [godz.]:" value={totalTimeFormatted} />
        <Label label="Prędkość średnia:" value={totalAvgSpeedFormatted} />
        <div className="button">
          <Button variant="danger my-3" onClick={handleShow}>
            Od nowa
          </Button>
        </div>
      </Container>
      <Popup show={show} setShow={setShow} />
    </>
  );
};

export default Total;
