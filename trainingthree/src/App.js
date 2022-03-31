import React from "react";
import './App.css';
import PracticeOne from "./components/module";
import PracticeTwo from "./components/moduleone";
import Supplier from "./components/prop";
import StudentDetails from "./components/stat";

function App() {
  return (
    <div className="App">
      <PracticeOne />
      <PracticeTwo />
      <Supplier />
      <StudentDetails />
    </div>
  );
}

export default App;
