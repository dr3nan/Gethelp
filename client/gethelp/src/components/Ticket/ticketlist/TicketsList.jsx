import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets as getTicketsAPI } from '../../../api/apiTickets';
import { setTickets } from '../../../slices/TicketSlice';
import Ticket from '../ticket/Ticket';

const TicketList = () => {
  const dispatch = useDispatch();

  const tickets = useSelector(state => state.ticket);

  const fetchTickets = async () => {
    const ticketsFromDataBase = await getTicketsAPI();
    dispatch(setTickets(ticketsFromDataBase))
  };

  useEffect(() => {
    fetchTickets()
  }, []);

  console.log('tickets:', tickets);

  return (
    <div className='ticket-list'>
      {
        tickets?.map(ticket => {
          return <Ticket key={ticket._id} ticket={ticket} />
        })
      }
    </div>
  );
};

export default TicketList;
