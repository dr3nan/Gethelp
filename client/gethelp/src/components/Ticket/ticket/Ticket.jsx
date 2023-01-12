import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTicket, deleteTicket } from '../../../slices/TicketSlice';
import { setMessages } from '../../../slices/MessageSlice';
import { editTicket as updateTicketAPI, deleteTicket as deleteTicketAPI } from '../../../api/apiTickets';
import { getDateFromDateString } from '../../../helpers/dateTools'
import { getMessages as getMessagesAPI } from '../../../api/apiMessages';

const Ticket = ({ ticket }) => {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(ticket.title);

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

  const showMessages = async (ticket) => {
    try {
      await getMessagesAPI(ticket._id);
      console.log('ticket id',ticket._id);
      console.log('ticket messages', ticket._id.massages);
      dispatch(setMessages(ticket._id.messages));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='solo-ticket'>
      <div className='ticket-fields'>
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
      </div>
      <div className='ticket-buttons'>
        <button onClick={handleEdit}>{isEditable ? 'Save' : 'Edit'}</button>
        <button onClick={() => handleDelete(ticket)}>X</button>
        <button onClick={() => showMessages(ticket)}>Show Messages</button>
      </div>
    </div>
  )
};

export default Ticket;