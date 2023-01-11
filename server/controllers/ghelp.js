import { Tickets, Users } from '../models/ghelp.js';

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

export const createMessage = async (req, res) => {
  try {
    const postMessage = await Tickets.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { messages: { id: req.body.id, message: req.body.message, sender: req.body.sender } } },
      { new: true }
    );
    res.status(201);
    res.send(postMessage);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const editMessage = async (req, res) => {
  try {
    const updMessage = await Tickets.updateOne(
      { _id: req.params.id, 'messages.id': req.body.messages.id },
      { $set: { 'messages.$.message': req.body.messages.message } }
    );
    console.log('update message');
    await upd.save();
    res.status(201);
    res.send(updMessage);
  } catch (err) {
    console.error(err);
    res.status(404);
  }
};
