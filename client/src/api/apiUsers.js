import { BASE_URL } from './constants';

export const getUser = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}`);
    return await response.json()
  } catch (err) {
    console.error(err)
  }
};

export const getUserByEmail = async (email) => {
  try {
    const response = await fetch(`${BASE_URL}/user/email/${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json()
  } catch (err) {
    console.error(err)
  }
};
// FEATURE
// export const getUserFromAuth0ToCreateInAPI = async (Auth0User) => {
//   const userToCreate = {
//     username: Auth0User.nickname,
//     admin: false,
//     email: Auth0User.email
//   }
//   try {
//     const userCreated = await fetch(`${BASE_URL}/newUser`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userToCreate)
//     });
//     return await userCreated.json();
//   } catch (err) {
//     console.error(err);
//   }
// };


// POSSIBLE FEATURE: to be able to create users for
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
