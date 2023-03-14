import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addMessage as addMessageToTicketAPI, createMessageInTicketInUser as messageToTicketInUserAPI} from '../../../api/apiMessages';
import { createMessageInTicketInUser as messageToTicketInUserAPI } from '../../../api/apiMessages';
import { getUser as getUserFromAPI } from '../../../api/apiUsers';
import { activeTicket as setActiveTicket, addMessageToTicket as addMessageToActiveTicket } from '../../../slices/ActiveTicketSlice'
import { isUserLogged } from '../../../slices/UserSlice';

const CreateMessage = () => {
  const dispatch = useDispatch();
  // user state called to be able to pass user id to new message
  const user = useSelector(({ user }) => user);
  // we are receiving the active ticket from the reducer activeTicket (state), in the ActiveTicketSlice
  // we will receive the whole ticket by being in the ticket itself
  const activeTicket = useSelector((state) => state.activeTicket);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const message = {
      message: formData.get('message'),
      sender: user.nickname,
      date: new Date().toISOString().slice(0, 16)
    }
    try {
      // call to update message in user ticket array inuser db
      await messageToTicketInUserAPI(user._id, activeTicket._id, message);
      dispatch(addMessageToActiveTicket(message));
      const userWithNewMessage = await getUserFromAPI(user._id);
      // update the user state
      dispatch(isUserLogged(userWithNewMessage));
    } catch (err) {
      console.error(err);
    }
    // reset input fields once submit
    event.target.reset();
  };

  return (
    <div className='create-message'>
      <form onSubmit={event => handleSubmit(event)}>
        <div className='create-fields-message'>
          <label htmlFor='message'>New message</label>
          <textarea
            className='text-area'
            type='text'
            name='message'
            id='message'
          />
        </div>
        <div className='create-buttons-message'>
          <button type='submit'>Send</button>
        </div>
      </form>
    </div>
  )
};

export default CreateMessage;
