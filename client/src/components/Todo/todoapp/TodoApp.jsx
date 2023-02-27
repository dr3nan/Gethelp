import React from 'react';
import CreateToDo from '../createtodo/CreateTodo';
import ToDoList from '../todolist/TodoList';

const TodoApp = () => {
  return (
    <div className='todo-app'>
      <div className='create-todo-app'>
        <CreateToDo />
      </div>
      <div className='todo-list-app'>
        <ToDoList />
      </div>
    </div>
  );
};

export default TodoApp;