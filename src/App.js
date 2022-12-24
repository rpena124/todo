// import "./styles.css";
// import { useState, useEffect} from "react"
// import TodoList from "./components/TodoList"


// export default function App() {
//     // //starting with an empty array since this is a collection : useState([])
//     //  const [todos, setTodos]=  useState([])

//     // const addTodo = (e) =>{
//     //     //Each to do items is going to have an object with a text field, id and completed field
//     //     const newTodo = {text: e.target.value, id: Date.now(), completed: false}
//     //     //we call setTodos to update the state with the new ToDo we just created 
//     //     //We need to make sure we are creating a new array not updating the existing one
//     //     // using '...' allows us to copy all the items from the precious array over to the new array
//     //     setTodos([newTodo, ...todos])
//     //     //This is so that the input field goes back to being nothing, clearing the input field
//     //     e.target.value = ''
//     // }

//     // const completeTodo = (id, e) => {
//     //     //We need to make a copy of the array because if we make a change to the original it wont trigger a change in react
//     //     const todosCopy = [...todos]
//     //     //findIndex() method returns the index of the first element in an array that satisfies the provided testing function.
//     //     //If no elements satify the testing function, -1 is returned.
//     //     const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
//     //     //Here we are chanring the completed value from false to true
//     //     todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed
//     //     setTodos(todosCopy)
//     // }

//     // const editTodoText = (id, e) => {
//     //     const todosCopy = [...todos]
//     //     const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
//     //     todosCopy[indexOfTodo].text = e.target.value
//     //     setTodos([...todosCopy])
//     //     e.target.value = ""
//     // }
    
//     // const deleteTodo = (id) => {
//     //     const todosCopy = [...todos]
//     //     const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
//     //     todosCopy.splice(indexOfTodo, 1)
//     //     setTodos([...todosCopy])
//     // };
//     // <----- This is the api-test code start ------>
//     // const [state, setState] = useState(null)

  
//     // const fetchState = async () => {
//     //   try {
//     //     const response = await fetch('/api/test')
//     //     const data = await response.json()
//     //     setState(data)
//     //   } catch (error) {
//     //     console.error(error)
//     //   }
//     // }
  
//     // useEffect(() => {
//     //   fetchState()
//     // }, [])
//  // <----- This is the api-test code end ------>
//  const [todos, setTodos] = useState([])
//  const [foundTodo, setFoundTodo] = useState(null)
//  const [newTodo, setNewTodo] = useState({
//      text: "",
//      completed: false
//  })
//  // index
//  const getTodos = async () => {
//      try {
//          const response = await fetch('/api/todos')
//          const data = await response.json()
//          setTodos(data)
//      } catch (error) {
//          console.error(error)
//      }
//  }
//  // delete
//  const deleteTodo = async (id) => {
//      try {
//          const response = await fetch(`/api/todos/${id}`, {
//              method: "DELETE",
//              headers: {
//                  'Content-Type': 'application/json'
//              }
//          })
//          const data = await response.json()
//          setFoundTodo(data)
//      } catch (error) {
//          console.error(error)
//      }
//  }
//  // update
//  const updateTodo = async (id, updatedData) => {
//      try {
//          const response = await fetch(`/api/todos/${id}`, {
//              method: "PUT",
//              headers: {
//                  'Content-Type': 'application/json'
//              },
//              body: JSON.stringify({...updatedData})
//          })
//          const data = await response.json()
//          setFoundTodo(data)
//      } catch (error) {
//          console.error(error)
//      }
//  }
//  // create
//      const createTodo = async () => {
//          try {
//              const response = await fetch("/api/todos", {
//                  method: "POST",
//                  headers: {
//                      'Content-Type': 'application/json'
//                  },
//                  body: JSON.stringify({...newTodo})
//              })
//              const data = await response.json()
//              setFoundTodo(data)
//              setNewTodo({
//                  text: "",
//                  completed: false
//              })
//          } catch (error) {
//              console.error(error)
//          }
//      }

