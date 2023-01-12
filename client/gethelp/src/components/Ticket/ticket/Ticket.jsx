import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTicket, deleteTicket } from '../../../slices/TicketSlice';
import { editTicket as updateTicketAPI, deleteTicket as deleteTicketAPI } from '../../../api/apiTickets';
import { getDateFromDateString } from '../../../helpers/dateTools'

const Ticket = ({ ticket }) => {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(ticket.title);
  const [message, setMessage] = useState(ticket.message);

  const handleEdit = async () => {
    setIsEditable(!isEditable)
    if (isEditable) {
      try {
        const updatedTicket = { title };
        await updateTicketAPI(ticket._id, updatedTicket);
        dispatch(editTicket(updatedTicket));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleDelete = async (ticket) => {
    try {
      await deleteTicketAPI(ticket._id);
      dispatch(deleteTicket(ticket));
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <div className='solo-ticket'>
      <div className='fields-ticket'>
        <input
          type='text'
          readOnly={!isEditable}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <span
          value={getDateFromDateString(ticket.date).toLocaleString('default', {
            minute: 'numeric',
            hour: 'numeric',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        />
        <br />
        <div className='ticket-buttons'>
          <button onClick={handleEdit}>{isEditable ? 'Save' : 'Edit'}</button>
          <button onClick={() => handleDelete(ticket)}>X</button>
        </div>
      </div>
    </div>
  )
};

export default Ticket;