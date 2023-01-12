import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ToDo = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [date, setDate] = useState(todo.date);
  const [note, setNote] = useState(todo.note);

  return (

  )
};