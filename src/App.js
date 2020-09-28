import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { addTodo } from './actions/index';
import AddTodo from './components/AddToDo';
import TodoList from './components/TodoList.js'

class App extends React.Component {

  render(){
    const { dispatch, visibleTodos } = this.props

    return (
      <div>
         <AddTodo onAddClick = {text =>dispatch(addTodo(text))} />
         <TodoList todos = {visibleTodos}/>
      </div>
    );
  }
}

function select(state) {
  return {
     visibleTodos: state.todos
  }
}
export default connect(select)(App);