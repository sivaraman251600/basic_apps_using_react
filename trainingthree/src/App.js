import React from "react";
import './App.css';
import PracticeOne from "./components/module";
import PracticeTwo from "./components/moduleone";
import Supplier from "./components/prop";
import StudentDetails from "./components/stat";
import Counter from "./components/counter";
import LifeA from "./components/lifecycle";
import UpdatingA from "./components/updatinglifeA";
import Form from "./components/formelements";

function App() {
  return (
    <div className="App">
      <PracticeOne />
      <PracticeTwo />
      <Supplier />
      <hr/>
      <StudentDetails />
      <hr/>
      <Counter />
      <hr/>
      <LifeA />
      <hr/>
      <UpdatingA />
      <hr />
      <Form />
    </div>
  );
}

export default App;
