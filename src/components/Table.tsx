import { Container } from "react-bootstrap";
import { ITrackpoint } from "../interfaces/ITrackpoint";
import Row from "./Row";
import { useAppContext } from "./Context";

const Table = () => {
  const { trackpoints } = useAppContext();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Godzina</th>
            <th>
              Suma<br></br>[km]
            </th>
            <th>
              Odcinek<br></br>[km]
            </th>
            <th>
              Czas<br></br>[h]
            </th>
            <th>
              Średnia<br></br>[km/h]
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
