import React from 'react';
import { addTodo } from '../../../slices/TodoSlice'
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

  );
};