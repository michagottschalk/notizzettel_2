import NewTask from "./NewTask";
import { useState } from "react";

function Notes() {
  const [toDo, setToDo] = useState([
    { id: crypto.randomUUID(), task: "example" },
  ]);
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputText(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.firstChild.value) return;
    setToDo((prev) => [
      ...prev,
      { id: crypto.randomUUID(), task: e.target.firstChild.value },
    ]);
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
        {toDo.map((element) => (
          <NewTask
            task={element.task}
            id={element.id}
            key={element.id}
            toDo={toDo}
            setToDo={setToDo}
            handleChange={handleChange}
          />
        ))}
      </ul>
    </div>
  );
}

export default Notes;
