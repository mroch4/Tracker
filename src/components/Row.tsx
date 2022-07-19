import Blank from "./Blank";
import Computed from "./Computed";
import { FC } from "react";
import { IRow } from "./interfaces/IRow";
import { useAppContext } from "../contexts/Context";

const Row: FC<IRow> = (props) => {
  const { index, trackpoint } = props;

  const { intl } = useAppContext();

  const timeStampFormatted = new Date(trackpoint.timeStamp).toLocaleTimeString(intl, { hour: "2-digit", minute: "2-digit" });

  const distanceFormatted = new Intl.NumberFormat(intl, {
    minimumFractionDigits: 1,
  }).format(trackpoint.distance);

  return (
    <tr>
      <td className="centered">{timeStampFormatted}</td>
      <td>{distanceFormatted}</td>
      {index === 0 ? <Blank /> : <Computed index={index} />}
    </tr>
  );
};

export default Row;
