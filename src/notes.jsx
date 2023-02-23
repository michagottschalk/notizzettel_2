// import Input from './input'
import NewTask from "./task";
import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Note() {
  const [toDo, setToDo] = useState([]);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setToDo([...toDo, { task: e.target.firstChild.value }]);
  //   e.target.firstChild.value = "";
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.firstChild.value) return;
    setToDo((prev) => [...prev, e.target.firstChild.value]);
  };

  return (
    <div className="Black_field">
      <form className="Form" action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Neue Aufgabe" />
        <button tabIndex="2">Hinzufügen</button>
      </form>
      <ul>
        {toDo.map((task, index) => (
          <div className="newTask">
            <div className="task" key={index}>
              {task}
            </div>
            <span id="delete" className="task" onclick="deleteTask(event)">
              <FontAwesomeIcon icon={faTrash} />
            </span>
            <span id="edit" className="task" onClick="editTask(event)">
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span id="check" className="task" onClick="checkTask(event)">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Note;
