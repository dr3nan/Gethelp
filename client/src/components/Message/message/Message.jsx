import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editMessage, deleteMessage } from '../../../slices/MessageSlice';
import { editMessage as updateMessageAPI, deleteMessage as deleteMessageAPI } from '../../../api/apiMessages';
import { getDateFromDateString } from '../../../helpers/dateTools'

const Message = ({ message }) => {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [messageContent, setMessageContent] = useState(message.title);

  const handleEdit = async () => {
    setIsEditable(!isEditable)
    if (isEditable) {
      try {
        const updatedMessageContent = { messageContent };
        await updateMessageAPI(message._id, updatedMessageContent);
        dispatch(editMessage(updatedMessageContent));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleDelete = async (message) => {
    try {
      await deleteMessageAPI(message._id);
      dispatch(deleteMessage(message));
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <div className='solo-message'>
      <div className='message-fields'>
        <label htmlFor='message'>Message</label>
        <input
          type='text'
          readOnly={!isEditable}
          value={messageContent}
          onChange={e => setMessageContent(e.target.value)}
        />
        <div className='EWDate-message'>
          {getDateFromDateString(message.date).toLocaleString('default', {
            minute: 'numeric',
            hour: 'numeric',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        </div>
        <label type='text'>{message.sender}</label>
      </div>
      <div className='message-buttons'>
        <button onClick={handleEdit}>{isEditable ? 'Save' : 'Edit'}</button>
        <button onClick={() => handleDelete(message)}>X</button>
      </div>
    </div>
  )
};

export default Message;
