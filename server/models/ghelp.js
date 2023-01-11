import mongoose from './index.js';

const ticketsSchema = new mongoose.Schema({
  id: String,
  title: String,
  messages: [
    {
      id: String,
      message: String,
      sender: String
    }
  ]
});

export const Tickets = mongoose.model('Tickets', ticketsSchema);

const usersSchema = new mongoose.Schema({
  id: String,
  name: String,
  lastName: String,
  email: String,
  tickets: []
});

export const Users = mongoose.model('Users', usersSchema);

// export default Users;