import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'

function newTask () {
    return (
        <div className="New_Task">
                <input id="description-Aufgabe" className="description" type="submit" value="submit" onsubmit="replaceEditedTask()" disabled />
                
                <span id="delete" className="task" onclick ="deleteTask(event)" >
                <FontAwesomeIcon icon="fa-sharp fa-solid fa-circle-check" />
                
                </span>

                <span id="edit" className="task" onclick ="editTask(event)">
                <FontAwesomeIcon icon="fa-sharp fa-solid fa-circle-check" />
                </span>

                <span id="check" className="task" onclick ="checkTask(event)">
                <FontAwesomeIcon icon="fa-sharp fa-solid fa-circle-check" />
                </span>
        </div>
    )
}

export default newTask