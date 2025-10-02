import { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  function handleAddd() {
    setArray([...array, text]);
    setText("");
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>add</button>
      <div>
        {array.map((item, index) => {
          return <Task index={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
