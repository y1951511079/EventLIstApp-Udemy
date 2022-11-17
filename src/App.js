import React from "react";
import Example from "./Pages/Example";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <>
    <Provider store={store}>
     <Example />
    </Provider>
    </>
  );
}
export default App;
