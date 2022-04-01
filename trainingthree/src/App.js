import React from "react";
import './App.css';
import PracticeOne from "./components/module";
import PracticeTwo from "./components/moduleone";
import Supplier from "./components/prop";
import StudentDetails from "./components/stat";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <PracticeOne />
      <PracticeTwo />
      <Supplier />
      <StudentDetails />
      <hr/>
      <Counter />
    </div>
  );
}

export default App;
