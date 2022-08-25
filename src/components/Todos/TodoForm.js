import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            id: '',
            message: ''
        }
        this.state = this.initialState
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            id: Date.now(),
            message: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.setTodos([ this.state, ...this.props.todos ])
        this.setState(this.initialState)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="todo"
                        value={this.state.message}
                        placeholder="Enter your Todo item"
                        onChange={this.handleChange}
                    />
                    <button  type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}











// import React, { useState } from 'react'

// export default function TodoForm({ todos, setTodos  }) {

//     const initialState = {
//         id: '',
//         message: ''
//     }

//     const [todo, setTodo] = useState(initialState)

//     const handleChange = e => {
//         setTodo({
//             id: Date.now(),
//             message: e.target.value
//         })
//     }

//     const handleSubmit = e => {
//         e.preventDefault()
//         setTodos([ todo, ...todos ])
//         setTodo(initialState)
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="todo"
//                     value={todo.message}
//                     placeholder="Enter your Todo item"
//                     onChange={handleChange}
//                 />
//                 <button type="submit">Add Todo</button>
//             </form>
//         </div>
//     )
// }
