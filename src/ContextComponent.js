import { Data, Data2 } from "./App";

const ContextComponent = () => {
  return (
    <>
      <Data.Consumer>
        {(name) => {
          return (
            <Data2.Consumer>
              {(age) => {
                return (
                  <h2>
                    My Name is: {name} & I'm {age} yrs old.
                  </h2>
                );
              }}
            </Data2.Consumer>
          );
        }}
      </Data.Consumer>
    </>
  );
};

export default ContextComponent;
