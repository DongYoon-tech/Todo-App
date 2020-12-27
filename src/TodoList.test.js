import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";


it("renders without crashing", function () {
    render(<TodoList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("add a new todo", function () {
    const {
        queryByText,
        getByLabelText,
        getByText } = render(<TodoList />)

    expect(queryByText("x")).not.toBeInTheDocument();

    const NewTodoInpt = getByLabelText("Task");
    fireEvent.change(NewTodoInpt, { target: { value: "sleep" } })
    const btn = getByText("Add")
    fireEvent.click(btn)
    const removeBtn = queryByText('x')
    expect(removeBtn).toBeInTheDocument();
})

it("remove a todo", function () {
    const {
        getByLabelText,
        getByText } = render(<TodoList />)

    const NewTodoInpt = getByLabelText("Task");
    fireEvent.change(NewTodoInpt, { target: { value: "sleep" } })
    const btn = getByText("Add")
    fireEvent.click(btn)

    const removeBtn = getByText('x')

    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
});