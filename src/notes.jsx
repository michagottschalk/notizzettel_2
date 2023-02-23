// import Input from './input'
import NewTask from "./task";
import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Note() {
  const [toDo, setToDo] = useState([]);
  const [inputText, setInputText] = useState("");

  //const cleanToDo = () => setToDo("");
  //   setToDo([...toDo, { task: e.target.firstChild.value }]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputText(newValue);
  };

  const handleSubmit = (e, value) => {
    e.preventDefault();
    console.log(value);
    if (!e.target.firstChild.value) return;
    setToDo((prev) => [...prev, e.target.firstChild.value]);
    setInputText("");
  };

  return (
    <div className="Black_field">
      <form className="Form" action="" onSubmit={handleSubmit}>
        <input
          className="inputfield"
          type="text"
          placeholder="Neue Aufgabe"
          value={inputText}
          onChange={handleChange}
        />
        <button tabIndex="2">Hinzufügen</button>
      </form>
      <ul>
        {toDo.map((task, index) => (
          <div className="newTask" key={index}>
            <div className="task">{task}</div>
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
