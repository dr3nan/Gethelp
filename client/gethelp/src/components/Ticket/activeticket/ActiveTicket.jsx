import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreateMessage from '../../Message/createmessage/CreateMessage';


export const ActiveTicket = function ({ ticket }) {
  const location = useLocation();
  const ticketId = location.state.ticketId;
  const activeTicket = useSelector(state => state.activeTicket);
  console.log('active ticket', activeTicket);
  const ticketToRender = ticket || activeTicket;
  console.log(ticketToRender);

  // useEffect(() => {
  //   console.log('active ticket', activeTicket.mesasges);
  // }, [activeTicket])

  return (
    <>
      {ticketToRender && (
        <>
          <p>{ticketToRender.title}</p>
          <p>{ticketToRender.status}</p>
          <p>{ticketToRender.date}</p>
          {ticketToRender.messages?.map((message, index) => (
            <div key={index}>
              <h1>{message.message}</h1>
              <h1>{message.sender}</h1>
              <h1>{message.date}</h1>
            </div>
          ))}
          <CreateMessage ticketId={ticketId} />
        </>
      )}
    </>
  )
};