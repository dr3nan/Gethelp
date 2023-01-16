import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addMessage as addMessageToTicketAPI, createMessageInTicketInUser as messageToTicketInUserAPI} from '../../../api/apiMessages';
import { createMessageInTicketInUser as messageToTicketInUserAPI} from '../../../api/apiMessages';
import { getUser as getUserFromAPI } from '../../../api/apiUsers';
import { activeTicket as setActiveTicket } from '../../../slices/ActiveTicketSlice'
import { isUserLogged } from '../../../slices/UserSlice';

const CreateMessage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => user);
  // we are receiving the active ticket from the reducer activeTicket (state), in the ActiveTicketSlice
  // we will receive the whole ticket by being in the ticket itself
  const activeTicket = useSelector((state) => state.activeTicket);

  console.log(activeTicket);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const message = {
      message: formData.get('message'),
      sender: activeTicket.user,
      date: new Date().toISOString().slice(0, 16)
    }
    try {

      // call to update message in user ticket array
      const messageToTicketInUserAPI = await (user._id, activeTicket._id, message);
      // get updated user from db
      const userWithNewMessage = await getUserFromAPI(user._id);
      // update the activeTicket state

      dispatch(setActiveTicket(messageToTicket));
      // update the user state
      dispatch(isUserLogged(userWithNewMessage));
      console.log('user after message insertion', user);
      console.log('message added to ticket');
    } catch (err) {
      console.error(err);
    }
    // to reset input once submit
    event.target.reset();
  };

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
