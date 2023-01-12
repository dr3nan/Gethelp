import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages as getMessagesAPI } from '../../../api/apiMessages';
import { setMessages } from '../../../slices/MessageSlice';
import CreateMessage from '../createmessage/CreateMessage';
import Message from '../message/Message';

const MessageList = () => {
  const dispatch = useDispatch();

  const messages = useSelector(state => state.messages);
  console.log('messages', messages);

  const fetchMessages = async () => {
    const messagesFromDataBase = await getMessagesAPI();
    // console.log('ticketsfromDB', ticketsFromDataBase)
    dispatch(setMessages(messagesFromDataBase))
  };

  useEffect(() => {
    fetchMessages(messages)
  }, []);

  console.log('messages:', messages);

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