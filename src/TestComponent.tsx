import React from "react";
import { getStore, dispatch } from "./store/useNumStore";

export default function TestComponent() {
  const count = getStore().count;

  console.log("rendered from testcomponent", getStore());

  return (
    <div onClick={() => dispatch({ type: "add", payload: 10 })}>{count} 56</div>
  );
}
