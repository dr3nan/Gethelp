import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetMessage } from '../../../slices/MessageSlice';
import { addMessage as addMessageAPI } from '../../../api/apiMessages';
import { activeTicket as setActiveTicket } from '../../../slices/ActiveTicketSlice'

const CreateMessage = () => {
  const dispatch = useDispatch();
  // we are receiving the active ticket from the reducer activeTicket (state), in the ActiveTicketSlice
  // we will receive the whole ticket by being in the ticket itself
  const activeTicket = useSelector((state) => state.activeTicket);
  console.log('active ticket', activeTicket);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // we set what we are going to get from the form to be sent later
    const formData = new FormData(event.target);
    // we receive the message from the message input, hard code the user nd get today's date
    const message = {
      message: formData.get('message'),
      sender: 'admin',
      date: new Date().toISOString().slice(0, 16)
    }
    try {
      // we receive the current ticket thanks to the call from state which includes the whole current ticket made above
      // with its id. and we pass it to the api that creates messages, we also add the inputs from the form
      const ticket = await addMessageAPI(activeTicket._id, message);
      // dispatch sends to the activeTicket action the ticket var that has all the info we need and updates the ticket
      dispatch(setActiveTicket(ticket));
      console.log('message added to ticket');
    } catch (err) {
      console.error(err);
    }
    event.target.reset();
  };

  const handleReset = () => {
    dispatch(resetMessage);
  };

  return (
    <div className='create-message'>
      <form onSubmit={event => handleSubmit(event)}>
        <div className='create-fields'>
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
