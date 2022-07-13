import Computed from "./Computed";
import { FC } from "react";
import { INTL } from "../common/settings";
import { ITrackpoint } from "../interfaces/ITrackpoint";

interface ITrackpointProps {
  index: number;
  trackpoint: ITrackpoint;
}

const Trackpoints: FC<ITrackpointProps> = (props) => {
  const { index, trackpoint } = props;

  const distanceFormatted = new Intl.NumberFormat(INTL, {
    minimumFractionDigits: 1,
  }).format(trackpoint.distance);

  return (
    <tr>
      <td>{trackpoint.timeStamp.toLocaleTimeString(INTL)}</td>
      <td>{distanceFormatted}</td>
      {index === 0 ? null : <Computed key={index} index={index} />}
    </tr>
  );
};

export default Trackpoints;
