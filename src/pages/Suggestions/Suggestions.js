import React from 'react'
import '../../App.css';
import Form from '../../Components/Form'
import TodoList from '../../Components/TodoList'

export default function Suggestions() {
 
  return (
    <div className="App">
      <h1>Suggestion List</h1>
      <Form />
      <TodoList/>
    </div>
  );
}