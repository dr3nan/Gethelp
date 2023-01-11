import { BASE_URL } from "../store/constants";

export const getToDos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/getTodos`);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

