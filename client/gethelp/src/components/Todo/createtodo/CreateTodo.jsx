import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, resetForm } from '../../../slices/TodoSlice'
import { addToDo as addTodoAPI } from '../../../api/apiTodos';

const handleSubmit = async (event, dispatch) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const todo = {
    title: formData.get('title'),
    date: formData.get('date'),
    note: formData.get('note')
  }
  try {
    const data = await addTodoAPI(todo);
    dispatch(addTodo(data));
  } catch (err) {
    console.error(err);
  }
  event.target.reset();
}

function CreateToDo() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetForm);
  }

  return (
    <div className='create-todo'>
      <form onSubmit={event => handleSubmit(event, dispatch)}>
        <div className='fields-create'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
          />
          <br />
          <label htmlFor='date'>Date</label>
          <input
            type='datetime-local'
            name='date'
            id='date'
            min={new Date().toISOString().slice(0, 16)}
          />
          <br />
          <label htmlFor='note'>Notes</label>
          <input
            name='note'
            id='note'
          />
        </div>
      </form>
    </div>
  );
};