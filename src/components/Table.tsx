import { Container } from "react-bootstrap";
import { ITrackpoint } from "../interfaces/ITrackpoint";
import Row from "./Row";
import { useAppContext } from "../contexts/Context";

const Table = () => {
  const { trackpoints, labels } = useAppContext();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>{labels.TH_TIME}</th>
            <th>
              {labels.TH_TOTAL}
              <br></br>[{labels.UNIT_DISTANCE}]
            </th>
            <th>
              {labels.TH_SEGMENT}
              <br></br>[{labels.UNIT_DISTANCE}]
            </th>
            <th>
              {labels.TH_TIME}
              <br></br>[{labels.UNIT_TIME}]
            </th>
            <th>
              {labels.TH_AVGSPEED}
              <br></br>[{labels.UNIT_DISTANCE}/{labels.UNIT_TIME}]
            </th>
          </tr>
        </thead>
        <tbody>
          {trackpoints.length
            ? trackpoints.map((trackpoint: ITrackpoint, index: number) => <Row key={trackpoint.id} trackpoint={trackpoint} index={index} />)
            : null}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
