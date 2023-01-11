import { Tickets, Users } from '../models/ghelp';

export const getTickets = async (req, res) => {
  try {
    const get = await Tickets.find();
    res.status(200);
    res.send(get);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const getTicket = async (req, res) => {
  try {
    const getOne = await Tickets.findOne({ _id: req.params.id });
    res.status(200);
    res.send(getOne);
  } catch (err) {
    console.error(err);
    res.status(404);
  }
};

export const createTicket = async (req, res) => {
  try {
    const post = await Tickets.create(req.body);
    res.status(201);
    res.send(post);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const del = await Todo.deleteOne({ _id: req.params.id });
    res.status(200);
    res.send(del);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const editMessage = async (req, res) => {
  try {
    const upd = await Tickets.updateOne({ _id: req.params.id, 'messages.id': req.body.messages.id }, { $set: { 'messages.$.message': req.body.messages.message } });
    console.log('update message');

    await upd.save();
    res.status(201);
    res.send(upd);
  } catch (err) {
    console.error(err);
    res.status(404);
  }
};
