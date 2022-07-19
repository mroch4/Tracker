import Form from "./Form";
import Language from "./Language";
import Table from "./Table";
import Total from "./Total";
import { useAppContext } from "../contexts/Context";

const Layout = () => {
  const { trackpoints } = useAppContext();

  return (
    <>
      <Form />
      <Table />
      {trackpoints.length > 1 ? <Total /> : null}
      <Language />
    </>
  );
};

export default Layout;
