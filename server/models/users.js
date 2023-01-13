import mongoose from './index.js';

const usersSchema = new mongoose.Schema({
  nickname: String,
  admin: Boolean,
  email: String,
  tickets: []
});

const Users = mongoose.model('Users', usersSchema);
export default Users;
