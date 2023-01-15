import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTicket, resetForm } from '../../../slices/TicketSlice';
import { addTicket as addTicketAPI } from '../../../api/apiTickets';
import { addTicketToUser } from '../../../api/apiUsers';

const CreateTicket = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  console.log('user initial state', user.user);
  console.log('user id', user.user.id);
  console.log('user tickets', user.user.tickets);

  const handleSubmit = async (event, dispatch) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const ticket = {
      title: formData.get('title'),
      status: 'New',
      user: user.user.nickname,
      date: new Date().toISOString().slice(0, 16),
      messages: [
        {
          message: formData.get('message'),
          sender: user.user.nickname,
          date: new Date().toISOString().slice(0, 16)
        }
      ]
    }
    try {
      const data = await addTicketAPI(ticket);
      await addTicketToUser(user.user._id, ticket);
      dispatch(addTicket(data));
    } catch (err) {
      console.error(err);
    }
    event.target.reset();
  };

  const handleReset = () => {
    dispatch(resetForm);
  };
  
  return (
    <div className='create-ticket'>
      <form onSubmit={event => handleSubmit(event, dispatch)}>
        <div className='create-fields'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
          />
          <br />
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

export default CreateTicket;
