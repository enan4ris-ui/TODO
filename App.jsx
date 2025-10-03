import { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  function handleAdd() {
    setTodos([...todos, { text: text, done: false }]);
    setText("");
  }
  function handleToggle(text) {
    const newTodos = todos.map((todo) =>
      todo.text === text ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  }
  const filteredTodos = todos.filter((todo) => {
    if (status === "active") return !todo.done;
    if (status === "completed") return todo.done;
    return true;
  });

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>add</button>
      <div></div>
      <button onClick={() => setStatus("all")}>All</button>
      <button onClick={() => setStatus("active")}>Active</button>
      <button onClick={() => setStatus("completed")}>Completed</button>
      <div>
        {filteredTodos.map((item, index) => {
          return <Task index={index} item={item} handleToggle={handleToggle} />;
        })}
      </div>
    </div>
  );
}
export default App;
