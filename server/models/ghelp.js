import mongoose from './index.js';

const ticketsSchema = new mongoose.Schema({
  title: String,
  status: String,
  messages: [
    {
      message: String,
      sender: String
    }
  ]
});

export const Tickets = mongoose.model('Tickets', ticketsSchema);

const usersSchema = new mongoose.Schema({
  id: String,
  name: String,
  admin: Boolean,
  lastName: String,
  email: String,
  tickets: []
});

export const Users = mongoose.model('Users', usersSchema);

const todosSchema = new mongoose.Schema({
  title: String,
  date: String,
  note: String
});

export const Todo = mongoose.model('Todos', todosSchema);
