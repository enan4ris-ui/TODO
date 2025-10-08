import { useState } from "react";
import "./App.css";
import Task from "./Task";
// import Color from "./Color";

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
    <div
      className="layout bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <div style={{ display: "flex", gap: "5px" }}>
        <input value={text} onChange={(e) => setText(e.target.value)} />

        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <div></div>
      <div style={{ display: "flex", flexDirection: "row", gap: "3px" }}>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => setStatus("all")}
        >
          All
        </button>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={() => setStatus("active")}
        >
          Active
        </button>
        <button
          style={{ backgroundColor: "purple", color: "white" }}
          onClick={() => setStatus("completed")}
        >
          Completed
        </button>
      </div>
      <div>
        {filteredTodos.map((item, index) => {
          return <Task index={index} item={item} handleToggle={handleToggle} />;
        })}
      </div>
    </div>
  );
}
export default App;
