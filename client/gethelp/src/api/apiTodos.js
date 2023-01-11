import { BASE_URL } from "../store/constants";

export const getToDos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/getTodos`);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const addToDo = async (addedToDo) => {
  try {
    const response = await fetch(`${BASE_URL}/newTodo`, {
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

export const deleteToDo = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/todo/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const editToDo = async (id, updatedData) => {
  try {
    console.log('test update', id, updatedData);
    const response = await fetch(`${BASE_URL}/todo/${id}`, {
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
