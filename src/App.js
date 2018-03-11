import React, { Component } from 'react';
import './App.css';
import ToDo from './components/toDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw away the dishes', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }

handleSubmit(e) {
  e.preventDefault();
  if (!this.state.newTodoDescription) { return }
  const newTodo = {description: this.state.newTodoDescription, isCompleted: false };
  this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: 't' });
}

handleChange(e) {
  this.setState({ newTodoDescription: e.target.value })
}

toggleComplete(index) {
  const todos = this.state.todos.slice();
  const todo = todos[index];
  todo.isCompleted = todo.isCompleted ? false : true;
  this.setState({ todos: todos });
}

deleteTodo(index) {
    // const newArr = this.state.todos.filter( todoDescription => todo.deleteTodo !== false);
    // this.setState({ todos: newArr});
    // console.log ('newArr');
    const indexToTakeOut = index
    function takeOutByIndex(value, index, ar) {
    }
    const todos = this.state.todos;
    // const todo = todos[index];
    // this.setState({ todos: todos });
    var newArray = todos.slice(index+1).concat(todos.slice(0,index));
    // let todos = this.state.todos;
    //
    // const newTodos = todos[index] = "";
    // // const todo = todos[index];
    // this.setState({ todos: newTodos });
    //
    // const new_todos = this.state.todos.filter(
    //   todoDescription => todoDescription.description !== todo.description
    // );
    this.setState({ todos: newArray });
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo
              key={ index }
              description={ todo.description }
              isCompleted={ todo.isCompleted }
              toggleComplete={ () => this.toggleComplete(index) }
              deleteTodo={ () => this.deleteTodo(index)}
            />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
