import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, resetMessage } from '../../../slices/MessageSlice';
import { addMessage as addMessageAPI } from '../../../api/apiMessages';


const CreateMessage = () => {
  const dispatch = useDispatch();
  const activeTicket = useSelector((state) => state.activeTicket)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const message = {
      message: formData.get('message'),
      sender: 'admin',
      date: new Date().toISOString().slice(0, 16),
      ticket: activeTicket._id
    }
    try {
      const data = await addMessageAPI(activeTicket._id, message);
      dispatch(addMessage(data));
    } catch (err) {
      console.error(err);
    }
    event.target.reset();
  };

  const handleReset = () => {
    dispatch(resetMessage);
  }
  return (
    <div className='create-message'>
      <form onSubmit={event => handleSubmit(event)}>
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
