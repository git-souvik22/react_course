const Button = () => {
  const handleClick = () => {
    alert("You Clicked Mee !");
  };
  return <button onClick={handleClick}>Click</button>;
};

const App = () => {
  return (
    <>
      <Button />
    </>
  );
};

export default App;
