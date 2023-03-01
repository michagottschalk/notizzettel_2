// import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function NewTask({ task, id, toDo, setToDo }) {
  const [check, setCheck] = useState(false);
  const [disabled, setDisabled] = useState(true);

  function deleteTask(id) {
    setToDo((oldValues) => {
      return oldValues.filter((element) => element.id !== id);
    }); // jetzt mit id anstelle vom index, was weniger fehleranfällig ist.
  }

  function checkTask() {
    setCheck(!check);
  }

  function editTask(event, id) {
    event.currentTarget.parentElement.firstChild.focus(); // focus funzt nicht. Tipp von Lilian: useRef für den Input nutzen! Weiß noch nicht, wie
    console.log(id);
    const editToDo = toDo.map((toDo) =>
      toDo.id === id ? { ...toDo, task: event.target.value } : toDo
    );
    setToDo(editToDo);
  }

  return (
    <li
      className={check === true ? "taskchecked" : "newTask"}
      key={id}
      status="false"
    >
      <input
        className="description"
        value={task}
        disabled={disabled}
        onChange={(event) => editTask(event, id)}
      ></input>
      <span id="delete" className="task" onClick={() => deleteTask(id)}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
      <span id="edit" className="task" onClick={() => setDisabled(!disabled)}>
        <FontAwesomeIcon icon={faEdit} />
      </span>
      <span id="check" className="task" onClick={checkTask}>
        <FontAwesomeIcon icon={faCheck} />
      </span>
    </li>
  );
}

export default NewTask;
