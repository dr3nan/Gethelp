import { BASE_URL } from './constants';

export const getTickets = async () => {
  try {
    const response = await fetch(`${BASE_URL}/getTickets`);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const addTicket = async (addedToDo) => {
  try {
    const response = await fetch(`${BASE_URL}/newTicket`, {
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