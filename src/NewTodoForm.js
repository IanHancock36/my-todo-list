import React, { Component } from 'react'

 class NewTodoForm extends Component {
     constructor(props){
         super(props);
         this.state = { task: ''}
     }

     handleChange(evt){
         this.setState({
             
         })

     }


    
     render() {
        return (
            <form>
                <label htmlFor = "task">New Todo </label>
                <input 
                type= "text" 
                placeholder= "New Todo" 
                id='task'
                value ={this.state.task} 
                onChange = {this.handleChange}/> 


            </form>
        )
    }
}

export default NewTodoForm 
// #1 there is state involved since form will change thats why there is a constructor used. 

// #2 state #1 set your state to empty string of {task: "" } since its an empty object 

// #3 add in {this.state.task} for the 'value = ' of your input 

//#4 now you need a onChange and put the handleChange in for the event.
// then you build handleChange passing event and set the state of the handleChange


//In your htmlFor and the Id it needs to be the same thing for html reading purposes
// if the page breaks and or somone is using a screen reader since they are sight impared. 