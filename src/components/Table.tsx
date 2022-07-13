import { ITrackpoint } from "../interfaces/ITrackpoint";
import Trackpoints from "./Trackpoints";
import { useAppContext } from "./Context";

const Table = () => {
  const { trackpoints } = useAppContext();

  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>
            Total<br></br>[km]
          </th>
          <th>
            Distance<br></br>[km]
          </th>
          <th>
            Duration<br></br>[h]
          </th>
          <th>
            Speed<br></br>[km/h]
          </th>
        </tr>
      </thead>
      <tbody>
        {trackpoints.map((trackpoint: ITrackpoint, index: number) => (
          <Trackpoints key={trackpoint.id} trackpoint={trackpoint} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
