import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(null);

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");

    // ...
  }, []);

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Pet</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q Coco"
            //update related state based on event
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select className="input" type="text" placeholder="Please select ..">
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            className="input"
            type="number"
            placeholder="e.q 5"
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
            }}
          ></input>
        </div>
        <button className="button is-danger is-fullwidth">Submit</button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Pet List</p>
        {/* sample table */}
        <ItemTable name={name} gender={gender} age={age} />
        <p>Dechathorn Intravijit 620612148</p>
      </div>
    </div>
  );
}

export default App;
