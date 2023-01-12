import { BASE_URL } from './constants';

export const getMessages = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/ticket/${id}/messages`);
    console.log('response', response);
    return response.json();
  } catch (err) {
    console.error(err);
  }
};

export const addMessage = async (id, addedMessage) => {
  try {
    const response = await fetch(`${BASE_URL}/ticket/${id}/messages/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addedMessage)
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const editMessage = async (id, updatedData) => {
  try {
    const response = await fetch(`${BASE_URL}/ticket/${id}`, {
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

export const deleteMessage = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/ticket/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
