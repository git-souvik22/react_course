import { useState } from "react";
const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const generateID = () => {
    let index = todos.length;
    return (index += 1);
  };
  const addTodo = () => {
    setTodos([...todos, { text: input, id: generateID() }]);
    setInput("");
  };
  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
      />
      <button onClick={() => addTodo()}>ADD</button>
      <h2>Todo list :-</h2>
      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default App;
