import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTickets as getTicketsAPI } from '../../../api/apiTickets';
import { getUser as getUserFromAPI } from '../../../api/apiUsers';
import { setTickets } from '../../../slices/TicketSlice';
import { isUserLogged } from '../../../slices/UserSlice';
import Ticket from '../ticket/Ticket';

const TicketsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // we retrieve current user from store
  const user = useSelector(({ user }) => user);
  console.log('user active', user);

  // we retrieve all tickets from store
  const adminTickets = useSelector(state => state.tickets);

  //we retrieve all tickets in database with an api call for admin user
  const fetchAllTickets = async () => {
    const ticketsFromDataBase = await getTicketsAPI();
    dispatch(setTickets(ticketsFromDataBase));
  };
  // fetch current user and update state
  const fetchCurrentUserWithTickets = async () => {
    const userFromDataBase = await getUserFromAPI(user._id);
    dispatch(isUserLogged(userFromDataBase));
  };

  // useEffect(() => {
  //   if (!user.isLoggedIn) {
  //     navigate('/login');
  //   }
  // }, [user, navigate]);

  useEffect(() => {
    fetchCurrentUserWithTickets()
  }, []);

  // we display all tickets from db for admin user
  useEffect(() => {
    if (user.admin) fetchAllTickets()
  }, [user]);

  if (user === null) return user;

  return (
    <div className='ticket-list'>
      {user.admin ? (
        <>
          <h2>Admin Tickets</h2>
          {adminTickets.map((ticket) => (
            <Ticket key={ticket._id} ticket={ticket} />
          ))}
        </>
      ) :
        (
          <>
            <h2>Usuer Tickets</h2>
            {user.tickets?.map((ticket) => (
              <Ticket key={ticket._id} ticket={ticket} />
            ))}
          </>
        )
      }
    </div>
  );
};

export default TicketsList;
