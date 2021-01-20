import React, { useState } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faListAlt, faTrash);

function App() {
  // Je crée un état
  const [input, setInput] = useState(""); // Permet de créer une tache
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTasks = [...tasks];
    newTasks.push({ title: input, isDone: false });
    setTasks(newTasks);
    setInput("");
  };

  return (
    <div>
      {/* HEADER */}
      <header>
        <FontAwesomeIcon icon="list-alt" className="list-alt" />
        <h1>Todo List</h1>
      </header>
      {/* TASK */}
      <div className="wrapper">
        {tasks.map((task, index) => {
          return (
            <div className="task-content" key={index}>
              <input
                className="checkbox"
                type="checkbox"
                checked={task.isDone}
                onClick={() => {
                  const newTasks = [...tasks];
                  // console.log(newTasks[index]); // Retourne la task cliquée
                  newTasks[index].isDone = !newTasks[index].isDone;
                  setTasks(newTasks);
                }}
              />
              <span className={task.isDone === true && "checked"}>
                {task.title}
              </span>
              <FontAwesomeIcon
                className="trash"
                icon="trash"
                onClick={() => {
                  const newTasks = [...tasks];
                  newTasks.splice(index, 1);
                  setTasks(newTasks);
                }}
              />
            </div>
          );
        })}

        {/* TASK INPUT */}
        <div className="task-input">
          <input
            className="input"
            type="text"
            name="new task"
            placeholder="new task"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <button onClick={handleSubmit}>Add task</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <p>
          Made with <span>React</span> @ <span>Le Reacteur</span> by{" "}
          <span>Pti2mike</span>
        </p>
      </footer>
    </div>
  );
}
export default App;
