import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets as getTicketsAPI } from '../../../api/apiTickets';
import { setTickets } from '../../../slices/TicketSlice';
import Ticket from '../ticket/Ticket';

const TicketList = () => {
  const dispatch = useDispatch();

  // we retrieve current user tickets from store
  const { user } = useSelector(({ user }) => user);

  // we retrieve all tickets from store
  const adminTickets = useSelector(state => state.tickets);

  //we retrieve all tickets in database with an api call for admin user
  const fetchTickets = async () => {
    const ticketsFromDataBase = await getTicketsAPI();
    dispatch(setTickets(ticketsFromDataBase));
  };

  // we display all tickets from db for admin user
  useEffect(() => {
    if (user.admin) fetchTickets()
  }, [user]);

  if (user === null) return user;
  return (
    <div className='ticket-list'>
      {user.admin ? (
        <>
          <h2>Admin Tickets</h2>
          {adminTickets.map((ticket) => (
            <Ticket key={ticket._id} ticket={ticket} className='single-ticket' />
          ))}
        </>
      ) :
        (
          <>
            <h2>Usuer Tickets</h2>
            {user.tickets.map((ticket) => (
              <Ticket key={ticket._id} ticket={ticket} className='single-ticket' />
            ))}
          </>
        )
      }
    </div>
  );
};

export default TicketList;
