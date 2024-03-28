const Cart = () => {
  const items = [
    "Apple Earbuds",
    "Microphone",
    "Coffee Mug",
    "Mechanical Keyboard",
  ];

  return (
    <>
      <h1>🛒Cart</h1>
      {items.length > 0 && <h3>You have {items.length} items in your Cart</h3>}
      <ul>
        <h4>👇Products</h4>
        {items.map((item, index) => (
          <li key={index + 1}>{item}</li>
        ))}
      </ul>
    </>
  );
};

function App() {
  return (
    <>
      <Cart />
    </>
  );
}

export default App;
