import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const initialState = [
    { id: 1, message: 'Walk the dog' },
    { id: 2, message: 'Take out trash' },
    { id: 3, message: 'Finish tutorial video' }
]

export default function Todos() {
    const [todoList, setTodoList] = useState(initialState)
    
    const deleteHandler = id => {
        const newTodos = todoList.filter(item => {
            return item.id !== id
        })

        setTodoList(newTodos)
    }

    const updateHandler = todo => {
        setTodoList(todoList.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item,
                    message: todo.message
                }
            } else {
                return item
            }
        }))
    }

    return (
        <div>
            <TodoForm todos={todoList} setTodos={setTodoList} />
            <TodoList todos={todoList} deleteHandler={deleteHandler} updateHandler={updateHandler} />
        </div>
    )
}
