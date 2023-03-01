import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages as getMessagesAPI } from '../../../api/apiMessages';
import { setMessages } from '../../../slices/MessageSlice';
import CreateMessage from '../createmessage/CreateMessage';
import Message from '../message/Message';

const MessageList = () => {
  const dispatch = useDispatch();

  const messages = useSelector(state => state.messages);

  const fetchMessages = async () => {
    const messagesFromDataBase = await getMessagesAPI();
    dispatch(setMessages(messagesFromDataBase))
  };

  useEffect(() => {
    fetchMessages(messages)
  }, []);

  // FEATURE; ability to reply to messages instead of only adding new messages
  return (
    <>
      <div className='message-list'>
        {
          messages?.map(message => {
            return <Message key={message._id} ticket={message} />
          })
        }
      </div>
      <div className='create-message'>
        <CreateMessage />
      </div>
    </>
  );
};

export default MessageList;
