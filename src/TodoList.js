import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: [{task: "Walk Tiger"}, {task: "Feed Dinosaur"} ]
    
    }; 
    }
// making new variable called todos and mapping the todo component. 
    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo task = {todo.task} />
        })
        return (
            <div>
            <h1> Todo List! </h1>
            <ul>
            {todos}
            </ul>
              
            </div>
        )
    }
}

export default TodoList; 

//you need a constructor in the Todo list because it needs state. 