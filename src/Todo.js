import React from "react";
import "./Todo.css"


const Todo = ({ id, task, removeTodos }) => {

    const removeHandle = () => {
        removeTodos(id)
    }

    return (
        <div className="Todo" >
            <h1 >{task}</h1>
            <button className="Todo-btn" onClick={removeHandle}>x</button>
        </div>
    )
}

export default Todo;