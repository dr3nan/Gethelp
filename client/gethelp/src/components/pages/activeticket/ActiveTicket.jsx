import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateMessage from '../../Message/createmessage/CreateMessage';
import { getTicket as getTicketFromAPI } from '../../../api/apiTickets';
// import { editMessage as updateMessageFromAPI } from '../../../api/apiMessages';
import { useNavigate, useParams } from 'react-router-dom';
import { activeTicket as setActiveTicket } from '../../../slices/ActiveTicketSlice'
// import { editMessageInTicket as editMessage } from '../../../slices/ActiveTicketSlice';

// TODO: initially added message argument
const ActiveTicket = function () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const activeTicket = useSelector(state => state.activeTicket);
  const navigate = useNavigate();
  // TODO: part of the handleEdit
  // const [isEditable, setIsEditable] = useState(false);
  // const [messageContent, setMessageContent] = useState(message);

  const getTicket = async () => {
    const ticket = await getTicketFromAPI(id);
    console.log('ticket', ticket);
    dispatch(setActiveTicket(ticket));
  };

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