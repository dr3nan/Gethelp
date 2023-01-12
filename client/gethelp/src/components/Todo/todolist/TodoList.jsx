import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToDos as getTodosAPI } from '../../../api/apiTodos';
import { setTodos } from '../../../slices/TodoSlice';
import ToDo from '../todo/ToDo';

const ToDoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todo);

  const fetchTodos = async () => {
    const todosFromDB = await getTodosAPI()
    dispatch(setTodos(todosFromDB))
  };

  useEffect(() => {
    fetchTodos()
  }, []);

  return (

  )
};