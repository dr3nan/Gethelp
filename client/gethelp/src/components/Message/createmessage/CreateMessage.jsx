import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { resetMessage } from '../../../slices/MessageSlice';
import { addMessage as addMessageAPI } from '../../../api/apiMessages';
import { activeTicket as setActiveTicket } from '../../../slices/ActiveTicketSlice'

const CreateMessage = () => {
  const dispatch = useDispatch();
  // we are receiving the active ticket from the reducer activeTicket (state), in the ActiveTicketSlice
  // we will receive the whole ticket by being in the ticket itself
  const activeTicket = useSelector((state) => state.activeTicket);
  console.log('active ticket', activeTicket);

  const { user } = useSelector(({ user }) => user)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const message = {
      message: formData.get('message'),
      sender: activeTicket.user,
      date: new Date().toISOString().slice(0, 16)
    }
    try {
      const ticket = await addMessageAPI(activeTicket._id, message);
      dispatch(setActiveTicket(ticket));
      console.log('message added to ticket');
    } catch (err) {
      console.error(err);
    }
    event.target.reset();
  };

  // const handleReset = () => {
  //   dispatch(resetMessage);
  // };

  return (
    <div className='create-message'>
      <form onSubmit={event => handleSubmit(event)}>
        <div className='create-fields'>
          <label htmlFor='message'>Message</label>
          <input
            type='text'
            name='message'
            id='message'
          />
        </div>
        <div className='create-buttons'>
          <button type='submit'>Send</button>
          {/* <button type='reset' onClick={handleReset}>Reset</button> */}
        </div>
      </form>
    </div>
  )
};

export default CreateMessage;
