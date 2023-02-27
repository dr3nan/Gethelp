import Users from '../models/users.js';

export const getAllUsers = async (req, res) => {
  try {
    const get = await Users.find();
    res.status(200);
    res.send(get);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

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

export const getUserByMail = async (req, res) => {
  try {
    // const { email } = req.params;
    console.log('email from request ============>', req.params.email);
    const user = await Users.findOne({ email: req.params.email });
    res.status(200);
    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

// export const getUserByMailTest = async (req, res) => {
//   try {
//     const get = await Users.find();
//     res.status(200);
//     res.send(get);
//   } catch (err) {
//     console.error(err);
//     res.status(500);
//   }
// };

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

// export const createTicketInUser = async (req, res) => {
//   try {
//     const { ticket } = req.body;
//     console.log('ticket', ticket);
//     const addTicketToUser = await Users.findOneAndUpdate(
//       { _id: req.params.id },
//       { $addToSet: { tickets: ticket } },
//       { new: true }
//     );
//     if (!addTicketToUser) return res.status(404).send({ error: 'User not found' });
//     res.status(201);
//     res.send(addTicketToUser);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({ error: 'Error adding ticket' });
//   }
// };

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
