import React from "react";
import { Provider } from "react-redux";
import { Landing } from "./components/Landing";
import { configStore } from "./state/configStore";

function App() {
  const mystore = configStore();
  return (
    <Provider store={mystore}>
    <Landing />
    </Provider>
  );
}

export default App;
