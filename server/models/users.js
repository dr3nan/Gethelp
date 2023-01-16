import mongoose from './index.js';

const usersSchema = new mongoose.Schema({
  nickname: String,
  admin: Boolean,
  password: String,
  email: String,
  tickets: [
    {
      title: String,
      status: String,
      date: String,
      user: String,
      messages: [
        {
          message: String,
          sender: String,
          date: String,
        }
      ],
    }
  ]
});

const Users = mongoose.model('Users', usersSchema);
export default Users;
