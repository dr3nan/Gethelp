import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { editTicket, deleteTicket } from '../../../slices/TicketSlice';
import { editTicket as updateTicketAPI, deleteTicket as deleteTicketFromDbAPI, getTicket as getTicketFromAPI, deleteTicketWithinUser as deleteTicketFromUserAPI } from '../../../api/apiTickets';
import { getDateFromDateString } from '../../../helpers/dateTools'
import { activeTicket } from '../../../slices/ActiveTicketSlice';
import { useNavigate } from 'react-router-dom';
import { isUserLogged } from '../../../slices/UserSlice';
import { getUser } from '../../../api/apiUsers';

const Ticket = ({ ticket }) => {
  const { user } = useSelector(({ user }) => user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(ticket.title);
  const [status, setStatus] = useState(ticket.status);

  const handleEdit = async () => {
    setIsEditable(!isEditable)
    if (isEditable) {
      try {
        const updatedTicket = { title, status };
        // update the ticket to DB
        await updateTicketAPI(ticket._id, updatedTicket);
        
        dispatch(editTicket(updatedTicket));
      } catch (err) {
        console.error(err);
      }
    }
  };

  // handleDlete should delete ticket from user and db
  // should fetch from DB and from user
  // should update state for tickets (deleteTicket)
  // fetch user and update user state (isLogged)

  const handleDelete = async (user, ticket) => {
    try {
      console.log('user id', user._id);
      console.log('ticket id', ticket._id);

      // delete ticket from DB
      await deleteTicketFromDbAPI(ticket._id);
      // delete ticket from user
      await deleteTicketFromUserAPI(user._id, ticket._id);
      // get user with new tickets from DB
      const getUserFromAPI = await getUser(user._id);
      // update ticket state
      dispatch(deleteTicket(ticket._id));
      // update user state with fetched user
      dispatch(isUserLogged(getUserFromAPI));
    } catch (err) {
      console.error(err);
    }
  };

  const handleShowMessages = async (ticket) => {
    try {
      const ticketFromAPI = await getTicketFromAPI(ticket._id);
      dispatch(activeTicket(ticketFromAPI));
      navigate('/ticket/' + ticket._id + user._id)
    } catch (err) {
      console.error(err);
    }
  };
  // FEATURE: add a function to get the number of messages to display
  // FEATURE: make status editable only to admin
  return (
    <div className='solo-ticket'>
      <div className='ticket-fields'>
        <label htmlFor='status'>Status</label>
        <input
          type='text'
          readOnly={!isEditable}
          value={status}
          onChange={e => setStatus(e.target.value)}
        />
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          readOnly={!isEditable}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <div className='EWDate-ticket'>
          {getDateFromDateString(ticket.date).toLocaleString('default', {
            minute: 'numeric',
            hour: 'numeric',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        </div>
        <label type='text'>{ticket.user}</label>
      </div>
      <div className='ticket-buttons'>
        <button onClick={handleEdit}>{isEditable ? 'Save' : 'Edit'}</button>
        <button onClick={() => handleDelete(user, ticket)}>X</button>
        <button onClick={() => handleShowMessages(ticket)}>Show Messages</button>
      </div>
    </div>
  )
};

export default Ticket;
