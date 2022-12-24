import Todo from "./Todo"

export default function TodoList({
  todos,
  newTodo,
  foundTodo,
  getTodos,
  deleteTodo,
  updateTodo,
  createTodo,
  handleChange

}) {
  
  return (
    <>
      <h1>Create Todo</h1>
      <input
        type="text"
        value={newTodo.title}
        name="text"
        onChange={handleChange}
        // onKeyDown={(e) => {
        //   e.key === "Enter" && createTodo() 
        // }}
      />
      <button onClick={createTodo}>Add Todo</button>
      {/* //todos.length is checking the length of the array, if the length is 0 that means its falsy. */}
      {todos.length ? (
        <>
          <h1>Todo Items</h1>
          <ul className="todolist">
            {todos
              .filter((i) => !i.completed)
              .map((todo) => {
                return (
                  <Todo
                  newTodo = {newTodo}
                  todos = {todos}
                  foundTodo = {foundTodo}
                  getTodos = {getTodos}
                  deleteTodo = {deleteTodo}
                  updateTodo = {updateTodo}
                  createTodo = {createTodo}
                  handleChange = {handleChange}
                  />
                )
              })}
          </ul>
          <h1>Completed Items </h1>
          <ul className="todolist">
            {todos
              .filter((i) => i.completed)
              .map((todo) => {
                return (
                  <Todo
                  newTodo = {newTodo}
                  todos = {todos}
                  foundTodo = {foundTodo}
                  getTodos = {getTodos}
                  deleteTodo = {deleteTodo}
                  updateTodo = {updateTodo}
                  createTodo = {createTodo}
                  handleChange = {handleChange}
                  />
                )
              })}
          </ul>
        </>
      ) : (
        <h1>No Todos Added Yet</h1>
      )}
    </>
  )
}