import ContextProvider from "./contexts/Context";
import Layout from "./components/_Layout";

const App = () => {
  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
};

export default App;
