import { Container } from "react-bootstrap";
import Form from "./Form";
import Table from "./Table";
import Total from "./Total";

const Main = () => {
  return (
    <Container className="mt-3">
      <header>
        <Form />
      </header>
      <Table />
      <Total />
    </Container>
  );
};

export default Main;
