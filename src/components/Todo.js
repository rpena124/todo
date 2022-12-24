import { useState } from "react"


export default function Todo({   
  todos,
  newTodo,
  foundTodo,
  getTodos,
  deleteTodo,
  updateTodo,
  createTodo,
  handleChange
}) 
  {
  const [showInput, setShowInput] = useState(false)
  return (
    <li>
      <div className="left">
        <h2
          onClick={(e) => {
            setShowInput(!showInput)
          }}
        >
          {todos.text}
        </h2>
        <input
          style={{ display: showInput ? "block" : "none" }}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateTodo(todos.id, e)
              setShowInput(false)
            }
          }}
        />
      </div>
      <label className="middle">
        Complete
        <input
          type="checkbox"
          checked={todos.completed}
          onChange={(e) => {
            updateTodo(todos.id, e)
          }}
        />
      </label>
      <button
        checked={todos.completed}
        onClick={(e) => {
          deleteTodo(todos.id)
        }}
      >
        Delete Todo
      </button>
    </li>
  )
}