import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo as updateTodoAPI, deleteTodo as deleteTodoAPI } from '../../../api/apiTodos';
import { getDateFromDateString } from '../../../helpers/dateTools';
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
    <div className='solo-todo'>
      <div className='fields-todo'>
        <input
          type='text'
          readOnly={!isEditable}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <input
          type='text'
          readOnly={!isEditable}
          value={getDateFromDateString(date).toLocaleString('default', {
            minute: 'numeric',
            hour: 'numeric',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
          onChange={e => setDate(e.target.value)}
        />
        <br />
        <input
          type='text'
          readOnly={!isEditable}
          value={note}
          onChange={e => setNote(e.target.value)}
        />
      </div>
      <div className='buttons-todo'>
        <button onClick={handleEdit}>{isEditable ? 'Save' : 'Edit'}</button>
        <button onClick={() => handleDelete(todo)}>X</button>
      </div>
    </div>
  );
};

export default ToDo;