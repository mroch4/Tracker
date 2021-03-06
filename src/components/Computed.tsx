import { FC } from "react";
import { IComputed } from "./interfaces/IComputed";
import { useAppContext } from "../contexts/Context";

const Computed: FC<IComputed> = (props) => {
  const { trackpoints, intl } = useAppContext();

  const currentTrackpoint = trackpoints[props.index];
  const previousTrackpoint = trackpoints[props.index - 1];

  const distance = currentTrackpoint.distance - previousTrackpoint.distance;
  const distanceFormatted = new Intl.NumberFormat(intl, {
    minimumFractionDigits: 1,
  }).format(distance);

  const msInHour = 60 * 60 * 1000;
  const timeSpan = (Date.parse(currentTrackpoint.timeStamp).valueOf() - Date.parse(previousTrackpoint.timeStamp).valueOf()) / msInHour;
  const timeSpanFormatted = new Intl.NumberFormat(intl, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(timeSpan);

  const avgSpeed = distance / timeSpan;
  const speedFormatted = new Intl.NumberFormat(intl, {
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
