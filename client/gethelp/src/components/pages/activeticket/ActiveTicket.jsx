import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateMessage from '../../Message/createmessage/CreateMessage';
import { getTicket as getTicketFromAPI } from '../../../api/apiTickets';
import { useNavigate, useParams } from 'react-router-dom';
import { activeTicket as setActiveTicket } from '../../../slices/ActiveTicketSlice'

const ActiveTicket = function () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const activeTicket = useSelector(state => state.activeTicket);
  const navigate = useNavigate();

  const getTicket = async () => {
    const ticket = await getTicketFromAPI(id);
    console.log('ticket', ticket);
    dispatch(setActiveTicket(ticket));
  }

  useEffect(() => {
    getTicket();
  }, []);

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <div className='messages-list'>
        {activeTicket && (
          <>
            <div className='initial-message'>
              <p>{activeTicket.status}</p>
              <p>{activeTicket.title}</p>
              <p>{activeTicket.date}</p>
            </div>
            {activeTicket.messages?.map((message, index) => (
              <div key={index} className='new-messages'>
                <h4>{message.message}</h4>
                <h4>{message.sender}</h4>
                <h4>{message.date}</h4>
              </div>
            ))}
            <div className='create-message-ticket'>
              <CreateMessage ticketId={id} />
            </div>
          </>
        )}
      </div>
    </>
  )
};

export default ActiveTicket;