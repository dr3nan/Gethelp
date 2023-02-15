import React from 'react';
import CreateToDo from '../createtodo/CreateTodo';
import ToDoList from '../todolist/TodoList';

const TodoApp = () => {
  return (
    <div className='todo-app'>
      <ToDoList />
      <CreateToDo />
    </div>
  );
};

export default TodoApp;