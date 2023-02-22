// import Input from './input'
import NewTask from "./task";
import { useState } from "react";

function Note() {
  const [toDo, setToDo] = useState([]);

  function addToDo(e) {
    e.preventDefault();
    setToDo([...toDo, { task: e.target.firstChild.value }]);
    e.target.firstChild.value = "";
  }

  return (
    <div className="Black_field">
      <form className="Form" action="" onSubmit={addToDo}>
        <input type="text" placeholder="Neue Aufgabe" />
        <button tabIndex="2">Hinzufügen</button>
      </form>
      {/* <NewTask /> */}
    </div>
  );
}

export default Note;
