import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo as updateTodoAPI, deleteTodo as deleteTodoAPI } from '../../../api/apiTodos';
import { deleteTodo, editTodo } from '../../../slices/TodoSlice';

const ToDo = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [date, setDate] = useState(todo.date);
  const [note, setNote] = useState(todo.note);

  const handleEdit = async () => {
    setIsEditable(!isEditable)
    if (isEditable) {
      try {
        const updatedTodo = [...todo, { title, date, note }];
        await updateTodoAPI(todo._id, updatedTodo);
        dispatch(editTodo(updatedTodo));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodoAPI(todo._id);
      dispatch(deleteTodo(todo));
    } catch (err) {
      console.error(err)
    }
  };

  return (
    
  )
};