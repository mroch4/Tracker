import Form from "./Form";
import Table from "./Table";
import Total from "./Total";
import { useAppContext } from "./Context";

const Main = () => {
  const { trackpoints } = useAppContext();

  return (
    <>
      <Form />
      <Table />
      {trackpoints.length > 1 ? <Total /> : null}
    </>
  );
};

export default Main;
