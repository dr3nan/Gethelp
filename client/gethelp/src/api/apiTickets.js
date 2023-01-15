import { BASE_URL } from './constants';

export const getTickets = async () => {
  try {
    const response = await fetch(`${BASE_URL}/getTickets`);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const getTicket = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/ticket/${id}`);
    console.log('response', response);
    return await response.json()
  } catch (err) {
    console.error(err)
  }
};

export const addTicket = async (addedTicket) => {
  try {
    const response = await fetch(`${BASE_URL}/newTicket`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addedTicket)
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

// TO FIX
export const createTicketInUser = async (id, addedTicket) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${id}/tickets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addedTicket)
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const deleteTicket = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/ticket/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const editTicket = async (id, updatedData) => {
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
