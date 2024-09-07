import React, { useState } from "react";

const FunctionComponents = ({ name, age, author, setName }) => {
  const [count, setCount] = useState(0);
  const [changeName, setChangeName] = useState("");
  const reduceCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me to increment</button>
      <button onClick={reduceCount}>Click here to decrement</button>
      <h2>{count}</h2>
      <h4>
        My company is: {name}
        <br />
        Its age is: {age}
        <br />
        The author is: {author}{" "}
      </h4>
      <input onChange={(e) => setChangeName(e.target.value)} />
      <button onClick={() => setName(changeName)}>Change name to.....</button>
    </div>
  );
};

export default FunctionComponents;
