import { INTL, msInHour } from "../common/settings";

import { FC } from "react";
import { useAppContext } from "./Context";

export interface IComputedProps {
  index: number;
}

const Computed: FC<IComputedProps> = (props) => {
  const { trackpoints } = useAppContext();

  const currentTrackpoint = trackpoints[props.index];
  const previousTrackpoint = trackpoints[props.index - 1];

  const distance = currentTrackpoint.distance - previousTrackpoint.distance;
  const distanceFormatted = new Intl.NumberFormat(INTL, {
    minimumFractionDigits: 1,
  }).format(distance);

  const time = (currentTrackpoint.timeStamp.valueOf() - previousTrackpoint.timeStamp.valueOf()) / msInHour;
  const hourFormatted = new Intl.NumberFormat(INTL, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(time);

  const avgSpeed = distance / time;
  const speedFormatted = new Intl.NumberFormat(INTL, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(avgSpeed);

  return (
    <>
      <td>{distanceFormatted}</td>
      <td>{hourFormatted}</td>
      <td>{speedFormatted}</td>
    </>
  );
};

export default Computed;
