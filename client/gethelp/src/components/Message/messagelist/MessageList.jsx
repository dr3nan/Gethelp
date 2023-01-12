import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages as getMessagesAPI } from '../../../api/apiMessages';
import { setMessages } from '../../../slices/MessageSlice';
import Message from '../message/Message';

const MessageList = () => {
  const dispatch = useDispatch();

  const messages = useSelector(state => state.messages);

  const fetchMessages = async () => {
    const messagesFromDataBase = await getMessagesAPI();
    // console.log('ticketsfromDB', ticketsFromDataBase)
    dispatch(setMessages(messagesFromDataBase))
  };

  // useEffect(() => {
  //   fetchMessages(message._id)
  // }, []);

  console.log('messages:', messages);

  return (
    <div className='message-list'>
      {
        // (tickets && tickets.length) ? tickets.map(ticket => {
        messages?.map(message => {
          return <Message key={message._id} ticket={message} />
        })
      }
    </div>
  );
};

export default MessageList;