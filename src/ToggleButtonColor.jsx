import { useState } from "react";

const ToggleButtonColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  function handleClick() {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  }

  return (
    <>
      <section style={{ backgroundColor, color: textColor }}>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: buttonStyle,
            color: textColor,
            border: `1px solid ${textColor}`,
          }}
        >
          White Theme
        </button>
      </section>
      <section className="content">
        <h1>
          Welcome To A <br />
          Real World{" "}
        </h1>
      </section>
    </>
  );
};

export default ToggleButtonColor;
