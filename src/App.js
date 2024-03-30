import { useRef } from "react";

const App = () => {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Souvik";
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Action Btn</button>
    </>
  );
};

export default App;
