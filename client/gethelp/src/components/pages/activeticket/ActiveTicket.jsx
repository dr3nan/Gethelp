import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateMessage from '../../Message/createmessage/CreateMessage';
import { getTicket as getTicketFromAPI } from '../../../api/apiTickets';
import { useNavigate, useParams } from 'react-router-dom';
import { activeTicket as setActiveTicket } from '../../../slices/ActiveTicketSlice'

// TODO: initially added message argument
const ActiveTicket = () => {
  const { id } = useParams();
  console.log('id only', id);
  const dispatch = useDispatch();
  const activeTicket = useSelector(state => state.activeTicket);
  console.log('active ticket', activeTicket._id);
  const navigate = useNavigate();
  // TODO: part of the handleEdit
  // const [isEditable, setIsEditable] = useState(false);
  // const [messageContent, setMessageContent] = useState(message);

  const getTicket = async () => {
    const ticket = await getTicketFromAPI(id);
    console.log('ticket', ticket);
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
                {/* <input */}
                <h4>{message.message}</h4>
                <h4>{message.sender}</h4>
                <h4>{message.date}</h4>
                {/* <button onClick={() => handleEdit(message._id)}>Edit</button> */}
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