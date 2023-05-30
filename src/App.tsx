import React from "react";
import { getStore, dispatch } from "./store/useNumStore";
import "./App.css";
import TestComponent from "./TestComponent";

function App() {
  console.log("rendered app");
  return (
    <div className="App">
      <div onClick={() => dispatch({ type: "add", payload: 10 })}>
        {getStore().count}
      </div>

      <TestComponent />
    </div>
  );
}

export default App;
