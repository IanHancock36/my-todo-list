import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
//you pass in this.state since you need the {task: ""} its statefull
// since you create new tasks but its a prop since you will pass these in. 
// you put this.setState to the empty string task so it resets and doe not
// keep what you typed in the to do list input form.   
handleSubmit(evt){
      evt.preventDefault();
      this.props.createTodo({...this.state, id: uuidv4()});
      this.setState ({task: ''}); 
}
//above the create todo you are taking the state and adding a random id with it.

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo </label>
        <input
          type="text"
          placeholder="New Todo"
          id="task"
          value={this.state.task}
          onChange={this.handleChange}
          name="task"
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
// #1 there is state involved since form will change thats why there is a constructor used.

// #2 state #1 set your state to empty string of {task: "" } since its an empty object

// #3 add in {this.state.task} for the 'value = ' of your input

//#4 now you need a onChange and put the handleChange in for the event.
// then you build handleChange passing event and set the state of the handleChange

//#5 to make a new todo item pop up to accomplish you must add a "onSubmit"
// on the form.

//#6 call the new handleSubmit. then give it a function to call it. 
// go back into the Todo list and call a create function.



//In your htmlFor and the Id it needs to be the same thing for html reading purposes
// if the page breaks and or somone is using a screen reader since they are sight impared.
