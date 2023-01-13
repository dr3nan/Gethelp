import Users from '../models/users.js';

export const getUser = async (req, res) => {
  try {
    const get = await Users.findOne({ _id: req.params.id });
    res.status(200);
    res.send(get);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const createUser = async (req, res) => {
  try {
    const post = await Users.create(req.body);
    res.status(201);
    res.send(post);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const del = await Users.deleteOne({ _id: req.params.id });
    res.status(200);
    res.send(del);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
