import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { editTicket, deleteTicket } from '../../../slices/TicketSlice';
import { editTicket as updateTicketAPI, deleteTicket as deleteTicketDbAPI, getTicket as getTicketFromAPI, deleteTicketWithinUser as deleteTicketUserAPI } from '../../../api/apiTickets';
import { getDateFromDateString } from '../../../helpers/dateTools'
import { activeTicket } from '../../../slices/ActiveTicketSlice';
import { useNavigate } from 'react-router-dom';

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
        await updateTicketAPI(ticket._id, updatedTicket);
        dispatch(editTicket(updatedTicket));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleDelete = async (user, ticket) => {
    try {
      deleteTicketUserAPI(user._id, ticket._id);
      await deleteTicketDbAPI(ticket._id);
      dispatch(deleteTicket(ticket));
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
