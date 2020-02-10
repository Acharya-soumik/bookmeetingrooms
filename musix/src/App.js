import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
