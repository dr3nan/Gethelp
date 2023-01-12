import { useSelector } from 'react-redux'

export const ActiveTicket = function ({ ticket }) {
  const activeTicket = useSelector(state => state.activeTicket);
  const ticketToRender = ticket || activeTicket;
  console.log(ticketToRender)

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
        </>
      )}
    </>
  )
}