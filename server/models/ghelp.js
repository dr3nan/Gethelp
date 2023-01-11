import mongoose from './index.js';

const ticketsSchema = new mongoose.Schema({
  id: Number,
  title: String,
  messages: [
    {
      id: Number,
      message: String,
      sender: String
    }
  ]
});

export const Tickets = mongoose.model('Tickets', ticketsSchema);

const usersSchema = new mongoose.Schema({
  id: Number,
  name: String,
  lastName: String,
  email: String,
  tickets: []
});

export const Users = mongoose.model('Users', usersSchema);

// export default Users;