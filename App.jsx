import { useState } from "react";

function Task({ index, item }) {
  const [isChecked, sestIsChecked] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <></>
      <input
        type="checkbox"
        onChange={(e) => sestIsChecked(e.target.checked)}
      />
      <button className="btn btn-secondary">Secondary</button>
      <div
        style={{ textDecoration: isChecked ? "line-through" : "" }}
        key={index}
      >
        {item}
      </div>
    </div>
  );
}
