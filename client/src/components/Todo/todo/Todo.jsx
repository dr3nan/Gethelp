import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editToDo as updateTodoAPI, deleteToDo as deleteTodoAPI } from '../../../api/apiTodos';
import { getDateFromDateString } from '../../../helpers/dateTools';
import { deleteTodo, editTodo } from '../../../slices/TodoSlice';
import './Todo.css';

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
        const updatedTodo = { title, date, note };
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
    <div className='solo-todos-in-list'>
      <input
        type='text'
        className='input-title'
        readOnly={!isEditable}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type='text'
        className='input-date'
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
      <input
        type='text'
        className='input-note'
        readOnly={!isEditable}
        value={note}
        onChange={e => setNote(e.target.value)}
      />
      <div className='spacer-buttons'>
        <div className='buttons-todo'>
          <button onClick={handleEdit}>{isEditable ? 'Save' : 'Edit'}</button>
          <button onClick={() => handleDelete(todo)}>X</button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
