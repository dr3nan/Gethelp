import { BASE_URL } from './constants';

export const getUser = async (email) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${email}`);
    console.log('response', response);
    return await response.json()
  } catch (err) {
    console.error(err)
  }
};

export const getUserFromAuth0ToCreateInAPI = async (Auth0User) => {
  const userToCreate = {
    username: Auth0User.nickname,
    admin: false,
    email: Auth0User.email
  }
  try {
    const userCreated = await fetch(`${BASE_URL}/newUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userToCreate)
    });
    return await userCreated.json();
  } catch (err) {
    console.error(err);
  }
};

export const addTicketToUser = async (id, addedTicket) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${id}/tickets/`, {
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

// export const addUser = async (addedUser) => {
//   try {
//     const response = await fetch(`${BASE_URL}/newUser`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(addedUser)
//     });
//     return await response.json();
//   } catch (err) {
//     console.error(err);
//   }
// };
