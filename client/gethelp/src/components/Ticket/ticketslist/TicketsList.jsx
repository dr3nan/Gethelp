import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets as getTicketsAPI } from '../../../api/apiTickets';
import { setTickets } from '../../../slices/TicketSlice';
import Ticket from '../ticket/Ticket';

const TicketList = () => {
  const dispatch = useDispatch();

  // const tickets = useSelector(state => state.tickets);
  const userTickets = useSelector(state => state.user.user.tickets);
  console.log('ticket list view component');
  console.log('user tickets', userTickets);
  // console.log('user tickets', userTickets.user.tickets);

  // const fetchTickets = async () => {
  //   const ticketsFromDataBase = await getTicketsAPI();
  //   dispatch(setTickets(ticketsFromDataBase));
  // };

  // useEffect(() => {
  //   fetchTickets()
  // }, []);

  return (
    <div className='ticket-list'>
      {
        userTickets?.map(ticket => {
          return <Ticket key={ticket._id} ticket={ticket} className='single-ticket' />
        })
      }
    </div>
  );
};

export default TicketList;
