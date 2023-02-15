import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getToDos as getTodosAPI } from '../../../api/apiTodos';
import { getToDos } from '../../../api/apiTodos';
import { setTodos } from '../../../slices/TodoSlice';
import ToDo from '../todo/Todo';

const ToDoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector(({ todos }) => todos);

  const fetchTodos = async () => {
    const todosFromDB = await getToDos();
    if (!todosFromDB) return console.log('no todos in db');
    else dispatch(setTodos(todosFromDB));
    // return todosFromDB;
  };

  console.log('checking how many todos are in state after refresh: ', todos);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className='todo-list'>
      {
        todos?.map(todo => {
          return <ToDo key={todo._id} todo={todo} />
        })
      }
    </div>
  )
};

export default ToDoList;
