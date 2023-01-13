import { BASE_URL } from './constants';

export const getUser = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${id}`);
    console.log('response', response);
    return await response.json()
  } catch (err) {
    console.error(err)
  }
};

export const getUserFromAuth0ToAPI = async (Auth0User) => {
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
