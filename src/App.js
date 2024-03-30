import { createContext } from "react"; // imported Context API
import ContextComponent from "./ContextComponent";

export const Data = createContext(); // instance of Context API
export const Data1 = createContext();

const App = () => {
  const name = "Souvik Roy";
  const age = 22;
  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ContextComponent />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
};

export default App;
