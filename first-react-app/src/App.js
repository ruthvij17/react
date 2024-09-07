import ClassComponent from "./pages/ClassComponent";
import FunctionComponents from "./pages/FunctionComponents";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import BaseHOC from "./HOC/BaseHOC";
const App = () => {
  const author = "Ruthvij";

  const [name, setName] = useState("Chandan");
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseHOC>
            <ClassComponent />
          </BaseHOC>
        }
      />
      <Route
        path="/functional-components"
        element={
          <BaseHOC>
            <FunctionComponents
              name={name}
              age={10}
              author={author}
              setName={setName}
            />
          </BaseHOC>
        }
      />
    </Routes>
  );
};

export default App;
