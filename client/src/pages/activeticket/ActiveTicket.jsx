import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateMessage from '../../components/Message/createmessage/CreateMessage';
import { getTicket as getTicketFromAPI } from '../../api/apiTickets';
import { useNavigate, useParams } from 'react-router-dom';
import { activeTicket as setActiveTicket } from '../../slices/ActiveTicketSlice';
import { getDateFromDateString } from '../../helpers/dateTools';
import '../../components/Message/createmessage/CreateMessage.css';
import './ActiveTicket.css';

const ActiveTicket = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const activeTicket = useSelector(state => state.activeTicket);
  const navigate = useNavigate();
  // TODO: part of the handleEdit
  // const [isEditable, setIsEditable] = useState(false);
  // const [messageContent, setMessageContent] = useState(message);

  const getTicket = async () => {
    const ticket = await getTicketFromAPI(id);
    dispatch(setActiveTicket(ticket));
  };

  useEffect(() => {
    getTicket()
  }, []);

  // TODO: handleEdit
  // const handleEdit = async () => {
  //   setIsEditable(!isEditable)
  //   if (isEditable) {
  //     try {
  //       const updatedMessageContent = { messageContent };
  //       await updateMessageFromAPI(message._id, updatedMessageContent);
  //       dispatch(editMessage(updatedMessageContent));
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getTicket();
  // }, []);

  return (
    <div className='active-ticket-component'>
      <div className='top-buttons'>
        <button className='back-button-active' onClick={() => navigate(-1)}>Tickets</button>
      </div>
      <div className='active-ticket-wrapper'>
        <div className='messages-list'>
          {activeTicket && (
            <>
              <div className='initial-message'>
                <p className='ticket-user'>{activeTicket.user}</p>
                <p className='ticket-title'>{activeTicket.title}</p>
                <p className='ticket-date'>{getDateFromDateString(activeTicket.date).toLocaleString('default', {
                  minute: 'numeric',
                  hour: 'numeric',
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}</p>
              </div>
              {activeTicket.messages?.map((message, index) => {
                const containerClass = message.sender === activeTicket.user
                  ? 'message-container-right' : 'message-container-left';
                return (
                  <div key={index} className={containerClass}>
                    <p className='messsage-sender'>{message.sender}</p>
                    <p className='message-message'>{message.message}</p>
                    <p className='message-date'>{getDateFromDateString(message.date).toLocaleString('default', {
                      minute: 'numeric',
                      hour: 'numeric',
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}</p>
                    {/* <button onClick={() => handleEdit(message._id)}>Edit</button> */}
                  </div>
                );
              })}
              <div className='create-message-ticket'>
                <CreateMessage ticketId={id} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
};

export default ActiveTicket;
