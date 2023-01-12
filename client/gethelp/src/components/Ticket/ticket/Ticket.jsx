import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTicket, deleteTicket } from '../../../slices/TicketSlice';
import { editTicket as updateTicketAPI, deleteTicket as deleteTicketAPI } from '../../../api/apiTickets';

const Ticket = ({ ticket }) => {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(ticket.title);
  const [message, setMessage] = useState(ticket.message);

  const handleEdit = async () => {
    setIsEditable(!isEditable)
    if (isEditable) {
      try {
        const updatedTicket = { title, message };
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

  
};