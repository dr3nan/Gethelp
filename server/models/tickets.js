import mongoose from './index.js';

const ticketsSchema = new mongoose.Schema({
  title: String,
  status: String,
  date: String,
  user: String,
  messages: [
    {
      message: String,
      sender: String,
      date: String
    }
  ]
});

const Tickets = mongoose.model('Tickets', ticketsSchema);
export default Tickets;
