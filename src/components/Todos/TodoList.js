import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, deleteHandler, updateHandler }) {
    return (
        <div>
            { todos.map(todo => {
                return <Todo key={todo.id} todo={todo} deleteHandler={deleteHandler} updateHandler={updateHandler} />
            }) }
        </div>
    )
}
