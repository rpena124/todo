/*
Create
Read (Index & Show)
Update
Destroy
*/
import { useState, useEffect } from 'react'
import TodoList from '../components/TodoList'


export default function TodoPage (props){
    const [todos, setTodos] = useState([])
    const [foundTodo, setFoundTodo] = useState(null)
    const [newTodo, setNewTodo] = useState({
        title: "",
        completed: false
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
    const updateTodo = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/todos/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...updatedData})
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
                const response = await fetch(`/api/todos`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...newTodo})
                })
                const data = await response.json()
                setFoundTodo(data)
                setNewTodo({
                    title: "",
                    completed: false
                })
            } catch (error) {
                console.error(error)
            }
        }

    const handleChange = (evt) => {
        setNewTodo({...newTodo, [evt.target.name]: evt.target.value})
    }

    useEffect(()=> {
        getTodos()
    }, [foundTodo])

    return(
        <>
            <TodoList
                todos = {todos}
                getTodos = {getTodos}
                deleteTodo = {deleteTodo}
                updateTodo = {updateTodo}
                createTodo = {createTodo}
                handleChange = {handleChange}
            />
        </>
    )
}