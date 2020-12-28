import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: [{task: "Walk Tiger"}, {task: "Feed Dinosaur"} ]
        
    }; 
    this.create = this.create.bind(this); 
    }
// create (newtoDo) this makes new State it takes the new todos
// and then it adds the newTodo to the list.
//then you have to bind it. 
//then you pass it to the NewTodoForm below. using "createTodo = {this.create}" 
// then you pass {this.create} in the actual NewTodoForm as props in the handleSubmit
create(newTodo){
    this.setState({
        todos: [...this.state.todos , newTodo]
    })

}    
// making new variable called todos and mapping the todo component.
render() {
        const todos = this.state.todos.map(todo => {
            return <Todo task = {todo.task} />
        })
        return (
            <div>
            <h1> Todo List! </h1>
            <NewTodoForm createTodo = {this.create}  />
            <ul>
            {todos}
            </ul>
              
            </div>
        )
    }
}

export default TodoList; 

//you need a constructor in the Todo list because it needs state. 