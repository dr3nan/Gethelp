import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateMessage from '../../Message/createmessage/CreateMessage';
import { getTicket as getTicketFromAPI } from '../../../api/apiTickets';
import { useParams } from 'react-router-dom';
import { activeTicket as setActiveTicket} from '../../../slices/ActiveTicketSlice'

export const ActiveTicket = function () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const activeTicket = useSelector(state => state.activeTicket);

  const getTicket = async () => {
    const ticket = await getTicketFromAPI(id);
    console.log('ticket', ticket);
    dispatch(setActiveTicket(ticket));
  }

  useEffect(() => {
    getTicket();
  }, [])

  return (
    <>
      {activeTicket && (
        <>
          <p>{activeTicket.title}</p>
          <p>{activeTicket.status}</p>
          <p>{activeTicket.date}</p>
          {activeTicket.messages?.map((message, index) => (
            <div key={index}>
              <h1>{message.message}</h1>
              <h1>{message.sender}</h1>
              <h1>{message.date}</h1>
            </div>
          ))}
          <CreateMessage ticketId={id} />
        </>
      )}
    </>
  )
};