//  const handleChange = (evt) => {
//      setNewTodo({...newTodo, [evt.target.name]: evt.target.value})
//  }

//  useEffect(()=> {
//      getTodos()
//  }, [foundTodo])


// //  <------ API -------------->

//   return (
//     <div className="App">

//       <TodoList
//           newTodo = {newTodo}
//           todos = {todos}
//           foundTodo = {foundTodo}
//           getTodos = {getTodos}
//           deleteTodo = {deleteTodo}
//           updateTodo = {updateTodo}
//           createTodo = {createTodo}
//           handleChange = {handleChange}
//       />

//     </div>
//   );
// }

import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'

export default function App(props) {
    const [showInput, setShowInput] = useState(false)
    const [todos, setTodos] = useState([])
    const [foundTodo, setFoundTodo] = useState(null)
    const [newTodo, setNewTodo] = useState({
        text: '',
        completed: false,
    })
    // index
    const getTodos = async () => {
        try {
            const response = await fetch('/api/todos')
            const data = await response.json()
            setTodos(data)
        } catch (error) {
            console.error(error)
        }
    }
    // delete
    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`/api/todos/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setFoundTodo(data)
        } catch (error) {
            console.error(error)
        }
    }
    // update
    const updateTodo = async (id, updatedTodo) => {
        try {
            const response = await fetch(`/api/todos/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...updatedTodo })
            })
            const data = await response.json()
            setFoundTodo(data)
        } catch (error) {
            console.error(error)
        }
    }
    // create
    const createTodo = async () => {
        try {
            const response = await fetch('/api/todos', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...newTodo })
            })
            const data = await response.json()
            setFoundTodo(data)
            setNewTodo({
                text: '',
                completed: false,
            })
        } catch (error) {
            console.error(error)
        }
    }

    const completeTodo = (id, e) => {
        const todosCopy = [...todos]
        const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
        todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed
        setTodos([...todosCopy])
      }

    const handleChange = (evt) => {
        setNewTodo({ ...newTodo, [evt.target.name]: evt.target.value })
    }

    useEffect(() => {
        getTodos()
    }, [foundTodo])

    return (
        <>
            {
                todos && todos.length ? (<ul>
                    {
                        todos.map((todo) => {
                            return (
                                <li>
                                        <h2
                                            onClick={(e) => {
                                                setShowInput(!showInput)
                                            }}
                                        >
                                            {todo.text}
                                        </h2>
                                        <input
                                            style={{ display: showInput ? "block" : "none" }}
                                            type="text"
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    updateTodo(todo.id, e)
                                                    setShowInput(false)
                                                }
                                            }}
                                        />
                                    <label className="middle">
                                        Complete
                                        <input
                                            type="checkbox"
                                            checked={todo.completed}
                                            onChange={(e) => {
                                                completeTodo(todo.id, e)
                                            }}
                                        />
                                    </label>
                                    <button
                                        checked={todo.completed}
                                        onClick={(e) => {
                                            deleteTodo(todo.id)
                                        }}
                                    >
                                        Delete Todo
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>) : <h1>No Todo Yet Add One Below</h1>
            }
            {'Text '}<input value={newTodo.text} onChange={handleChange} name="text"></input><br />
            {/* {'Completed '}<input type="checkbox" checked={newTodo.completed} onChange={(evt) => setNewTodo({ ...newTodo, completed: evt.target.checked })}></input><br /> */}
            <button onClick={() => createTodo()}>Create A New To Do</button>
            {
                foundTodo ? <div>
                    <h1>{foundTodo.text}</h1>
                    <h3>{foundTodo.completed ? 'I am ready' : 'I am not ready'}</h3>
                </div> : <>No To Do Found in To Do State</>
            }
        </>
    )

    // return(
    //     <TodoList 
    //     todos = {todos}
    //     foundTodo = {foundTodo}
    //     newTodo =  {newTodo}
    //     handleChange = {handleChange}
    //     completeTodo = {completeTodo} 
    //     createTodo={createTodo}
    //     updateTodo={updateTodo}
    //     deleteTodo={deleteTodo}/>
    // )
}