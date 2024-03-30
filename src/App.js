import { createContext } from "react"; // import context API
import ContextComponent from "./ContextComponent";

export const Data = createContext(); // intance of Context API
export const Data2 = createContext();

const App = () => {
  const name = "Souvik Roy";
  const age = 23;
  return (
    <>
      <Data.Provider value={name}>
        <Data2.Provider value={age}>
          <ContextComponent />
        </Data2.Provider>
      </Data.Provider>
    </>
  );
};

export default App;
