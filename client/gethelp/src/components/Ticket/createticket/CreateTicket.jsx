import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTicket as addTicketAPI, createTicketInUser as createTicketInUserAPI } from '../../../api/apiTickets';
import { getUser as getUserFromAPI} from '../../../api/apiUsers';
import { addTicket } from '../../../slices/TicketSlice';
import { isUserLogged } from '../../../slices/UserSlice';

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
      // TODO: api call needs to add ticket to db, // DONE
      // add ticket to user, fetch user with new tickets and update user state // DONE

      // create ticket in DB API
      const ticketAddedAPI = await addTicketAPI(ticket);
      // create ticket in user tickets array db
      await createTicketInUserAPI(user._id, ticket);
      // fetch user with new tickets to update state later
      const userWithNewTicketAPI = await getUserFromAPI(user._id);
      // update ticket state with new ticket
      dispatch(addTicket(ticketAddedAPI));
      // update user state with new ticket
      dispatch(isUserLogged(userWithNewTicketAPI));
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
