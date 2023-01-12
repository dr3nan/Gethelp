import React from 'react';
import { useDispatch } from 'react-redux';
import { addTicket, resetForm } from '../../../slices/TicketSlice';
import { addTicket as addTicketAPI } from '../../../api/apiTickets';

const handleSubmit = async (event, dispatch) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const ticket = {
    title: formData.get('title'),
    status: 'New',
    date: formData.get('date'),
    messages: [
      {
        message: formData.get('message'),
        sender: 'admin'
      }
    ]
  }
  try {
    const data = await addTicketAPI(ticket);
    dispatch(addTicket(data));
  } catch (err) {
    console.error(err);
  }
  event.target.reset();
};

const CreateTicket = () => {

  return (

  )
};
