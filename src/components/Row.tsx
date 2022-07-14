import Computed from "./Computed";
import { FC } from "react";
import { INTL } from "../common/settings";
import { IRowProps } from "../interfaces/props/IRowProps";

const Row: FC<IRowProps> = (props) => {
  const { index, trackpoint } = props;

  const timeStampFormatted = new Date(trackpoint.timeStamp).toLocaleTimeString(INTL);

  const distanceFormatted = new Intl.NumberFormat(INTL, {
    minimumFractionDigits: 1,
  }).format(trackpoint.distance);

  return (
    <tr>
      <td>{timeStampFormatted}</td>
      <td>{distanceFormatted}</td>
      {index === 0 ? null : <Computed index={index} />}
    </tr>
  );
};

export default Row;
