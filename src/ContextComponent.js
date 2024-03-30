import { useContext } from "react";
import { Data, Data1 } from "./App";

const ContextComponent = () => {
  const name = useContext(Data);
  const age = useContext(Data1);
  return (
    <h1>
      Hi, my name is : {name} & I'm {age} yrs old
    </h1>
  );
};

export default ContextComponent;
