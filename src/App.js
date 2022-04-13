import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Header setShow={setShow} />
      <Main show={show} />
    </div>
  );
}

export default App;
