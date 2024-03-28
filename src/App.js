const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) => {
  if (isValid) {
    return <ValidPassword />;
  }
  return <InvalidPassword />;
};

function App() {
  return (
    <>
      <Password isValid={false} />
    </>
  );
}

export default App;
