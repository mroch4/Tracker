import { INTL, msInHour } from "../common/settings";

import Label from "./Label";
import { useAppContext } from "./Context";

const Total = () => {
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

  const totalTime = (lastItem.timeStamp.valueOf() - firstItem.timeStamp.valueOf()) / msInHour;
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
    <section className="mt-3">
      <Label desc="Total distance:" value={totalDistanceFormatted} />
      <Label desc="Total time [h]:" value={totalTimeFormatted} />
      <Label desc="Total avgSpeed:" value={totalAvgSpeedFormatted} />
    </section>
  );
};

export default Total;
