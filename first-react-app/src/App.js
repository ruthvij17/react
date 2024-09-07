import ClassComponent from "./components/ClassComponent";
import FunctionComponents from "./components/FunctionComponents";
import { useState } from "react";
const App = () => {
  const author = "Ruthvij";
  const [name, setName] = useState("Chandan");
  return (
    <div className="App">
      <p>Class Components:</p>
      <ClassComponent />
      <p>Function Components</p>
      {/* <FunctionComponents name="devtown" age={20} author={author} /> */}
      <FunctionComponents
        name={name}
        age={20}
        author={author}
        setName={setName}
      />
    </div>
  );
};

export default App;
