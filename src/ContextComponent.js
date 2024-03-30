import { useContext } from "react";
import { Data } from "./App";

const ContextComponent = () => {
  const dataObject = useContext(Data);
  return (
    <h1>
      Hi, my name is : {dataObject.name} & I'm {dataObject.age} yrs old
    </h1>
  );
};

export default ContextComponent;
