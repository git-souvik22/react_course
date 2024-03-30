import { createContext } from "react"; // context API
import childComponent from "./childComponent";

export const Data = createContext(); // instance of Context API

const App = () => {
  const name = "Souvik Roy";
  return (
    <>
      <childComponent />
    </>
  );
};

export default App;
