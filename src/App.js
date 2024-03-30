import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const generateId = () => {
    return Math.floor(Math.random() * 100);
  };

  const addTodo = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
      />
      <button onClick={() => addTodo()}>ADD</button>

      <h2> Todos :-</h2>

      <ul className="todo-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
