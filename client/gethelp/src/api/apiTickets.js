import { BASE_URL } from './constants';

export const getTickets = async () => {
  try {
    const response = await fetch(`${BASE_URL}/getTickets`);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const getTicket = async (ticketId) => {
  try {
    const response = await fetch(`${BASE_URL}/ticket/${ticketId}`);
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
export const createTicketInUser = async (userId, ticketToAdd) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/tickets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ticketToAdd)
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const deleteTicket = async (ticketId) => {
  try {
    const response = await fetch(`${BASE_URL}/ticket/${ticketId}`, {
      method: 'DELETE'
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const deleteTicketWithinUser = async (userId, ticketId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/tickets/${ticketId}`, {
      method: 'DELETE'
    });
    return await response.text();
  } catch (err) {
    console.error(err);
  }
};

export const editTicket = async (ticketId, updatedData) => {
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

export const editTicketInUser = async (userId, ticketId, updatedData) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/tickets/${ticketId}`, {
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
