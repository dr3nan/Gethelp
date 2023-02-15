import { BASE_URL } from './constants';

export const getMessages = async (ticketId) => {
  try {
    const response = await fetch(`${BASE_URL}/ticket/${ticketId}/messages`);
    console.log('response', response);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const addMessage = async (ticketId, messageToAdd) => {
  try {
    const response = await fetch(`${BASE_URL}/ticket/${ticketId}/messages/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageToAdd)
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const createMessageInTicketInUser = async (userId, ticketId, messageToAdd) => {
  console.log('methods in api call:', userId, ticketId, messageToAdd);
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/tickets/${ticketId}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageToAdd)
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const editMessage = async (ticketId, updatedData) => {
  try {
    const response = await fetch(`${BASE_URL}/ticket/${ticketId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const deleteMessage = async (ticketId) => {
  try {
    const response = await fetch(`${BASE_URL}/ticket/${ticketId}`, {
      method: 'DELETE'
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
