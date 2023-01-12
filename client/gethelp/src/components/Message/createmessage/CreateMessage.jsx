import React from 'react';
import { useDispatch } from 'react-redux';
import { addMessage, resetMessage } from '../../../slices/MessageSlice';
import { addMessage as addMessageAPI } from '../../../api/apiMessages';

const handleSubmit = async (event, dispatch, ticketId) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const message = {
    message: formData.get('message'),
    sender: 'admin',
    date: new Date().toISOString().slice(0, 16),
    ticket: ticketId
  }
  try {
    const data = await addMessageAPI(message);
    dispatch(addMessage(data));
  } catch (err) {
    console.error(err);
  }
  event.target.reset();
};

const CreateMessage = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetMessage);
  }
  return (
    <div className='create-message'>
      <form onSubmit={event => handleSubmit(event, dispatch)}>
        <div className='fields-create'>
          <label htmlFor='message'>Message</label>
          <input
            type='text'
            name='message'
            id='message'
          />
        </div>
        <div className='create-buttons'>
          <button type='submit'>Send</button>
          <button type='reset' onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  )
};

export default CreateMessage;
