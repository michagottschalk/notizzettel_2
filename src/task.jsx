// import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function NewTask() {
  return (
    <div className="New_Task">
      <input
        id="task-description"
        className="description"
        type="submit"
        value="e.target.firstChild.value"
        //onSubmit="replaceEditedTask()"
        disabled
      />
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
  );
}

export default NewTask;
