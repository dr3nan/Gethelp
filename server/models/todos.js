import mongoose from './index.js';

const todosSchema = new mongoose.Schema({
  title: String,
  date: String,
  note: String
});

const Todos = mongoose.model('Todos', todosSchema);
export default Todos;
