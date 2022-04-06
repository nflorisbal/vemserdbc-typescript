import { useState } from "react";
import List from "./components/List";
import { PeopleDTO } from "./models/PeopleDTO";

import "./App.css";



function App() {
  const [people, setPeople] = useState<PeopleDTO["people"]>([
    {
      name: "nelson",
      age: 32,
    },
  ]);

  return (
    <div className="App">
      <h1>Turma</h1>
      <List people={people} />
    </div>
  );
}

export default App;
