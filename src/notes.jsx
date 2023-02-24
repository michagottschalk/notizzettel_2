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
  const [check, setCheck] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputText(newValue);
  };

  const handleSubmit = (e, value) => {
    e.preventDefault();
    console.log(value);
    if (!e.target.firstChild.value) return;
    setToDo([...toDo, e.target.firstChild.value]);
    //setToDo((prev) => [...prev, e.target.firstChild.value]);
    setInputText("");
  };

  function deleteTask(index) {
    //setToDo(toDo.splice(index, 1)); //this mutates the array! also, does not work on the first element
    setToDo((oldValues) => {
      return oldValues.filter((_, i) => i !== index); // nachfragen oder recherchieren, was diese Zeile/Funktion eigentlich macht
    });
  }

  function checkTask(event) {
    setCheck(!check); // simple toggler
    event.currentTarget.parentElement.classList.toggle("taskchecked");
    // setToDo(
    //   toDo.map(
    //     (task, i) => (i === index ? console.log("yes") : console.log("no")) //SAME!!! changes ALL list items!!!!
    //   )
    // );
  }

  function editTask(event) {
    setDisabled(!disabled);
    // if (disabled === true) {
    event.currentTarget.parentElement.firstChild.focus(); //this does not work during rendering, or, respectively, it does it when the field is disabled
    //}
    toDo.setState({ value: event.target.value });
  }

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
          <li
            //className={check === true ? "taskchecked" : "newTask"}  //this changes ALl list items!!!
            className="newTask"
            key={index}
            status="false"
          >
            <input
              className="description"
              value={task}
              disabled={disabled ? "disabled" : ""}
            ></input>
            <span
              id="delete"
              className="task"
              onClick={() => deleteTask(index)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </span>
            <span id="edit" className="task" onClick={editTask}>
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span id="check" className="task" onClick={checkTask}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Note;
