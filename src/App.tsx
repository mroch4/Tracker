import ContextProvider from "./components/Context";
import Main from "./components/_Main";

const App = () => {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
};

export default App;
