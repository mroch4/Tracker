import { INTL, msInHour } from "../common/settings";

import { FC } from "react";
import { IComputedProps } from "../interfaces/props/IComputedProps";
import { useAppContext } from "./Context";

const Computed: FC<IComputedProps> = (props) => {
  const { trackpoints } = useAppContext();

  const currentTrackpoint = trackpoints[props.index];
  const previousTrackpoint = trackpoints[props.index - 1];

  const distance = currentTrackpoint.distance - previousTrackpoint.distance;
  const distanceFormatted = new Intl.NumberFormat(INTL, {
    minimumFractionDigits: 1,
  }).format(distance);

  const timeSpan = (Date.parse(currentTrackpoint.timeStamp).valueOf() - Date.parse(previousTrackpoint.timeStamp).valueOf()) / msInHour;
  const timeSpanFormatted = new Intl.NumberFormat(INTL, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(timeSpan);

  const avgSpeed = distance / timeSpan;
  const speedFormatted = new Intl.NumberFormat(INTL, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(avgSpeed);

  return (
    <>
      <td>{distanceFormatted}</td>
      <td>{timeSpanFormatted}</td>
      <td>{speedFormatted}</td>
    </>
  );
};

export default Computed;
