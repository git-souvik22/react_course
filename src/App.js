import { createContext } from "react"; // imported Context API
import ContextComponent from "./ContextComponent";

export const Data = createContext(); // instance of Context API

const App = () => {
  const name = "Souvik Roy";
  const age = 22;

  const dataObj = {
    name: name,
    age: age,
  };
  return (
    <>
      <Data.Provider value={dataObj}>
        <ContextComponent />
      </Data.Provider>
    </>
  );
};

export default App;
