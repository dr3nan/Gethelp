import { BASE_URL } from './constants';

export const getMessages = async () => {
  try {
    const response = await fetch(`${BASE_URL}/getMessages`);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const addMessage = async (addedToDo) => {
  try {
    const response = await fetch(`${BASE_URL}/newMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addedToDo)
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
