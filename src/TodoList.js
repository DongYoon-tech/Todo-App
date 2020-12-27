import { React, useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from 'uuid';
import "./TodoList.css"

const TodoList = () => {

    const [todos, setTodos] = useState([])

    const addTodos = (newTodo) => {
        let todo = { ...newTodo, id: uuid() }
        setTodos(c => [...c, todo])
    }

    const removeTodos = (id) => {
        setTodos(todo => todo.filter(t => t.id !== id));
    }

    const renderTodos = () => {
        return (
            <ul>
                {todos.map(item => (

                    <Todo
                        id={item.id}
                        task={item.task}
                        removeTodos={removeTodos} />

                ))}
            </ul>
        )

    }

    return (
        <div className="TodoList">
            <NewTodoForm
                addTodos={addTodos} />
            {renderTodos()}

        </div>
    )

}

export default TodoList;