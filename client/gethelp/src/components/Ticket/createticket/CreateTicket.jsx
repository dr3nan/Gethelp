import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTicket } from '../../../slices/TicketSlice';
import { addTicket as addTicketAPI } from '../../../api/apiTickets';
import { createTicketInUser } from '../../../api/apiTickets';

const CreateTicket = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => user);
  // is not sending the message to be, only ticket
  const handleSubmit = async (event, dispatch) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const ticket = {
      title: formData.get('title'),
      status: 'New',
      user: user.nickname,
      date: new Date().toISOString().slice(0, 16),
      messages: [
        {
          message: formData.get('message'),
          sender: user.nickname,
          date: new Date().toISOString().slice(0, 16)
        }
      ]
    }
    try {
      // TODO: api call needs to add ticket to user, add ticket to db and update store
      // create ticket in API
      const ticketInUserAPI = await addTicketAPI(ticket);
      // await addTicketAPI(ticket);
      console.log('ticket', ticket);
      // create ticket in user file/tickets
      // const ticketInUserState = await createTicketInUser(user._id, ticket);
      await createTicketInUser(user._id, ticket);
      // update store with ticket in user
      // dispatch(addTicket(ticketInUserState));
      dispatch(addTicket(ticketInUserAPI));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='create-ticket'>
      <h4>Create New Ticket</h4>
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
        </div>
      </form>
    </div>
  )
};

export default CreateTicket;
