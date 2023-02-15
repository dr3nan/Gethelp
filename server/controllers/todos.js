import Todos from '../models/todos.js';

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todos.find();
    res.send(todos);
  } catch (error) {
    console.error(error)
  }
};

export const createTodo = async (req, res) => {
  try {
    const post = await Todos.create(req.body);
    res.status(201);
    res.send(post);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const del = await Todos.deleteOne({ _id: req.params.id });
    res.status(200);
    res.send(del);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const upd = await Todos.findOne({ _id: req.params.id });

    if (req.body.title) {
      upd.title = req.body.title;
    }
    // console.log(req.body);

    if (req.body.note) {
      upd.note = req.body.note;
    }

    if (req.body.date) {
      upd.date = req.body.date;
    }

    await upd.save();
    res.status(201);
    res.send(upd);
  } catch (err) {
    console.error(err);
    res.status(404);
  }
};
