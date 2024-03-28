const Button = () => {
  const handleClick = (a, b) => {
    console.log(a + b);
  };
  return <button onClick={() => handleClick(2, 2)}>Click</button>;
};

const App = () => {
  return (
    <>
      <Button />
    </>
  );
};

export default App;
