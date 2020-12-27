import { React, useState } from "react";
import "./NewTodoForm.css"


const NewTodoForm = ({ addTodos }) => {

    const [todoForm, setTodoForm] = useState({ task: "" })

    const handleChange = (e) => {
        const { name, value } = e.target
        setTodoForm(t => ({
            ...t,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodos(todoForm)
        setTodoForm({ task: "" })
    }

    return (
        <div className="NewTodoForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task</label>
                <input
                    id="task"
                    name="task"
                    type="text"
                    value={todoForm.task}
                    onChange={handleChange}
                >
                </input>

                <button className="NewTodoForm-btn">Add</button>
            </form>
        </div>
    )
}

export default NewTodoForm;